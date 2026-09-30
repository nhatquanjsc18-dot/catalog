# Nhất Quán — Website & Catalog sản phẩm

Website giới thiệu công ty và catalog sản phẩm (Mirka, Dynabrade, DeVilbiss, Wagner, Binks, Prona, Anest Iwata, Compact...) cho **Công ty Cổ phần Công nghiệp Nhất Quán**. Chạy bằng Node.js (Express) phục vụ file tĩnh, dễ push GitHub và deploy Hostinger.

## Cấu trúc dự án

```
server.js           # Express app, phục vụ toàn bộ thư mục public/
package.json
public/
  index.html         # Toàn bộ website (trang chủ + catalog dạng tab)
  catalog.html        # Redirect cũ (giữ tương thích link/bookmark cũ)
  site.json            # Web3Forms access key
  data/                  # Dữ liệu sản phẩm (JS, ~1044 sản phẩm thật)
  img/                    # Ảnh sản phẩm, khách hàng, xưởng
```

## Chạy thử ở máy local

Yêu cầu: Node.js >= 18.

```bash
npm install
npm start
```

Mở trình duyệt tại `http://localhost:3000`. Đăng nhập bằng tài khoản nội bộ: `nhatquan` / `NQ@2026#` (đổi trong file `public/index.html`, tìm biến `U` và `P` trong đoạn script cuối trang nếu cần đổi mật khẩu).

## Đẩy code lên GitHub

```bash
git init                      # nếu chưa init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/<username>/<repo>.git
git push -u origin main
```

`.gitignore` đã loại trừ `node_modules/`, thư mục backup `_backup_*/`, và file `.env` — không cần lo commit nhầm rác.

## Deploy lên Hostinger (Node.js Hosting)

Hostinger hỗ trợ chạy ứng dụng Node.js qua **hPanel → Advanced → Setup Node.js App**. Các bước:

1. **Kiểm tra gói hosting**: cần gói hỗ trợ Node.js (Business trở lên hoặc VPS). Nếu gói hiện tại không có mục "Node.js App" trong hPanel, cần nâng cấp gói trước.
2. Vào **hPanel → Advanced → Node.js** → **Create Application**.
3. Cấu hình:
   - **Node.js version**: chọn 18.x trở lên.
   - **Application root**: thư mục chứa mã nguồn (vd. `nhatquan-catalog`).
   - **Application URL**: domain hoặc subdomain sẽ trỏ tới app (vd. `catalog.nhatquan.vn`).
   - **Application startup file**: `server.js`.
4. **Đưa code lên server** — hai cách:
   - **Qua Git (khuyến nghị)**: hPanel → Git → kết nối repo GitHub vừa push ở trên, chọn nhánh `main`, deploy. Mỗi lần push code mới lên GitHub, vào lại hPanel bấm "Deploy" (hoặc bật auto-deploy nếu Hostinger hỗ trợ webhook).
   - **Qua File Manager / FTP**: nén toàn bộ project (trừ `node_modules/`) và upload vào Application root, giải nén.
5. Trong trang quản lý Node.js App trên hPanel, bấm **Run NPM Install** để cài `express` từ `package.json`.
6. Bấm **Restart** để khởi động lại ứng dụng với `server.js` làm entry point.
7. Vào **hPanel → SSL** bật **Let's Encrypt SSL** miễn phí cho domain/subdomain đang trỏ tới app.
8. Kiểm tra bằng cách mở domain đã cấu hình — nếu thấy màn hình đăng nhập nội bộ (NQ) tức là đã chạy đúng.

### Lưu ý khi cập nhật sau này

- Sửa nội dung/sản phẩm: chỉnh trong `public/index.html`, `public/data/*.js`, hoặc `public/img/`.
- Sau khi sửa xong ở local, test bằng `npm start`, rồi commit + push lên GitHub, sau đó vào hPanel bấm lại **Deploy** (nếu dùng Git) để cập nhật server.
- Đổi Web3Forms access key: sửa trong `public/site.json` **và** trong form ở `public/index.html` (tìm `access_key` trong thẻ `<input type="hidden" name="access_key" ...>`).

## Ghi chú kỹ thuật

- Toàn bộ giao diện & logic hiển thị sản phẩm nằm trong một file `public/index.html` (client-side rendering từ dữ liệu JS trong `public/data/`) — `server.js` chỉ đóng vai trò phục vụ file tĩnh, không có API backend.
- `server.js` có route catch-all trả về `index.html` cho mọi đường dẫn không khớp file tĩnh, tránh lỗi 404 khi có người chia sẻ link sâu.
