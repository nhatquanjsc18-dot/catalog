// Mirka - Superabrasives / Precision Grinding (đá mài chính xác cho hợp kim/thép cứng, dụng cụ cắt CNC)
// Nguồn: https://www.mirka.com/en/products/superabrasives/
// Trang nguồn có 75 mã sản phẩm kỹ thuật (chỉ khác nhau về kích thước/độ hạt trong cùng dòng),
// đã gộp thành các dòng sản phẩm đại diện theo yêu cầu — mỗi dòng lấy 1 mã đại diện có đầy đủ
// thông số thật (Mirka code, vật liệu, đường kính lỗ, độ hạt) từ trang chi tiết sản phẩm.
(function () {
  var list = [
    {
      slug: "1a1-fluting-wheel",
      name: "Bánh mài rãnh xoắn hợp kim 1A1/3A1 (Fluting Wheel)",
      model: "1A1 100 10 10 10 20 D64 SQ 125 HP3",
      mirkaCode: "E59730021J328H3P.16",
      subCategory: "Đá mài chính xác",
      industries: [],
      shortDesc: "Bánh mài liên kết hybrid dùng mài rãnh xoắn (flute) cho dao/mũi khoan hợp kim tròn trên máy CNC, có bản tiêu chuẩn và bản HP3 cho máy CNC hiệu suất cao.",
      img: "https://img.mirka.com/medias/sys_master/images/ha0/h8c/9668121427998/1A1%20(1)/1A1-1-.jpg",
      specs: {
        "Vật liệu phù hợp": "Hợp kim cứng (Wolfram carbide)",
        "Ứng dụng": "Mài rãnh xoắn (Flute Grinding), sản xuất dụng cụ cắt tròn",
        "Đường kính lỗ (Bore)": "20 mm",
        "Độ hạt FEPA": "D64",
        "Quy cách": "1 cái/hộp",
        "Ghi chú": "Dòng có nhiều biến thể kích thước/độ hạt khác nhau (mã đại diện ở trên); xem đầy đủ tại trang nguồn mirka.com"
      },
      specConfidence: "verified"
    },
    {
      slug: "1v1-gashing-wheel",
      name: "Bánh mài xẻ rãnh dao hợp kim tròn 1V1/12V9 (Gashing Wheel)",
      model: "1V1/45^ 125 10 10 10 20 D64 SQ 125 M413",
      mirkaCode: "E57140021J328413.16",
      subCategory: "Đá mài chính xác",
      industries: [],
      shortDesc: "Bánh mài liên kết hybrid dùng xẻ rãnh (gashing) dao/mũi khoan hợp kim tròn trên máy CNC, hỗ trợ sản xuất dụng cụ cắt chính xác.",
      img: "https://img.mirka.com/medias/sys_master/images/h72/hc5/9668116906014/1V1-45%20(2)/1V1-45-2-.jpg",
      specs: {
        "Vật liệu phù hợp": "Hợp kim cứng (Wolfram carbide)",
        "Ứng dụng": "Xẻ rãnh (Gashing), sản xuất dụng cụ cắt tròn",
        "Đường kính lỗ (Bore)": "20 mm",
        "Độ hạt FEPA": "D64",
        "Quy cách": "1 cái/hộp",
        "Ghi chú": "Dòng có nhiều biến thể kích thước/độ hạt khác nhau (mã đại diện ở trên); xem đầy đủ tại trang nguồn mirka.com"
      },
      specConfidence: "verified"
    },
    {
      slug: "1u1w-diamond-point-polishing",
      name: "Đầu mài kim cương đánh bóng lỗ trong 1U1W (Diamond Mounted Point)",
      model: "1U1W 8 10 2 70 SHAFT 6 D15 S 100 RL2",
      mirkaCode: "0246900116024001.G6",
      subCategory: "Đá mài chính xác",
      industries: [],
      shortDesc: "Đầu mài kim cương dạng trục, dùng đánh bóng bề mặt lỗ trong của chi tiết hợp kim cứng.",
      img: "https://img.mirka.com/medias/sys_master/images/hd1/h3c/9668123131934/1U1W%20(1)/1U1W-1-.jpg",
      specs: {
        "Vật liệu phù hợp": "Hợp kim cứng (Wolfram carbide)",
        "Ứng dụng": "Đánh bóng lỗ trong (Internal Polishing)",
        "Đường kính lỗ (Bore)": "6 mm",
        "Độ hạt FEPA": "D15",
        "Quy cách": "1 cái/hộp",
        "Ghi chú": "Dòng có nhiều biến thể kích thước/độ hạt khác nhau (mã đại diện ở trên); xem đầy đủ tại trang nguồn mirka.com"
      },
      specConfidence: "verified"
    },
    {
      slug: "1u1w-diamond-point-grinding",
      name: "Đầu mài kim cương mài lỗ trong 1U1W (Diamond Mounted Point)",
      model: "1U1W 6 3,5 1,2 45 SHAFT 6 D76 W 125 RFK",
      mirkaCode: "0892700221628253.G6",
      subCategory: "Đá mài chính xác",
      industries: [],
      shortDesc: "Đầu mài kim cương dạng trục, dùng mài tinh bề mặt lỗ trong của chi tiết hợp kim cứng.",
      img: "https://img.mirka.com/medias/sys_master/images/h1c/h97/9668121100318/1U1W%20(1)/1U1W-1-.jpg",
      specs: {
        "Vật liệu phù hợp": "Hợp kim cứng (Wolfram carbide)",
        "Ứng dụng": "Mài lỗ trong (Internal Grinding)",
        "Đường kính lỗ (Bore)": "6 mm",
        "Độ hạt FEPA": "D76",
        "Quy cách": "1 cái/hộp",
        "Ghi chú": "Dòng có nhiều biến thể kích thước/độ hạt khác nhau (mã đại diện ở trên); xem đầy đủ tại trang nguồn mirka.com"
      },
      specConfidence: "verified"
    },
    {
      slug: "1a1r-cutoff-wheel",
      name: "Bánh mài cắt đứt thanh hợp kim 1A1R (Cut-off Wheel)",
      model: "1A1R 125 1,1 5 0,9 20 D151 W 100 PRO5",
      mirkaCode: "0432900261624PR5.16",
      subCategory: "Đá mài chính xác",
      industries: [],
      shortDesc: "Bánh mài liên kết resin siêu mỏng, dùng cắt đứt thanh phôi hợp kim cứng, có phiên bản cắt khô và cắt ướt.",
      img: "https://img.mirka.com/medias/sys_master/images/h19/h29/9668122279966/1A1R%20(2)/1A1R-2-.jpg",
      specs: {
        "Vật liệu phù hợp": "Hợp kim cứng (Wolfram carbide)",
        "Ứng dụng": "Cắt đứt (Cut-off) thanh phôi hợp kim tròn, có bản khô (DRY) và ướt (PRO/CNC)",
        "Đường kính lỗ (Bore)": "20 mm",
        "Độ hạt FEPA": "D151",
        "Quy cách": "1 cái/hộp",
        "Ghi chú": "Dòng có nhiều biến thể kích thước/độ hạt khác nhau (mã đại diện ở trên); xem đầy đủ tại trang nguồn mirka.com"
      },
      specConfidence: "verified"
    },
    {
      slug: "shark-facing-wheel",
      name: "Bánh mài mặt lưỡi cưa đĩa hợp kim SHARK/4V2 (Facing Wheel)",
      model: "SHARK5 125 17 1,3 13 32 D 64 WN 125 PRO5",
      mirkaCode: "E734700214S28PR5.25",
      subCategory: "Đá mài chính xác",
      industries: [],
      shortDesc: "Bánh mài liên kết resin dùng mài mặt (facing) lưỡi cưa đĩa gắn hợp kim, dòng SHARK phù hợp răng cưa hẹp/sát nhau.",
      img: "https://img.mirka.com/medias/sys_master/images/h0f/hef/9668120674334/SHARK%20(1)/SHARK-1-.jpg",
      specs: {
        "Vật liệu phù hợp": "Hợp kim cứng (Wolfram carbide)",
        "Ứng dụng": "Mài mặt (Facing), mài sắc lại lưỡi cưa đĩa (Saw Grinding and Resharpening)",
        "Đường kính lỗ (Bore)": "32 mm",
        "Độ hạt FEPA": "D64",
        "Quy cách": "1 cái/hộp",
        "Ghi chú": "Dòng có nhiều biến thể kích thước/độ hạt khác nhau (mã đại diện ở trên); xem đầy đủ tại trang nguồn mirka.com"
      },
      specConfidence: "verified"
    },
    {
      slug: "6a2-cbn-knife-wheel",
      name: "Bánh mài chén CBN 6A2 mài dao thép cứng (Knife Sharpening)",
      model: "6A2 175 6 2 45 78 B181 W 75 RCR",
      mirkaCode: "0783112272218151.39",
      subCategory: "Đá mài chính xác",
      industries: [],
      shortDesc: "Bánh mài chén hạt CBN (Cubic Boron Nitride), chuyên mài sắc dao công nghiệp bằng thép đã tôi cứng.",
      img: "https://img.mirka.com/medias/sys_master/images/h20/h4b/9668123590686/6A2/6A2.jpg",
      specs: {
        "Vật liệu phù hợp": "Thép (đã tôi cứng)",
        "Ứng dụng": "Mài sắc dao công nghiệp (Knife Sharpening)",
        "Đường kính lỗ (Bore)": "78 mm",
        "Độ hạt FEPA": "B181 (CBN)",
        "Quy cách": "1 cái/hộp",
        "Ghi chú": "Dòng có nhiều biến thể kích thước/độ hạt khác nhau (mã đại diện ở trên); xem đầy đủ tại trang nguồn mirka.com"
      },
      specConfidence: "verified"
    },
    {
      slug: "11aa2-topping-wheel",
      name: "Bánh mài chén 2 vành 11AA2/AS mài đỉnh lưỡi cưa đĩa (Topping Wheel)",
      model: "11AA2/AS 125 5 8 20 32 D46/126 KR100/125 CNC3/UNI3",
      mirkaCode: "E47410056Z462565.25",
      subCategory: "Đá mài chính xác",
      industries: [],
      shortDesc: "Bánh mài chén liên kết resin, thiết kế 2 vành hạt mài giúp mài thô và mài tinh đỉnh răng lưỡi cưa đĩa gắn hợp kim trong cùng một lần chạy máy.",
      img: "https://img.mirka.com/medias/sys_master/images/h80/hc1/9665624408094/11AA2%20(1)/11AA2-1-.jpg",
      specs: {
        "Vật liệu phù hợp": "Hợp kim cứng (Wolfram carbide)",
        "Ứng dụng": "Mài đỉnh răng (Topping), mài sắc lại lưỡi cưa đĩa — phù hợp gia công ướt",
        "Đường kính lỗ (Bore)": "32 mm",
        "Độ hạt FEPA": "D46/126 (2 vành)",
        "Quy cách": "1 cái/hộp",
        "Ghi chú": "Dòng có nhiều biến thể kích thước/độ hạt khác nhau (mã đại diện ở trên); xem đầy đủ tại trang nguồn mirka.com"
      },
      specConfidence: "verified"
    },
    {
      slug: "11v9-clearance-cup-wheel",
      name: "Bánh mài chén 11V9/11V9G mài lưng dao hợp kim tròn (Clearance Grinding)",
      model: "11V9 100 10 3 35 20 D 126 WN 100 DRY5",
      mirkaCode: "0175550254S25DR5.16",
      subCategory: "Đá mài chính xác",
      industries: [],
      shortDesc: "Bánh mài chén liên kết resin, dùng mài lưng/góc thoát phoi (clearance) của dao và mũi khoan hợp kim tròn trên máy CNC hoặc máy mài tay.",
      img: "https://img.mirka.com/medias/sys_master/images/h43/haa/9668116119582/11V9%20(2)/11V9-2-.jpg",
      specs: {
        "Vật liệu phù hợp": "Hợp kim cứng (Wolfram carbide)",
        "Ứng dụng": "Mài lưng dao (Clearance Grinding), sản xuất dụng cụ cắt tròn",
        "Đường kính lỗ (Bore)": "20 mm",
        "Độ hạt FEPA": "D126",
        "Quy cách": "1 cái/hộp",
        "Ghi chú": "Dòng có nhiều biến thể kích thước/độ hạt/liên kết khác nhau (mã đại diện ở trên); xem đầy đủ tại trang nguồn mirka.com"
      },
      specConfidence: "verified"
    },
    {
      slug: "1u1w-cbn-internal-grinding",
      name: "Đầu mài CBN 1U1W mài lỗ trong vật liệu thép cứng (Internal Grinding)",
      model: "1U1W 6 8 1,5 68 SHAFT 6 B126 W 100 RCR",
      mirkaCode: "0246800252224151.G6",
      subCategory: "Đá mài chính xác",
      industries: [],
      shortDesc: "Đầu mài dạng trục hạt CBN (Cubic Boron Nitride), dùng mài bề mặt lỗ trong của vật liệu thép đã tôi cứng.",
      img: "https://img.mirka.com/medias/sys_master/images/he9/h14/9668127359006/1U1W%20(1)/1U1W-1-.jpg",
      specs: {
        "Vật liệu phù hợp": "Thép (đã tôi cứng)",
        "Ứng dụng": "Mài lỗ trong (Internal Grinding)",
        "Đường kính lỗ (Bore)": "6 mm",
        "Độ hạt FEPA": "B126 (CBN)",
        "Quy cách": "1 cái/hộp",
        "Ghi chú": "Dòng có nhiều biến thể kích thước/độ hạt khác nhau (mã đại diện ở trên); xem đầy đủ tại trang nguồn mirka.com"
      },
      specConfidence: "verified"
    },
    {
      slug: "13a2-manual-cup-wheel",
      name: "Bánh mài chén 13A2 mài tay vật liệu cứng (Manual Grinding)",
      model: "13A2 150 4 3 20 20 B151 W 75 UNI6",
      mirkaCode: "0022420262218UN6.16",
      subCategory: "Đá mài chính xác",
      industries: [],
      shortDesc: "Bánh mài chén liên kết resin, phù hợp thao tác mài tay (manual grinding) trên vật liệu thép cứng hoặc hợp kim.",
      img: "https://img.mirka.com/medias/sys_master/images/h2b/h0a/9668119560222/13A2%20(2)/13A2-2-.jpg",
      specs: {
        "Vật liệu phù hợp": "Thép (đã tôi cứng) / Hợp kim cứng",
        "Ứng dụng": "Mài tay (Manual Grinding), sản xuất dụng cụ cắt tròn",
        "Đường kính lỗ (Bore)": "20 mm",
        "Độ hạt FEPA": "B151 (CBN)",
        "Quy cách": "1 cái/hộp",
        "Ghi chú": "Dòng có nhiều biến thể kích thước/độ hạt khác nhau (mã đại diện ở trên); xem đầy đủ tại trang nguồn mirka.com"
      },
      specConfidence: "verified"
    },
    {
      slug: "1b1v-flute-polishing-wheel",
      name: "Bánh mài thẳng 1B1V đánh bóng rãnh xoắn dao hợp kim (Flute Polishing)",
      model: "1B1V 100 10 8,6 9 20 SUPERFIN1",
      mirkaCode: "E409700SUPERFIN1.16",
      subCategory: "Đá mài chính xác",
      industries: [],
      shortDesc: "Bánh mài thẳng chuyên đánh bóng rãnh xoắn (flute) trên dao/mũi khoan hợp kim tròn, cho bề mặt hoàn thiện mịn trên máy CNC.",
      img: "https://img.mirka.com/medias/sys_master/images/hc5/h03/9668119724062/1A1%20(1)/1A1-1-.jpg",
      specs: {
        "Vật liệu phù hợp": "Hợp kim cứng (Wolfram carbide)",
        "Ứng dụng": "Đánh bóng (Polishing) rãnh xoắn, sản xuất dụng cụ cắt tròn",
        "Đường kính lỗ (Bore)": "20 mm",
        "Độ hạt FEPA": "Siêu mịn (SUPERFIN)",
        "Quy cách": "1 cái/hộp",
        "Ghi chú": "Dòng có nhiều biến thể kích thước khác nhau (mã đại diện ở trên); xem đầy đủ tại trang nguồn mirka.com"
      },
      specConfidence: "verified"
    },
    {
      slug: "cafro-e-cup-11",
      name: "Mirka® Cafro E-Cup 11 — Bánh mài chén hybrid thân thiện môi trường",
      model: "Mirka® Cafro E-Cup 11 100 10 3 35 20 D 64",
      mirkaCode: "E74210121Z128414.16",
      subCategory: "Đá mài chính xác",
      industries: [],
      shortDesc: "Bánh mài chén liên kết hybrid thế hệ mới: vành đỡ mòn cùng tốc độ với vành hạt mài nên không cần dừng máy tháo lắp để giảm tải thân bánh mài, tiết kiệm thời gian và tăng năng suất. Dùng vật liệu resin bền vững và hợp kim không chì, giảm tác động môi trường.",
      img: "https://img.mirka.com/medias/sys_master/images/he4/hbc/11461598478366/E74210121Z128414.16_001/E74210121Z128414.16-001.jpg",
      specs: {
        "Vật liệu phù hợp": "Hợp kim cứng (Wolfram carbide)",
        "Ứng dụng": "Mài lưng dao (Clearance Grinding), sản xuất dụng cụ cắt tròn",
        "Đường kính lỗ (Bore)": "20 mm",
        "Độ hạt FEPA": "D64",
        "Quy cách": "1 cái/hộp",
        "Ghi chú": "Dòng có nhiều biến thể kích thước/độ hạt khác nhau (mã đại diện ở trên); xem đầy đủ tại trang nguồn mirka.com"
      },
      specConfidence: "verified"
    },
    {
      slug: "cafro-ultra-flute",
      name: "Mirka® Cafro Ultra-Flute — Bánh mài rãnh xoắn cao cấp",
      model: "1B1V 100 10 10 10 20 Ultra-Flute D 64",
      mirkaCode: "E752100ULTRAFLUT.16",
      subCategory: "Đá mài chính xác",
      industries: [],
      shortDesc: "Dòng bánh mài siêu cứng cao cấp cho mài chính xác dao/mũi khoan hợp kim tròn — giảm 20% tần suất sửa đá (dressing) so với các bánh mài cao cấp khác nhờ công thức hạt mài mới, giữ biên dạng lâu hơn, cắt gọt nhanh và ổn định, tiêu thụ năng lượng thấp hơn, vận hành êm không rung.",
      img: "https://img.mirka.com/medias/sys_master/images/h64/h28/12323329703966/E752100ULTRAFLUT.16_001/E752100ULTRAFLUT.16-001.jpg",
      specs: {
        "Vật liệu phù hợp": "Hợp kim cứng (Wolfram carbide)",
        "Ứng dụng": "Mài rãnh xoắn (Flute Grinding) chính xác cao, phù hợp sản xuất hàng loạt với máy đổi dao tự động",
        "Đường kính lỗ (Bore)": "20 mm",
        "Độ hạt FEPA": "D64",
        "Quy cách": "1 cái/hộp",
        "Ghi chú": "Dòng có nhiều biến thể kích thước khác nhau (mã đại diện ở trên); xem đầy đủ tại trang nguồn mirka.com"
      },
      specConfidence: "verified"
    }
  ];
  window.MIRKA_PRODUCTS = (window.MIRKA_PRODUCTS || []).concat(list);
})();
