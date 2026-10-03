const path = require("path");
const fs = require("fs");
const crypto = require("crypto");
const low = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");
const bcrypt = require("bcryptjs");

const DB_DIR = process.env.DATA_DIR || path.join(__dirname, "data-store");
if (!fs.existsSync(DB_DIR)) fs.mkdirSync(DB_DIR, { recursive: true });

const adapter = new FileSync(path.join(DB_DIR, "db.json"));
const db = low(adapter);
db.defaults({ users: [], interests: [], featured: [], featuredSeeded: false, driveFolders: [] }).write();

function seedAdmin() {
  const hasAdmin = db.get("users").find({ role: "admin" }).value();
  if (hasAdmin) return;
  const username = process.env.ADMIN_USERNAME || "admin";
  // Không đặt mật khẩu mặc định cố định trong mã nguồn (rủi ro lộ thông tin đăng nhập
  // khi đẩy code lên GitHub) — nếu không có biến môi trường ADMIN_PASSWORD, tự sinh
  // mật khẩu ngẫu nhiên và chỉ in ra console của server khi khởi động lần đầu.
  const password = process.env.ADMIN_PASSWORD || crypto.randomBytes(9).toString("base64url");
  db.get("users")
    .push({
      id: crypto.randomUUID(),
      role: "admin",
      name: "Quản trị viên",
      company: "",
      phone: "",
      username,
      passwordHash: bcrypt.hashSync(password, 10),
      createdAt: new Date().toISOString(),
    })
    .write();
  console.log(
    `[seed] Đã tạo tài khoản admin mặc định — username: "${username}", password: "${password}". Hãy đăng nhập và đổi mật khẩu ngay.`
  );
}
seedAdmin();

function seedFeatured() {
  const seedFile = path.join(__dirname, "featured-seed.json");
  if (!fs.existsSync(seedFile) || db.get("featuredSeeded").value()) return;
  db.set("featuredSeeded", true).write();
  const keys = JSON.parse(fs.readFileSync(seedFile, "utf8"));
  const current = db.get("featured").value();
  const missing = keys.filter((k) => !current.includes(k));
  if (missing.length) db.get("featured").push(...missing).write();
}
seedFeatured();

module.exports = db;
