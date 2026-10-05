const fs = require("fs");
const express = require("express");
const session = require("express-session");
const bcrypt = require("bcryptjs");
const crypto = require("crypto");
const path = require("path");
const db = require("./db");

const app = express();
const PORT = process.env.PORT || 3000;
const PUBLIC_DIR = path.join(__dirname, "public");

app.use(express.json());
// Không hardcode session secret trong mã nguồn — nếu không đặt biến môi trường
// SESSION_SECRET, tự sinh ngẫu nhiên mỗi lần khởi động (phiên đăng nhập sẽ mất khi
// server restart, nhưng không để lộ secret cố định trong code đẩy lên GitHub).
const SESSION_SECRET = process.env.SESSION_SECRET || crypto.randomBytes(32).toString("hex");
app.use(
  session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 1000 * 60 * 60 * 24 * 7 },
  })
);

const CUSTOMER_INDUSTRIES = ["collision", "wood", "construction", "marine", "automotive", "composite", "metalworking", "tool-manufacturing", "aerospace", "wind-energy", "powder-coating", "pharma-food", "glass-tempered", "ceramics", "b2b-trade", "other"];

function industryFields(body) {
  const industry = body.industry || "";
  if (!industry) return { industry: "", industryOther: "" };
  if (!CUSTOMER_INDUSTRIES.includes(industry)) return null;
  if (industry === "other") return { industry, industryOther: String(body.industryOther || "").trim() };
  return { industry, industryOther: "" };
}

function publicUser(u) {
  return {
    id: u.id,
    role: u.role,
    name: u.name,
    company: u.company,
    phone: u.phone,
    username: u.username,
    industry: u.industry || "",
    industryOther: u.industryOther || "",
  };
}

function requireRole(...roles) {
  return (req, res, next) => {
    if (!req.session.user) return res.status(401).json({ error: "Chưa đăng nhập" });
    if (!roles.includes(req.session.user.role)) return res.status(403).json({ error: "Không có quyền truy cập" });
    next();
  };
}

// ---------- Auth ----------
app.post("/api/login", (req, res) => {
  const { username, password } = req.body || {};
  const user = db.get("users").find({ username }).value();
  if (!user || !bcrypt.compareSync(password || "", user.passwordHash)) {
    return res.status(401).json({ error: "Sai tên đăng nhập hoặc mật khẩu" });
  }
  req.session.user = publicUser(user);
  res.json({ user: req.session.user });
});

app.post("/api/logout", (req, res) => {
  req.session.destroy(() => res.json({ ok: true }));
});

app.get("/api/me", (req, res) => {
  res.json({ user: req.session.user || null });
});

// ---------- Admin: quản lý tài khoản nhân viên & khách hàng ----------
app.get("/api/admin/users", requireRole("admin"), (req, res) => {
  const users = db
    .get("users")
    .filter((u) => u.role !== "admin")
    .map(publicUser)
    .value();
  res.json({ users });
});

function createUser(req, res) {
  const { role, name, company, phone, username, password } = req.body || {};
  if (!["staff", "customer"].includes(role)) return res.status(400).json({ error: "Vai trò không hợp lệ" });
  const ind = role === "customer" ? industryFields(req.body || {}) : { industry: "", industryOther: "" };
  if (!ind) return res.status(400).json({ error: "Nhóm ngành không hợp lệ" });
  if (ind.industry === "other" && !ind.industryOther) return res.status(400).json({ error: "Vui lòng nhập nhóm ngành khác" });
  if (!name || !username || !password) return res.status(400).json({ error: "Thiếu tên, tên đăng nhập hoặc mật khẩu" });
  if (db.get("users").find({ username }).value()) return res.status(409).json({ error: "Tên đăng nhập đã tồn tại" });
  const user = {
    id: crypto.randomUUID(),
    role,
    name,
    company: company || "",
    phone: phone || "",
    username,
    passwordHash: bcrypt.hashSync(password, 10),
    industry: ind.industry,
    industryOther: ind.industryOther,
    createdAt: new Date().toISOString(),
  };
  db.get("users").push(user).write();
  res.json({ user: publicUser(user) });
}

app.post("/api/admin/users", requireRole("admin"), createUser);

app.post("/api/staff/customers/new", requireRole("admin", "staff"), (req, res) => {
  req.body = { ...(req.body || {}), role: "customer" };
  createUser(req, res);
});

app.put("/api/admin/users/:id", requireRole("admin"), (req, res) => {
  const existing = db.get("users").find({ id: req.params.id }).value();
  if (!existing) return res.status(404).json({ error: "Không tìm thấy tài khoản" });
  const { name, company, phone, password } = req.body || {};
  const patch = {};
  if (name !== undefined) patch.name = name;
  if (company !== undefined) patch.company = company;
  if (phone !== undefined) patch.phone = phone;
  if (password) patch.passwordHash = bcrypt.hashSync(password, 10);
  db.get("users").find({ id: req.params.id }).assign(patch).write();
  res.json({ user: publicUser(db.get("users").find({ id: req.params.id }).value()) });
});

app.delete("/api/admin/users/:id", requireRole("admin"), (req, res) => {
  db.get("users").remove({ id: req.params.id }).write();
  db.get("interests").remove({ customerId: req.params.id }).write();
  res.json({ ok: true });
});

// ---------- Thư mục Drive ảnh/video khách hàng (chỉ admin & nhân viên xem) ----------
app.get("/api/media/drive-folders", requireRole("admin", "staff"), (req, res) => {
  res.json({ folders: db.get("driveFolders").value() });
});

app.post("/api/admin/drive-folders", requireRole("admin"), (req, res) => {
  const { title, url } = req.body || {};
  if (!title || !url) return res.status(400).json({ error: "Thiếu tên hoặc link" });
  if (!/^https:\/\/(drive|docs)\.google\.com\//.test(url)) return res.status(400).json({ error: "Link phải là link Google Drive" });
  const folder = { id: crypto.randomUUID(), title, url, createdAt: new Date().toISOString() };
  db.get("driveFolders").push(folder).write();
  res.json({ folder });
});

app.delete("/api/admin/drive-folders/:id", requireRole("admin"), (req, res) => {
  db.set("driveFolders", db.get("driveFolders").value().filter((f) => f.id !== req.params.id)).write();
  res.json({ ok: true });
});

// ---------- Sản phẩm nổi bật (công khai đọc, chỉ admin sửa) ----------
app.get("/api/featured", (req, res) => {
  res.json({ keys: db.get("featured").value() });
});

app.post("/api/admin/featured", requireRole("admin"), (req, res) => {
  const { key } = req.body || {};
  if (!key) return res.status(400).json({ error: "Thiếu sản phẩm" });
  if (!db.get("featured").includes(key).value()) db.get("featured").push(key).write();
  res.json({ ok: true });
});

app.delete("/api/admin/featured/:key", requireRole("admin"), (req, res) => {
  db.set("featured", db.get("featured").value().filter((k) => k !== req.params.key)).write();
  res.json({ ok: true });
});

// ---------- Nhân viên: xem khách hàng & sản phẩm quan tâm ----------
app.get("/api/staff/customers", requireRole("admin", "staff"), (req, res) => {
  const customers = db.get("users").filter({ role: "customer" }).value();
  const interests = db.get("interests").value();
  const result = customers
    .map((c) => ({
      ...publicUser(c),
      interests: interests
        .filter((i) => i.customerId === c.id)
        .sort((a, b) => b.createdAt.localeCompare(a.createdAt)),
    }))
    .sort((a, b) => b.interests.length - a.interests.length);
  res.json({ customers: result });
});

// ---------- Khách hàng: đánh dấu sản phẩm quan tâm ----------
app.get("/api/customer/interests", requireRole("customer"), (req, res) => {
  const list = db.get("interests").filter({ customerId: req.session.user.id }).value();
  res.json({ interests: list });
});

app.post("/api/customer/interests", requireRole("customer"), (req, res) => {
  const { key, brandId, slug, name, brand } = req.body || {};
  if (!key) return res.status(400).json({ error: "Thiếu dữ liệu sản phẩm" });
  const exists = db.get("interests").find({ customerId: req.session.user.id, key }).value();
  if (!exists) {
    db.get("interests")
      .push({
        id: crypto.randomUUID(),
        customerId: req.session.user.id,
        key,
        brandId: brandId || "",
        slug: slug || "",
        name: name || "",
        brand: brand || "",
        createdAt: new Date().toISOString(),
      })
      .write();
  }
  res.json({ ok: true });
});

app.delete("/api/customer/interests/:key", requireRole("customer"), (req, res) => {
  db.get("interests").remove({ customerId: req.session.user.id, key: req.params.key }).write();
  res.json({ ok: true });
});

const WORK_PHOTOS_DIR = path.join(__dirname, "protected-media", "work-photos");
app.get("/api/media/work-photos/:file", requireRole("admin", "staff"), (req, res) => {
  const filePath = path.join(WORK_PHOTOS_DIR, path.basename(req.params.file));
  if (!fs.existsSync(filePath)) return res.status(404).end();
  res.sendFile(filePath);
});

app.use(
  express.static(PUBLIC_DIR, {
    extensions: ["html"],
  })
);

// SPA-style catch-all: any unmatched route falls back to index.html
// (the site itself routes internally via #hash tabs, so this only
// matters for direct deep-links that a static host would 404 on).
app.use((req, res) => {
  res.sendFile(path.join(PUBLIC_DIR, "index.html"));
});

app.listen(PORT, () => {
  console.log(`Nhất Quán website running at http://localhost:${PORT}`);
});
