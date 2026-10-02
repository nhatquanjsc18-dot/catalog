// Binks — file gộp toàn bộ sản phẩm Binks (Pumps + Applicators + Powder Applicators)
// Yêu cầu nạp binks-products-pumps.js, binks-products-applicators.js và
// binks-products-powder-applicators.js TRƯỚC file này.
var BINKS_PRODUCTS = [].concat(typeof BINKS_PUMPS_PRODUCTS !== "undefined" ? BINKS_PUMPS_PRODUCTS : []).concat(typeof BINKS_APPLICATORS_PRODUCTS !== "undefined" ? BINKS_APPLICATORS_PRODUCTS : []).concat(typeof BINKS_POWDER_PRODUCTS !== "undefined" ? BINKS_POWDER_PRODUCTS : []);
