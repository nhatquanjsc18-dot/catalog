// Mirka - Index gộp toàn bộ dữ liệu sản phẩm (290 sản phẩm / 12 nhóm nhỏ)
// Nạp các file theo thứ tự dưới đây trong HTML (mỗi file nối thêm vào window.MIRKA_PRODUCTS):
//   <script src="data/mirka-products-electric-sanders.js"></script>   (Electric Sanders 16 + Wall Sanders 3)
//   <script src="data/mirka-products-cordless-tools.js"></script>    (Cordless Tools 9)
//   <script src="data/mirka-products-dust-extractors.js"></script>   (Dust Extractors 11)
//   <script src="data/mirka-products-electric-polishers.js"></script> (Electric Polishers 2)
//   <script src="data/mirka-products-pneumatic-polishers.js"></script> (Pneumatic Polishers 6)
//   <script src="data/mirka-products-pneumatic-sanders.js"></script>  (Pneumatic Sanders 39)
//   <script src="data/mirka-polishing.js"></script>                  (Chất đánh bóng / Polishing Products 32)
//   <script src="data/mirka-abrasives.js"></script>                  (Giấy nhám / Abrasives 48 dòng sản phẩm)
//   <script src="data/mirka-accessories.js"></script>                (Phụ kiện Mirka 64 sản phẩm)
//   <script src="data/mirka-dustextractor-accessories.js"></script>  (Linh kiện máy hút bụi 29 sản phẩm)
//   <script src="data/mirka-spareparts.js"></script>                 (Linh kiện máy chà nhám, gộp từ 697 kết quả thành 31 dòng máy)
//
// Sau khi nạp đủ 11 file trên, window.MIRKA_PRODUCTS sẽ có đúng 290 phần tử (166 + 64 + 29 + 31).
// File này chỉ đóng vai trò tài liệu tham chiếu / có thể dùng làm entry point nếu môi trường
// không hỗ trợ nhiều thẻ <script> (ví dụ Node.js test), bằng cách require từng file theo thứ tự trên.
(function () {
  window.MIRKA_PRODUCTS = window.MIRKA_PRODUCTS || [];
})();
