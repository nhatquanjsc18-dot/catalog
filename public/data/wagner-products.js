// Wagner — file tổng hợp, gộp các nhóm sản phẩm đã cào từ wagner-group.com:
//   - Fluid Handling (bơm cấp liệu, thùng áp lực): wagner-products-feeding.js — 37 sản phẩm
//   - wagner-products-applying.js — 28 sản phẩm, chia 2 subCategory:
//       "Sơn ướt" (17, súng phun thường/AirCoat/Airless không tĩnh điện)
//       "Sơn tĩnh điện ướt" (11, súng/buồng AquaCoat tĩnh điện gốc nước/dung môi)
//   - Sơn tĩnh điện bột (Powder coating applying): wagner-products-powder-applying.js — 19 sản phẩm
// Tổng: 84 sản phẩm. Cần nạp đủ các file theo đúng thứ tự trong HTML:
//   <script src="data/wagner-products-feeding.js"></script>
//   <script src="data/wagner-products-applying.js"></script>
//   <script src="data/wagner-products-powder-applying.js"></script>
//   <script src="data/wagner-products.js"></script>
var WAGNER_PRODUCTS = []
  .concat(typeof WAGNER_FEEDING_PRODUCTS !== "undefined" ? WAGNER_FEEDING_PRODUCTS : [])
  .concat(typeof WAGNER_APPLYING_PRODUCTS !== "undefined" ? WAGNER_APPLYING_PRODUCTS : [])
  .concat(typeof WAGNER_POWDER_APPLYING_PRODUCTS !== "undefined" ? WAGNER_POWDER_APPLYING_PRODUCTS : []);
