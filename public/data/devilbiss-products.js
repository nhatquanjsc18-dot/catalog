// DeVilbiss — Spray Guns category
// Source: https://binks.com/solutions/automotive-refinishing-equipment/spray-guns/ (trang 1-3)
// Ghi chú: binks.com dùng chung cho cả hai thương hiệu Binks và DeVilbiss (cùng thuộc Carlisle
// Fluid Technologies) trong mảng automotive refinishing. Đã xác minh từng trang chi tiết sản phẩm
// đều ghi rõ "DeVilbiss <tên model>" trong tiêu đề trang và/hoặc nội dung mô tả, nên toàn bộ sản
// phẩm dưới đây được gán brand = "DeVilbiss", giữ nguyên tên model gốc.
//
// Danh mục nguồn liệt kê 20 mục (trang 1: 9, trang 2: 9, trang 3: 2). Trong đó:
//  - "DV1 Guns" chỉ là trang tổng hợp (hub) liệt kê lại 3 sản phẩm đã có sẵn riêng biệt
//    (DV1 Basecoat, DV1 Clearcoat, DV1s Smart/Spot Repair Gun) — không tạo record riêng để tránh trùng.
//  - "PROLite Spray Guns" là series gồm 3 biến thể (PROLite Pressure/Suction, PROLite Gravity,
//    PROLite S Gravity) — tách thành 2 record mới (Pressure/Suction, Gravity); biến thể "PROLite S
//    Gravity" có thông số trùng với sản phẩm "PROLite S Touch Up Gravity Gun" đã có sẵn trong danh
//    mục nên được gộp thông số vào record đó thay vì tạo bản sao.
//  - "TEKNA Spray Guns Series" là series gồm 7 mục con, trong đó "TEKNA ProLite Premium Gun - EPA &
//    SCAQMD Approved" và "TEKNA PROLite Gun" có nội dung/thông số giống hệt nhau (bản trùng lặp trên
//    chính trang nguồn) — chỉ giữ lại 1 record. 6 biến thể còn lại được tách thành 6 record riêng.
// Kết quả: 25 sản phẩm/biến thể duy nhất.
var DEVILBISS_PRODUCTS = [
  {
    slug: "dagr-airbrush",
    name: "DAGR Airbrush",
    brand: "DeVilbiss",
    industries: ["collision"],
    shortDesc: "Airbrush cầm tay nhẹ, cân bằng tốt với cò kép mềm, cho đường nét siêu mảnh và hiệu ứng chuyển sắc tinh tế trong vẽ chi tiết ô tô; có cả bản cấp sơn trọng lực và hút.",
    img: "https://binks.canto.com/direct/image/6s92h68psp2u5amoh1tlj9hs2d/mm6Cjq2IGLbO5_1KHHUQ5C95FFU/m320/800",
    specs: {
      "Mã tham chiếu": "DGR-501G-13 (DAGR gravity airbrush)",
      "Đường kính béc phun": "0.35 mm",
      "Kiểu cấp sơn": "Gravity (cốc trên), có bản Siphon",
      "Dung tích cốc": "9 ml (1/3 oz), tháo rời được",
      "Vật liệu seal kim phun": "PTFE chịu dung môi"
    },
    specConfidence: "partial"
  },
  {
    slug: "demi2",
    name: "DEMI2",
    brand: "DeVilbiss",
    industries: ["collision"],
    shortDesc: "Súng phun mini đa năng công nghệ phun sương LVMP-FC (Flow Control) mới, thân nhôm rèn tăng độ bền 50%, siêu nhẹ chỉ 190g, phù hợp sửa lỗi nhỏ, dặm vá và phun chi tiết.",
    img: "https://binks.canto.com/direct/image/6c1ln9iv151hpbujnhcr21lu75/eT1swUliyLWeQQhbGJ0L0-hfdXQ/m3000/800",
    specs: {
      "Công nghệ phun sương": "LVMP-FC (Flow Control)",
      "Đường kính béc phun": "0.5 / 0.8 / 1.1 mm",
      "Áp suất khí đầu vào": "0.1 MPa",
      "Tiêu thụ khí": "60 L/phút (DL6) – 80 L/phút (DL8) – 20 L/phút (DR1)",
      "Lưu lượng sơn": "23 – 77 mL/phút",
      "Trọng lượng": "190 g",
      "Đầu nối khí/sơn": "G 1/4",
      "Máy nén khuyến nghị": "0.75 kW (tương đương 1Hp)",
      "Dung tích cốc": "250 mL hoặc 150 mL"
    },
    specConfidence: "verified"
  },
  {
    slug: "dv1-basecoat",
    name: "DV1 Basecoat",
    brand: "DeVilbiss",
    industries: ["collision"],
    shortDesc: "Súng phun sơn lót màu (basecoat) dòng DV1 thiết kế lại toàn diện — van khí đồng trục, béc phun và air cap hoàn toàn mới — cho tốc độ thi công nhanh, bắt màu chuẩn và tiết kiệm vật liệu tối đa.",
    img: "https://binks.canto.com/direct/image/jo21pqce017179brf4pg28mg6m/2kkishWC4ksQC7kPZBggrRI8xtE/m240/800",
    specs: {
      "Mã đặt hàng": "704504 / 704528",
      "Đường kính béc phun": "0.9 / 1.0 / 1.1 / 1.2 / 1.3 / 1.4 / 1.5 mm",
      "Air cap": "DV1-B+ HVLP PLUS / DV1-B HVLP / DV1-1+A HVLP",
      "Tiêu thụ khí": "10.5 – 14.1 SCFM @ 15–22 PSI (đo tại đồng hồ số)",
      "Độ rộng vệt phun": "12.2 – 13 inch",
      "Phụ kiện đi kèm": "Đồng hồ khí số DGI PRO, adapter DPC"
    },
    specConfidence: "verified"
  },
  {
    slug: "dv1-clearcoat",
    name: "DV1 Clearcoat",
    brand: "DeVilbiss",
    industries: ["collision"],
    shortDesc: "Súng phun sơn bóng (clearcoat) dòng DV1, air cap DV1-C PLUS mới giúp phân bổ hạt sơn siêu mịn và đều, giảm chảy sơn trên bề mặt đứng; tay cầm hoàn thiện màu đen nhám chống trượt, tiết kiệm sơn đáng kể.",
    img: "https://binks.canto.com/direct/image/j1ecb638p16e921kq54v7st066/LXePdsVCEPi2RBBbtX5XLIy1GLw/m800/800",
    specs: {
      "Mã đặt hàng": "704521",
      "Đường kính béc phun": "1.0 / 1.1 / 1.2 / 1.3 / 1.4 / 1.5 mm",
      "Air cap": "DV1-C1+ HVLP PLUS / DV1-C2+ HVLP PLUS",
      "Tiêu thụ khí": "10.0 – 11.3 SCFM @ 22 PSI (đo tại đồng hồ số)",
      "Độ rộng vệt phun": "12.2 – 12.8 inch"
    },
    specConfidence: "verified"
  },
  {
    slug: "dv1s-smart-spot-repair-gun",
    name: "DV1s Smart/Spot Repair Gun",
    brand: "DeVilbiss",
    industries: ["collision"],
    shortDesc: "Súng phun sửa chữa điểm (spot repair) dòng DV1s, trang bị 3 loại air cap Smart/Spot Repair mới cho vệt phun đồng nhất, giúp dặm vá bắt màu chính xác với lớp sơn gốc ngay từ lần đầu.",
    img: "https://binks.canto.com/direct/image/re2b8v98ft7ljcubpau5c03q6v/p8jgWpGH8USH8nvslUGEswU6O9g/m800/800",
    specs: {
      "Mã đặt hàng": "704531 / 704532 / 704533",
      "Đường kính béc phun": "0.7 / 0.8 / 0.9 / 1.0 / 1.2 mm",
      "Air cap": "DV1-M1 HVLP MICRO / DV1-S1+ HVLP PLUS / DV1-S2 HVLP",
      "Tiêu thụ khí": "1.8 – 4.6 SCFM @ 15–25 PSI (đo tại tay cầm)",
      "Độ rộng vệt phun": "2.4 – 7.9 inch",
      "Dung tích cốc": "125 ml (4 oz), cốc Acetal"
    },
    specConfidence: "verified"
  },
  {
    slug: "finishline-flg-4-gun",
    name: "FinishLine FLG-4 Gun",
    brand: "DeVilbiss",
    industries: ["collision"],
    shortDesc: "Súng phun đa năng FLG4, thân nhôm rèn anod hoá và chi tiết thép không gỉ, tương thích sơn gốc nước, có cả bản Conventional và HVLP, chỉnh vệt phun linh hoạt từ tròn đến 10 inch.",
    img: "https://binks.canto.com/direct/image/c0c85115j15gdd7jnf2ookk250/A7f_1ir4y_lCezpG4FNruwksTqw/m320/800",
    specs: {
      "Đường kính béc phun (bán riêng)": "1.3 / 1.5 / 2.2 mm",
      "Độ rộng vệt phun": "Tròn đến 10 inch (điều chỉnh được)",
      "Kiểu phun": "Conventional hoặc HVLP",
      "Kiểu cấp sơn": "Gravity hoặc Siphon (dùng cốc dùng-một-lần DeKups)"
    },
    specConfidence: "partial"
  },
  {
    slug: "flg-gun",
    name: "FLG Gun",
    brand: "DeVilbiss",
    industries: ["collision"],
    shortDesc: "Súng phun đa dụng giá tốt của DeVilbiss, phù hợp cho hầu hết công việc sơn sửa chữa thông thường tại xưởng cũng như dự án DIY, có đủ 3 kiểu cấp sơn gravity, suction và pressure.",
    img: "img/flg-gun.jpg",
    specs: {
      "Kiểu cấp sơn": "Gravity / Suction / Pressure",
      "Đặc điểm cò bóp": "Cò bóp nhẹ, hành trình êm giảm mỏi tay",
      "Thân súng": "Thiết kế công thái học cho độ cân bằng và cầm nắm tốt"
    },
    specConfidence: "partial"
  },
  {
    slug: "funcy-pro-spray-gun",
    name: "Funcy Pro Spray Gun",
    brand: "DeVilbiss",
    industries: ["collision", "wood", "construction"],
    shortDesc: "Dòng súng phun LVMP hiệu suất cao Funcy Pro, có đủ 3 kiểu cấp sơn (gravity, suction, pressure) với nhiều cỡ béc từ 0.8 đến 1.8mm, dùng được cho cả sơn ô tô lẫn sơn công nghiệp kim loại, gỗ, nhựa.",
    img: "https://binks.canto.com/direct/image/0vo596cmkh4010db6j77biqp03/Fe96veVNH5BRlu6LHBC4zp4wRiY/m3000/800",
    specs: {
      "Đường kính béc phun": "0.8 / 1.0 / 1.3 / 1.4 / 1.5 / 1.8 mm",
      "Kiểu cấp sơn": "Gravity (L08, LGS) / Suction (LGS) / Pressure (LP2)",
      "Áp suất khí đầu vào": "0.15 – 0.2 MPa",
      "Tiêu thụ khí": "95 – 230 L/phút",
      "Độ rộng vệt phun": "130 – 385 mm",
      "Trọng lượng": "320 – 344 g (tuỳ air cap)",
      "Đầu nối khí/sơn": "G1/4"
    },
    specConfidence: "verified"
  },
  {
    slug: "gfg-pro-manual-gun",
    name: "GFG Pro Manual Gun",
    brand: "DeVilbiss",
    industries: ["collision"],
    shortDesc: "Súng phun conventional gravity huyền thoại GFG được nâng cấp thành bản Pro với thân súng, air cap, béc phun và cò bóp thiết kế lại hoàn toàn, giữ nguyên chất lượng atomization đặc trưng DeVilbiss.",
    img: "https://binks.canto.com/direct/image/u41itjhfkh49j9qk8rtlr1t97p/PI0wKH9C5AO25Yza2dRm5R6ZNfg/m320/800",
    specs: {
      "Kiểu phun": "Conventional (Gravity)",
      "Chất liệu thân súng": "Nhôm rèn (forged aluminium)",
      "Van khí": "Thiết kế cân bằng, cải thiện luồng khí"
    },
    specConfidence: "partial"
  },
  {
    slug: "gpg-gravity-spray-gun",
    name: "GPG Gravity Spray Gun",
    brand: "DeVilbiss",
    industries: ["collision"],
    shortDesc: "Súng phun gravity đa dụng GPG, thân nhôm rèn anod hoá, nhiều lựa chọn air cap HVLP và hiệu suất cao, phù hợp clearcoat, basecoat, sealer, primer, sơn tổng hợp với mức giá hợp lý.",
    img: "https://binks.canto.com/direct/image/p24ir266b91vp883lirua0f07c/wnyMIsUCjACqEUIobtXSJurQzLA/m800/800",
    specs: {
      "Đường kính béc phun": "1.2 – 2.5 mm (air cap GPG2, 7E7, PR10, PR30)",
      "Dung tích cốc": "900 ml nhôm / 560 ml Acetal",
      "Đồng hồ áp suất": "HAV-501 hoặc HAV-555 (tuỳ phiên bản)",
      "Chất liệu thân súng": "Nhôm rèn anod hoá, air baffle tháo rời được"
    },
    specConfidence: "verified"
  },
  {
    slug: "jck-manual-spray-gun",
    name: "JCK Manual Spray Gun",
    brand: "DeVilbiss",
    industries: ["collision"],
    shortDesc: "Súng phun đa dụng cỡ nhỏ gọn JCK, siêu nhẹ 290g, thao tác dễ, atomization theo công nghệ DeVilbiss, có đủ 3 kiểu cấp sơn gravity/suction/pressure với nhiều lựa chọn air cap.",
    img: "https://binks.canto.com/direct/image/ltutdvitct463fb2gqnpfi2m6n/rOxZ5BM15gVJiqw4CPDvt12Uo-8/m3000/800",
    specs: {
      "Trọng lượng": "290 g",
      "Đường kính béc phun": "0.8 / 1.0 / 1.3 / 1.5 / 1.8 mm",
      "Áp suất khí đầu vào": "0.1 – 0.24 MPa",
      "Tiêu thụ khí": "80 – 300 L/phút",
      "Lưu lượng sơn": "50 – 320 mL/phút",
      "Độ rộng vệt phun": "120 – 320 mm",
      "Kiểu cấp sơn": "Gravity / Suction / Pressure"
    },
    specConfidence: "verified"
  },
  {
    slug: "jgx-502-spray-gun",
    name: "JGX-502 Spray Gun",
    brand: "DeVilbiss",
    industries: ["collision"],
    shortDesc: "Phiên bản nâng cấp của JGX-501, thiết kế riêng cho thị trường Nhật Bản dựa trên công nghệ phun DeVilbiss, toàn bộ đường dẫn sơn bằng thép không gỉ, air cap theo nguyên lý Ball & Cone cho vệt phun đều.",
    img: "https://binks.canto.com/direct/image/avab2b8h0p0kb35dr5c4qcgq2d/xnGoLyOThCIZsEJJslx4kesVUbw/m3000/800",
    specs: {
      "Trọng lượng": "430 g (bản Gravity) / 440 g (bản Suction)",
      "Đường kính béc phun": "0.8 / 1.1 / 1.4 / 1.8 / 2.0 / 2.5 mm",
      "Áp suất khí đầu vào": "0.10 – 0.20 MPa",
      "Tiêu thụ khí": "80 – 440 L/phút",
      "Đầu nối khí": "G1/4",
      "Đầu nối sơn": "G3/8 (bản Gravity: G1/4)"
    },
    specConfidence: "verified"
  },
  {
    slug: "neptune-manual-gravity-gun",
    name: "NEPTUNE Manual Gravity Gun",
    brand: "DeVilbiss",
    industries: ["collision"],
    shortDesc: "Súng phun gravity đầu tiên trên thế giới dùng thân cốc bằng magiê, phủ PTFE chống bám sơn dễ vệ sinh, van khí đồng trục ít giật, air cap LVMP 110B cho khả năng chuyển màu và fade-out mượt mà.",
    img: "https://binks.canto.com/direct/image/74aevt5st54md62hr7ar6v5p11/Xwd9YITM3r9-H4ym5dwvldT_ONs/m3000/800",
    specs: {
      "Trọng lượng": "379 g",
      "Đường kính béc phun": "1.2 / 1.3 / 1.4 mm",
      "Áp suất khí đầu vào": "0.15 MPa",
      "Tiêu thụ khí": "192 L/phút",
      "Lưu lượng sơn": "146 – 173 mL/phút",
      "Độ rộng vệt phun tối đa": "300 mm",
      "Đầu nối khí": "G1/4",
      "Kiểu phun": "LVMP",
      "Chất liệu thân súng": "Magiê phủ PTFE"
    },
    specConfidence: "verified"
  },
  {
    slug: "neptune-manual-pressure-gun",
    name: "NEPTUNE Manual Pressure Gun",
    brand: "DeVilbiss",
    industries: ["collision"],
    shortDesc: "Súng phun pressure tầm trung NEPTUNE-P, thân magiê phủ PTFE nhẹ 378g, có 2 dòng air cap NEPTUNE-C (Conventional) và NEPTUNE-L (LVMP), cân bằng giữa atomization, hiệu quả phủ sơn và dễ bảo trì.",
    img: "https://binks.canto.com/direct/image/1qib31n1ot08pe2novarb9ri7j/eJsZ6XkXzeeQVjwZteJdYs-FtY0/m3000/800",
    specs: {
      "Trọng lượng": "378 g (NEPTUNE-C) / 350 g (NEPTUNE-L)",
      "Đường kính béc phun": "1.1 / 1.4 / 1.6 mm",
      "Áp suất khí tiêu thụ": "373 – 418 L/phút (NEPTUNE-C, air cap 777/797) / 236 – 275 L/phút (NEPTUNE-L, air cap 805MT2/807MT2)",
      "Độ rộng vệt phun": "220 – 360 mm",
      "Đầu nối khí": "G1/4",
      "Đầu nối sơn": "G3/8",
      "Kiểu phun": "Conventional (NEPTUNE-C) / LVMP (NEPTUNE-L)",
      "Chất liệu thân súng": "Magiê phủ PTFE"
    },
    specConfidence: "verified"
  },
  {
    slug: "prolite-s-touch-up-gravity-gun",
    name: "PROLite S Touch Up Gravity Gun",
    brand: "DeVilbiss",
    industries: ["collision"],
    shortDesc: "Súng phun sửa chữa điểm PROLite-S, kết hợp độ cân bằng và cảm giác cầm nắm của dòng PROLite với kích thước nhỏ gọn chuyên cho spot repair, kiểm soát cò tinh tế giúp chuyển màu metallic mượt mà.",
    img: "https://binks.canto.com/direct/image/u7mn9mkgud4kpb5mea6qtdp63a/4qhVFvtnkb-8C_X1ZcpJm6OKYm8/m240/800",
    specs: {
      "Trọng lượng": "395 g",
      "Đường kính béc phun": "0.6 / 0.8 – 1.4 mm (tuỳ air cap: HV5, TE5, MC1, RS1)",
      "Áp suất khí đầu vào": "15 – 29 PSI",
      "Tiêu thụ khí": "1.8 – 4.8 SCFM (50 – 135 L/phút)",
      "Độ rộng vệt phun": "25 – 180 mm",
      "Chất liệu thân súng": "Nhôm rèn, anod hoá",
      "Đầu nối khí": "1/4″ Universal"
    },
    specConfidence: "verified"
  },
  {
    slug: "prolite-gravity-gun",
    name: "PROLite Gravity Gun",
    brand: "DeVilbiss",
    industries: ["collision"],
    shortDesc: "Súng phun gravity PROLite, thân nhôm rèn anod hoá nhẹ, van khí tuyến tính cho luồng khí đều, nhiều lựa chọn air cap High Efficiency/HVLP phù hợp cho cả basecoat lẫn clearcoat.",
    img: "https://binks.canto.com/direct/image/ro8uiiobgl69ndbfrff4974q0p/ROFEtfXTJmyPozQPrYfuF_hsYLE/m800/800",
    specs: {
      "Trọng lượng": "445 g",
      "Đường kính béc phun": "1.1 – 1.5 mm (air cap TE10/TE20/TE25/T110/HV30)",
      "Áp suất khí đầu vào": "14 – 35 PSI",
      "Tiêu thụ khí": "9.4 – 15.5 SCFM (265 – 440 L/phút)",
      "Độ rộng vệt phun": "270 – 315 mm",
      "Chất liệu thân súng": "Nhôm rèn, anod hoá",
      "Đầu nối khí": "1/4″ Universal"
    },
    specConfidence: "verified"
  },
  {
    slug: "prolite-pressure-suction-gun",
    name: "PROLite Pressure/Suction Gun",
    brand: "DeVilbiss",
    industries: ["collision"],
    shortDesc: "Súng phun PROLite bản Pressure/Suction, thân nhôm phủ lớp QuickClean chống bám sơn, phù hợp thi công diện rộng liên tục mà không cần nạp lại cốc, có nhiều air cap Conventional/HVLP/High Efficiency.",
    img: "https://binks.canto.com/direct/image/ro8uiiobgl69ndbfrff4974q0p/ROFEtfXTJmyPozQPrYfuF_hsYLE/m800/800",
    specs: {
      "Trọng lượng": "500 g",
      "Đường kính béc phun": "0.85 – 1.8 mm (air cap TE30/TE40/C797/HV40)",
      "Áp suất khí đầu vào": "15 – 44 PSI",
      "Tiêu thụ khí": "10.5 – 14.5 SCFM (300 – 410 L/phút)",
      "Độ rộng vệt phun": "275 – 420 mm",
      "Chất liệu thân súng": "Nhôm phủ QuickClean, anod hoá",
      "Đầu nối khí": "1/4″ Universal"
    },
    specConfidence: "verified"
  },
  {
    slug: "slg-gravity-gun",
    name: "SLG Gravity Gun",
    brand: "DeVilbiss",
    industries: ["collision", "construction"],
    shortDesc: "Súng phun đa dụng SLG cho công nghiệp và sửa chữa ô tô, thân nhôm nhẹ và bền, air cap đồng gia công chính xác, đi kèm cốc Acetal 550ml, phin lọc sơn và cờ lê vệ sinh.",
    img: "https://binks.canto.com/direct/image/751btfv9md1q54u47sg6mm0u7r/KmDyAtWtBHyLqzD4SWxrsKDLSHw/m320/800",
    specs: {
      "Model": "SLG-620 / SLG-650",
      "Dung tích cốc": "550 ml, chất liệu Acetal",
      "Chất liệu": "Thân nhôm nhẹ, air cap bằng đồng"
    },
    specConfidence: "partial"
  },
  {
    slug: "sri-pro-lite-manual-gun",
    name: "SRi Pro Lite Manual Gun",
    brand: "DeVilbiss",
    industries: ["collision"],
    shortDesc: "Súng phun độ chính xác cao SRi Pro Lite, kiểm soát vệt phun cực kỳ tinh tế, dùng cho sửa chữa điểm, tạo bóng, che chắn (stencilling); có thêm phiên bản SRi Pro Lite Micro cho kỹ thuật sửa chữa siêu nhỏ.",
    img: "https://binks.canto.com/direct/image/9d140r0gi53mj2nj80m9btmm5l/QaJTbdoAetXWntANJfnNcInwfiE/m320/800",
    specs: {
      "Ứng dụng": "Sửa chữa điểm (spot repair), tạo bóng, stencilling",
      "Đặc điểm": "Kiểm soát vệt phun tinh tế, cân bằng và ổn định cao"
    },
    specConfidence: "partial"
  },
  {
    slug: "tekna-clearcoat-premium-spray-gun",
    name: "TEKNA Clearcoat Premium Spray Gun",
    brand: "DeVilbiss",
    industries: ["collision"],
    shortDesc: "Súng phun sơn bóng cao cấp dòng TEKNA, đi kèm 2 air cap TE25 (High Efficiency) và HV30 (HVLP), đồng hồ khí số HAV-555, cho vệt phun đều và atomization đồng nhất trên mọi loại clearcoat.",
    img: "https://binks.canto.com/direct/image/082r7k1sod5d55hqdv80ml8a3j/G5FHqsWrcGkbRZOupbfAURS4sbw/m320/800",
    specs: {
      "Mã đặt hàng": "704198",
      "Đường kính béc phun": "1.2 / 1.3 / 1.4 / 1.5 mm",
      "Air cap": "TE25 (High Efficiency) / HV30 (HVLP)",
      "Áp suất khí đầu vào": "20 – 29 PSI (1.4 – 2.0 BAR)",
      "Tiêu thụ khí": "11 – 15 SCFM (311 – 424 LPM)",
      "Phụ kiện đi kèm": "Đồng hồ khí số HAV-555, adapter cốc dùng một lần"
    },
    specConfidence: "verified"
  },
  {
    slug: "tekna-basecoat-spray-gun",
    name: "TEKNA Basecoat Spray Gun",
    brand: "DeVilbiss",
    industries: ["collision"],
    shortDesc: "Súng phun sơn lót màu TEKNA, air cap HV20 HVLP tối ưu ở áp suất thấp 14-18 psi, kiểm soát ánh kim tốt, giảm overspray, hiệu suất chuyển sơn cao cho cả sơn gốc nước và dung môi.",
    img: "https://binks.canto.com/direct/image/082r7k1sod5d55hqdv80ml8a3j/G5FHqsWrcGkbRZOupbfAURS4sbw/m320/800",
    specs: {
      "Mã đặt hàng": "703899",
      "Đường kính béc phun": "1.2 / 1.3 / 1.4 / 1.5 mm",
      "Air cap": "HV20 HVLP",
      "Áp suất khí đầu vào": "14 – 24 PSI (1.0 – 1.6 BAR), tối đa 24 PSI ở khu vực yêu cầu HVLP",
      "Tiêu thụ khí": "11.2 – 13 CFM (317 – 368 LPM)",
      "Phụ kiện đi kèm": "Đồng hồ khí số HAV-555"
    },
    specConfidence: "verified"
  },
  {
    slug: "tekna-primer-spray-gun",
    name: "TEKNA Primer Spray Gun",
    brand: "DeVilbiss",
    industries: ["collision"],
    shortDesc: "Súng phun lót TEKNA cho primer, surfacer, filler, polyester, vệt phun rộng và đều, van khí cân bằng giúp cò nhẹ hơn; có phụ kiện UV setup riêng cho primer UV thế hệ mới.",
    img: "https://binks.canto.com/direct/image/082r7k1sod5d55hqdv80ml8a3j/G5FHqsWrcGkbRZOupbfAURS4sbw/m320/800",
    specs: {
      "Mã đặt hàng": "704174 / 704175 / 704182",
      "Đường kính béc phun": "1.4 / 1.6 / 1.8 / 2.0 / 2.5 mm",
      "Air cap": "PR10 (High Efficiency) / PR30 (HVLP)",
      "Dung tích cốc": "900 cc, chất liệu nhôm"
    },
    specConfidence: "verified"
  },
  {
    slug: "tekna-prolite-premium-gun",
    name: "TEKNA ProLite Premium Gun (EPA & SCAQMD Approved)",
    brand: "DeVilbiss",
    industries: ["collision"],
    shortDesc: "Súng phun TEKNA ProLite đạt chuẩn EPA & SCAQMD, tối ưu hiệu suất trong nhiều điều kiện khí hậu, 3 loại air cap công nghệ khí động học tiên tiến, lớp phủ chống ăn mòn cao, phù hợp cả sơn gốc nước.",
    img: "https://binks.canto.com/direct/image/082r7k1sod5d55hqdv80ml8a3j/G5FHqsWrcGkbRZOupbfAURS4sbw/m320/800",
    specs: {
      "Mã đặt hàng": "703517 / 703566 / 703567",
      "Đường kính béc phun": "1.2 / 1.3 / 1.4 mm (bản uncupped: đến 1.5mm)",
      "Air cap": "TE20 (High Efficiency) / HV30 (HVLP) / TE10",
      "Dung tích cốc": "900 cc nhôm hoặc uncupped (adapter cốc dùng một lần)"
    },
    specConfidence: "verified"
  },
  {
    slug: "tekna-pro-premium-gun",
    name: "TEKNA PRO Premium Gun",
    brand: "DeVilbiss",
    industries: ["collision"],
    shortDesc: "Súng phun TEKNA PRO, tối ưu cho mọi điều kiện khí hậu và mọi loại sơn, tay cầm thiết kế lại với kích thước lớn hơn cho người dùng tay to, bộ kit gồm 3 béc phun và 2 air cap.",
    img: "https://binks.canto.com/direct/image/082r7k1sod5d55hqdv80ml8a3j/G5FHqsWrcGkbRZOupbfAURS4sbw/m320/800",
    specs: {
      "Mã đặt hàng": "703580 / 703581 / 703582",
      "Đường kính béc phun": "1.2 / 1.3 / 1.4 / 1.5 mm",
      "Air cap": "TE10 / TE20 (High Efficiency) / HV30 (HVLP)",
      "Dung tích cốc": "900 cc nhôm hoặc uncupped"
    },
    specConfidence: "verified"
  },
  {
    slug: "tekna-copper-premium-spray-gun",
    name: "TEKNA Copper Premium Spray Gun",
    brand: "DeVilbiss",
    industries: ["collision"],
    shortDesc: "Súng phun basecoat/clearcoat cao cấp TEKNA Copper, kiểm soát ánh kim vượt trội, hiệu suất chuyển sơn cao giúp tiết kiệm vật liệu, đồng hồ khí số đi kèm, có 4 phiên bản với 2 lựa chọn cỡ béc.",
    img: "https://binks.canto.com/direct/image/082r7k1sod5d55hqdv80ml8a3j/G5FHqsWrcGkbRZOupbfAURS4sbw/m320/800",
    specs: {
      "Mã đặt hàng": "703661 / 703662 / 703675 / 703676",
      "Đường kính béc phun": "1.2 / 1.3 / 1.4 mm",
      "Air cap": "7E7 (High Efficiency)",
      "Áp suất khí đầu vào": "16 – 30 PSI (1.1 – 2.0 BAR) tuỳ khu vực",
      "Tiêu thụ khí": "9 – 16 SCFM (255 – 453 LPM)",
      "Dung tích cốc": "900 cc nhôm hoặc uncupped",
      "Phụ kiện đi kèm": "Đồng hồ khí số HAV-555"
    },
    specConfidence: "verified"
  }
];
