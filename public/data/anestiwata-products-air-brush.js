// Anest Iwata — Air Brush category
// Source: https://anest-iwata.vn/products-and-support/coating-equipment/air-brush/
// Note: đây là các súng phun mỹ thuật (airbrush) cỡ nhỏ dùng cho vẽ minh hoạ/mô hình/nail art,
// không có bảng SPEC dạng ảnh với thông số đường kính béc/áp suất như dòng công nghiệp — thông số
// (dung tích cốc, kiểu cấp sơn...) được mô tả bằng văn bản trên trang nguồn. Nhiều model gần giống
// nhau trong cùng 1 dòng (Hi-Line, High Performance Plus, Revolution, Neo, Eclipse) được gộp thành
// 1 record/dòng kèm danh sách model để tránh trùng lặp vô nghĩa.
(function () {
  var list = [
    {
      slug: "airbrush-hiline-series",
      name: "Súng vẽ Airbrush Iwata Hi-Line Series (HP-BH / HP-CH / HP-TH)",
      brand: "Anest Iwata",
      industries: [],
      shortDesc: "Dòng airbrush kiểm soát tối đa cho các nét vẽ chi tiết đến trung bình, trang bị van Micro Air Control (MAC) cho phép điều chỉnh luồng khí tinh chỉnh từng chút một và tạo hiệu ứng chấm điểm (stipple). Kim phun bằng thép lò xo chống gãy, gioăng kim chịu dung môi bền bỉ.",
      img: "https://anest-iwata.vn/wp-content/uploads/2024/12/1624329636-1-300x138.jpg",
      specs: {
        "Model": "HP-BH (cốc trọng lực 1.5 ml), HP-CH (cốc trọng lực 7 ml), HP-TH (cốc trọng lực tháo rời 15 ml, súng cò kép dạng trigger)",
        "Kiểu cấp sơn": "Trọng lực (Gravity feed)",
        "Van điều khiển khí": "Micro Air Control (MAC) Valve",
        "Tay cầm": "Preset handle (đặt trước lưu lượng phun), kiểu quick-flush cutaway",
        "Phụ kiện kèm theo": "Cờ lê tháo béc (nozzle spanner), dầu bôi trơn Iwata Lube",
        "Ứng dụng": "Vẽ chi tiết nhỏ đến trung bình, mô hình, minh hoạ, trang điểm/nail art"
      },
      specConfidence: "verified"
    },
    {
      slug: "airbrush-high-performance-plus-series",
      name: "Súng vẽ Airbrush Iwata High Performance Plus Series (HP-BP / HP-SBP / HP-CP / HP-BC1P)",
      brand: "Anest Iwata",
      industries: [],
      shortDesc: "Dòng airbrush kế thừa thiết kế huyền thoại HP Series đã gây dựng tên tuổi Iwata trong giới sáng tạo hơn 50 năm qua, cho khả năng kiểm soát tối đa khi vẽ chi tiết nhỏ. Có bản cấp sơn bên hông (side feed) và bản hút sơn từ lọ thuỷ tinh (siphon feed) cho nhiều lựa chọn màu nhanh.",
      img: "https://anest-iwata.vn/wp-content/uploads/2024/12/ctgy-totalcontrol-min-768x453.jpg",
      specs: {
        "Model": "HP-BP (cốc trọng lực 1.5 ml), HP-SBP (cốc cấp bên hông 1.25 ml), HP-CP (cốc trọng lực 7 ml), HP-BC1P (lọ thuỷ tinh hút sơn 20 ml)",
        "Kiểu cấp sơn": "Trọng lực (Gravity) / Cấp bên hông (Side feed) / Hút (Siphon feed) tuỳ model",
        "Tay cầm": "Preset handle, kiểu quick-flush cutaway",
        "Phụ kiện kèm theo": "Cờ lê tháo béc, dầu bôi trơn Iwata Lube",
        "Ứng dụng": "Vẽ chi tiết nhỏ, trộn màu, mô hình, minh hoạ"
      },
      specConfidence: "verified"
    },
    {
      slug: "airbrush-revolution-series",
      name: "Súng vẽ Airbrush Iwata Revolution Series (HP-BCR / HP-BR / HP-CR)",
      brand: "Anest Iwata",
      industries: [],
      shortDesc: "Cho lớp phun mềm mại, dễ dàng và khả năng hóa sương tốt ở áp suất khí thấp, phù hợp dùng với máy nén khí nhỏ nhất. Là lựa chọn đơn giản cho phun trung bình và cho người mới bắt đầu học airbrush. Tay cầm 'comfort handle' độc quyền của dòng Revolution.",
      img: "https://anest-iwata.vn/wp-content/uploads/2024/12/1624329666-300x300.jpg",
      specs: {
        "Model": "HP-BCR (hút sơn/siphon feed, kèm chai 30 ml), HP-BR (trọng lực, cốc 1.5 ml), HP-CR (trọng lực, cốc có nắp 7 ml)",
        "Kiểu cấp sơn": "Hút (Siphon) / Trọng lực (Gravity) tuỳ model",
        "Áp suất khí": "Hoạt động tốt ở áp suất khí thấp, dùng được với máy nén khí nhỏ",
        "Tay cầm": "Comfort handle độc quyền dòng Revolution",
        "Phụ kiện kèm theo": "Cờ lê tháo béc, dầu bôi trơn Iwata Lube",
        "Ứng dụng": "Phun tổng quát, người mới bắt đầu học airbrush"
      },
      specConfidence: "verified"
    },
  ];
  window.ANESTIWATA_PRODUCTS = (window.ANESTIWATA_PRODUCTS || []).concat(list);
})();
