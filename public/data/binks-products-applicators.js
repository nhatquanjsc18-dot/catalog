// Binks — Liquid Finishing Equipment / Applicators
// Source: https://binks.com/solutions/liquid-finishing-equipment/liquid-applicators/ (?_paged=1..7, trang 8 rỗng)
// Duyệt hết 7 trang, mỗi trang ~9 sản phẩm (trang 7 có 4) => gom được 58 link /product/ duy nhất.
// Badge trên trang danh mục ghi "Automatic Spray Guns 26 / Manual Airbrush Guns 1 / Manual Spray Guns 26"
// (tổng 53) nhưng con số đó chỉ đếm các sản phẩm gắn nhãn phụ "spray gun"; danh sách link thực tế trên
// trang liệt kê thêm cả súng phun tĩnh điện, đầu phun rotary/bell, giá đỡ di động (cart) và phụ kiện nối
// dài (extension) không được gắn nhãn "gun" nên không nằm trong 3 badge đó — vì vậy tổng số link thực tế
// cào được là 58, không phải 53. Đã đối chiếu kỹ từng trang, không thiếu/lặp link nào.
// Trong 58 link đó:
//  - "DAGR Airbrush" (slug dagr-airbrush) trùng 100% nội dung/ảnh/URL với sản phẩm đã có sẵn trong
//    devilbiss-products.js (cùng brand DeVilbiss thật) — bỏ qua để tránh trùng slug trong toàn bộ catalog.
//  - "RMA-600 Series Rotary Atomizers" chỉ là trang hub liệt kê lại 3 sản phẩm đã có sẵn riêng biệt
//    (RMA-660, RMA-670, RMA-680) — không tạo record riêng để tránh trùng lặp, giống cách xử lý DV1 Guns
//    trong devilbiss-products.js trước đây.
//  - "JGA & JGHV Spray Gun Series" có 4 biến thể (JGA Standard-Size, JGHV Standard-Size Maximum
//    Performer, JGA-HVLP, JGHV-531) nhưng KHÔNG có trang chi tiết riêng (chỉ là mục accordion trên cùng
//    một trang) nên giữ nguyên 1 record duy nhất, liệt kê các biến thể trong specs.
//  - "Spray Gun Extensions" xuất hiện 2 lần với 2 slug khác nhau: "spray-gun-extensions" (Binks Extensions,
//    dùng cho súng 21/95/95A/2001/2100/Trophy...) và "devilbiss-spray-gun-extensions" (dùng riêng cho
//    AG-362/Cobra 2) — nội dung khác nhau thật sự nên giữ cả 2 record.
//  - Một số sản phẩm có tên/nội dung gốc là thương hiệu DeVilbiss hoặc Ransburg (vd Cobra 3c, No.2 Process
//    Gun, RansFlex, Evolver...) nhưng được binks.com xếp chung trong danh mục Liquid Finishing / Applicators
//    của Binks — giữ brand="Binks" theo đúng danh mục nguồn đã xác nhận với người dùng.
//  - 5 sản phẩm (FinishLine FLG-4 Gun, FLG Gun, JCK Manual Spray Gun, SLG Gravity Gun, SRi Pro Lite Manual
//    Gun) trùng 100% ảnh/nội dung/URL sản phẩm với các bản ghi đã có sẵn trong devilbiss-products.js (brand
//    DeVilbiss thật, đúng theo danh mục automotive-refinishing) — bỏ các bản ghi trùng này khỏi file Binks
//    để tránh trùng slug trong toàn bộ catalog, cùng cách xử lý như "DAGR Airbrush" ở trên.
// Kết quả: 51 record duy nhất (58 link - 2 bị loại trùng/hub - 5 bị loại trùng với devilbiss-products.js).
var BINKS_APPLICATORS_PRODUCTS = [
  {
    slug: "advance-hd-gun",
    name: "Advance HD Gun",
    brand: "Binks",
    subCategory: "Súng/đầu phun sơn công nghiệp",
    industries: [],
    shortDesc: "Súng phun sơn cỡ trung thông dụng, có bản Pressure/Suction/Gravity, nhiều loại air cap conventional/Trans-Tech/HVLP cho gỗ, kim loại, nhựa, gốm và composite; tip/kim inox tiêu chuẩn, đạt chứng nhận CE và ATEX.",
    img: "https://binks.canto.com/direct/image/3a1mepokpd1m5274ona9uors5b/GPam48HesG4r5Gie9OQa7Pihd0w/m320/800",
    specs: {
      "Kiểu cấp sơn": "Pressure, Suction, Gravity",
      "Công nghệ phun": "Conventional, Trans-Tech, HVLP",
      "Vật liệu tip/kim": "Inox tiêu chuẩn",
      "Chứng nhận": "CE, ATEX"
    },
    specConfidence: "partial"
  },
  {
    slug: "aerobell-168",
    name: "Aerobell 168 Rotary Atomizer",
    brand: "Binks",
    subCategory: "Súng/đầu phun sơn công nghiệp",
    industries: [],
    shortDesc: "Đầu phun bell tĩnh điện tốc độ cao dòng Aerobell (Ransburg), kết cấu turbine air-bearing bền, ít chi tiết nên giảm bảo trì; nhiều lựa chọn cup và vòng khí tạo hình MonoFlex/DualFlex cho cả bề mặt lớn lẫn chi tiết phức tạp.",
    img: "https://binks.com/nitropack_static/DKeuCjlrqwkGGlElLmgFlKuNiIjGRaMQ/assets/desktop/optimized/rev-b25607e/binks.canto.com/direct/image/tbufoisru964tdaq1tqu9ag029/tAw5sfXGi4bshJz05Fc-iswLW7s/e76461cbc5a97846a74875977b6a1fb5.original",
    specs: {
      "Kiểu đầu phun": "Rotary bell, turbine air-bearing",
      "Công nghệ vòng khí": "MonoFlex (mẫu phun lớn/trung), DualFlex tùy chọn (mẫu phun nhỏ/xuyên sâu)",
      "Ứng dụng": "Bề mặt lớn đến chi tiết phức tạp"
    },
    specConfidence: "partial"
  },
  {
    slug: "aerobell-268-rotary-atomizer",
    name: "Aerobell 268 Rotary Atomizer",
    brand: "Binks",
    subCategory: "Súng/đầu phun sơn công nghiệp",
    industries: [],
    shortDesc: "Đầu phun bell tĩnh điện tốc độ cao cho sơn thông thường và hàm lượng rắn cao, manifold cấu hình tới 3 màu, lắp được cho robot cổ tay đặc/rỗng; cup nhôm/titan phủ nickel không điện phân, cảm biến tốc độ từ và quang.",
    img: "https://binks.canto.com/direct/image/7bepksjipd6s9dm2i5rnkknj4r/HiIC2aWuLaZPALTZR_22WlgQomA/m320/800",
    specs: {
      "Cấu hình vòng khí": "30mm dual shape air, 65mm MonoFlex hoặc DualFlex",
      "Vật liệu cup": "Nhôm/Titan phủ nickel electroless",
      "Số màu": "Manifold cấu hình tới 3 màu",
      "Lắp robot": "Robot cổ tay đặc (machine) hoặc rỗng (non-hollow wrist)"
    },
    specConfidence: "partial"
  },
  {
    slug: "ag360-series-automatic-guns",
    name: "AG360 Series Automatic Guns",
    brand: "Binks",
    subCategory: "Súng/đầu phun sơn công nghiệp",
    industries: [],
    shortDesc: "Súng phun tự động áp khí thấp DeVilbiss dòng AG-360 (AG-361/362/363), đường dẫn sơn inox cho sơn gốc nước/dung môi, manifold gắn tháo nhanh, có kênh khí Fan/Atomizing/Trigger độc lập phù hợp ứng dụng robot.",
    img: "https://binks.canto.com/direct/image/9907j24u457kt0q4ti01s6lv5p/iJIh3SsGu5_BDD4YA-LAAQZPwaQ/m320/800",
    specs: {
      "Model": "AG-361 / AG-362 / AG-363",
      "Công nghệ air cap": "Conventional, HVLP, Trans-Tech (Compliant)",
      "Đường dẫn sơn": "Inox, phù hợp sơn gốc nước và dung môi",
      "Điều khiển khí": "Fan air, Atomizing air, Trigger air độc lập"
    },
    specConfidence: "partial"
  },
  {
    slug: "ag364-airless-automatic-gun",
    name: "AG364 Airless Automatic Gun",
    brand: "Binks",
    subCategory: "Súng/đầu phun sơn công nghiệp",
    industries: [],
    shortDesc: "Súng phun airless tự động cho sơn gốc nước/dung môi, hiệu suất truyền sơn cao giảm overspray, có bản manifold dead-head hoặc recirculation; tip holder xoay 45°, tương thích phụ tùng với hệ air-assisted airless hiện có.",
    img: "https://binks.canto.com/direct/image/vtivqsm8ap0rdbt3jsq8v6iq36/AJQiN9LWgZzK_OiJZ0W3PACXS0Q/m320/800",
    specs: {
      "Kiểu manifold": "Dead head hoặc recirculation",
      "Tip holder": "Xoay chỉ số 45°, chỉnh không cần insert",
      "Tương thích": "Dùng chung bơm, ống, đồng hồ với hệ air-assisted airless hiện có"
    },
    specConfidence: "partial"
  },
  {
    slug: "agmd-pro-automatic-gun",
    name: "AGMD Pro Automatic Gun",
    brand: "Binks",
    subCategory: "Súng/đầu phun sơn công nghiệp",
    industries: [],
    shortDesc: "Súng phun tự động cải tiến từ công nghệ phun sương GTi Pro, đầu súng tháo nhanh giảm downtime bảo trì, đường sơn nội bộ tối ưu cho đổi màu/xả rửa nhanh cho lớp phủ Class A, cùng Tool Center Point với AGMD gốc.",
    img: "https://binks.canto.com/direct/image/jii26fkp9t0q14udn0a3h6p05h/PRghDQApxh6uEEqaHBCzyATDkbA/m800/800",
    specs: {
      "Đầu súng": "Tháo nhanh (quick detach)",
      "Kẹp": "Radial clamping, cam quick release hai bên",
      "Kim/tip": "Kim nhựa trên đế inox (tùy chọn) cho tuổi thọ cao hơn",
      "Vật liệu phù hợp": "Sơn gốc nước và dung môi"
    },
    specConfidence: "partial"
  },
  {
    slug: "binks-airless-75-spray-gun",
    name: "Binks Airless 75 Spray Gun",
    brand: "Binks",
    subCategory: "Súng/đầu phun sơn công nghiệp",
    industries: [],
    shortDesc: "Súng phun airless cầm tay thân nhôm rèn, chịu áp tới 7.500 psi (517 bar), ống dẫn sơn inox thành dày rộng cho vật liệu đặc từ stain mỏng tới sơn kẽm giàu hàm lượng rắn, thiết kế kim giữ lò xo ngoài đường sơn.",
    img: "https://binks.canto.com/direct/image/v1fcn263611gj5mqsi9mjava68/TsAugF3uWYvKgYKv0cYTswDQMyY/m320/800",
    specs: {
      "Áp suất tối đa": "7.500 psi (517 bar)",
      "Thân súng": "Nhôm rèn",
      "Ống dẫn sơn": "Inox thành dày",
      "Cổng nạp": "3/8 inch (bản 75M), giảm tắc nghẽn"
    },
    specConfidence: "verified"
  },
  {
    slug: "spray-gun-extensions",
    name: "Binks Extensions",
    brand: "Binks",
    subCategory: "Súng/đầu phun sơn công nghiệp",
    industries: [],
    shortDesc: "Bộ nối dài súng phun cho vị trí khó tiếp cận, nhiều kiểu phun (fan, forward round, 360°, góc 45°/90°/30° ngược), tương thích các dòng súng 21/95/95A/2001/2100/2101/Trophy/Mach 1/550/570, dài từ 6 đến 72 inch.",
    img: "https://binks.canto.com/direct/image/umnlaj44qh065eg75sn9v7ti74/VS08urlJpYbmROLHkeuQlbqZZHY/m800/800",
    specs: {
      "Chiều dài": "6\" đến 72\" (nhiều mức)",
      "Kiểu phun": "Fan, Forward round, 360° circular, góc 45°/90°/30° ngược",
      "Tương thích công nghệ": "HVLP, Conventional, Airless",
      "Súng tương thích": "21, 95, 95A, 2001, 2100, 2101, Trophy, Mach 1, Mach 1SL, Mach 1A 75, 550, 570"
    },
    specConfidence: "partial"
  },
  {
    slug: "devilbiss-cobra-3c",
    name: "Cobra 3c Automatic Gun",
    brand: "Binks",
    subCategory: "Súng/đầu phun sơn công nghiệp",
    industries: [],
    shortDesc: "Súng phun tự động áp thấp cho sơn dung môi/gốc nước, chuyên dùng phun linh kiện điện tử (camera, máy tính, điện thoại) trên máy reciprocator/rotary/robot; công nghệ phun Trans-Tech hoặc HVLP, đường sơn inox cao cấp.",
    img: "https://binks.canto.com/direct/image/bodhc020m15klce6j859kgi93d/_mpG7FX4cODw8pq-41uaE_FSXy0/m240/800",
    specs: {
      "Công nghệ phun": "Trans-Tech hoặc HVLP",
      "Đường sơn": "Inox cao cấp",
      "Điều chỉnh kim": "Núm vi chỉnh (micrometer)",
      "Ứng dụng điển hình": "Linh kiện điện tử nhỏ (camera, máy tính, điện thoại)"
    },
    specConfidence: "partial"
  },
  {
    slug: "da-300-automatic-gun",
    name: "DA-300 Automatic Gun",
    brand: "Binks",
    subCategory: "Súng/đầu phun sơn công nghiệp",
    industries: [],
    shortDesc: "Súng phun tự động LVMP nhỏ gọn, hiệu suất cao, phù hợp phun sơn metallic/pearl; đường dẫn inox cho sơn gốc nước, dùng air cap DeVilbiss uy tín, có tùy chọn núm chỉnh kim không nấc.",
    img: "https://binks.canto.com/direct/image/1ka7ujon7d2k9560prld48ti4s/JKaRHBjZqezRn0ElQdckJ5DFWVc/m3000/800",
    specs: {
      "Áp suất khí phun (đầu vào súng)": "0.25 MPa",
      "Áp suất sơn tối đa": "0.7 MPa",
      "Áp suất làm việc (xy-lanh)": "0.35 – 0.5 MPa",
      "Trọng lượng": "507 g",
      "Cổng kết nối": "G1/4 (sơn, khí xy-lanh, khí phun sương)",
      "Kích thước": "L150 x W38 x H76 mm",
      "Béc phun/lưu lượng khuyến nghị": "0.8mm~100 mL/phút, 1.1mm~200 mL/phút, 1.4mm~300 mL/phút, 1.8mm~400 mL/phút"
    },
    specConfidence: "verified"
  },
  {
    slug: "dvx-automatic-gun",
    name: "DVX Automatic Gun",
    brand: "Binks",
    subCategory: "Súng/đầu phun sơn công nghiệp",
    industries: [],
    shortDesc: "Súng phun tự động thế hệ mới, thiết kế lại thân sơn và air cap giảm nhiễu loạn dòng khí/sơn, cho lưu lượng cao và hiệu suất truyền sơn tăng, giảm dùng vật liệu tới 15% so với súng khí thường; air cap tháo nhanh chưa tới 1 vòng xoay.",
    img: "https://binks.canto.com/direct/image/5h02t041j90531r8telvgkbq52/OFGnVgtxSw390Ix_Gn9w-i5WTdQ/m800/800",
    specs: {
      "Model": "DVXA (Fixed/Ratchet back end, thường hoặc Hardened)",
      "Hiệu suất truyền sơn": "Tăng 15% so với súng khí không tĩnh điện khác",
      "Air cap": "Tháo nhanh (quick release, chưa đến 1 vòng xoay)",
      "Vật liệu phù hợp": "Sơn gốc nước/dung môi, urethane hàm lượng rắn cao, epoxy, enamel"
    },
    specConfidence: "verified"
  },
  {
    slug: "dvx-guns",
    name: "DVX Manual Guns",
    brand: "Binks",
    subCategory: "Súng/đầu phun sơn công nghiệp",
    industries: [],
    shortDesc: "Súng phun cầm tay thế hệ mới cùng công nghệ DVX, có bản Gravity (kèm cốc hoặc chỉ súng) và Pressure (thường hoặc Hardened), cho chất lượng phun đồng đều nhất, giảm cam sành và giảm 15% vật liệu sử dụng.",
    img: "https://binks.canto.com/direct/image/pa9t81ocjd1vj2k5go4erj6v1c/W-7ao4hX-EeaBdkLEvpW03CVSII/m3000/800",
    specs: {
      "Model": "DVXG (Gravity, kèm/không kèm cốc), DVXP (Pressure, thường/Hardened)",
      "Hiệu suất truyền sơn": "Tăng 15% so với súng khí không tĩnh điện khác",
      "Air cap": "3 loại áp lực + 2 loại gravity",
      "Vật liệu phù hợp": "Sơn gốc nước/dung môi, urethane hàm lượng rắn cao, epoxy, enamel"
    },
    specConfidence: "verified"
  },
  {
    slug: "estaquick-automatic-gun",
    name: "Estaquick Automatic Gun",
    brand: "Binks",
    subCategory: "Súng/đầu phun sơn công nghiệp",
    industries: [],
    shortDesc: "Súng phun tĩnh điện tự động tháo nhanh (Ransburg), phun sương chất lượng cao kết hợp hiệu quả tĩnh điện, tháo bảo trì dưới 5 giây nhờ giá đỡ xoay 90°, lưu lượng sơn cao tới 1000 cc/phút, hỗ trợ cả sơn 1 và 2 thành phần.",
    img: "https://binks.canto.com/direct/image/0u6bgchr1563h764397e7eb96t/WwiBMQdw2R3gVXyAY9dpez8BO4o/m320/800",
    specs: {
      "Lưu lượng sơn tối đa": "1000 cc/phút",
      "Tháo lắp bảo trì": "Dưới 5 giây (bracket xoay 90°)",
      "Đầu tip": "Tháo nhanh kiểu bayonet 1/4 vòng",
      "Vật liệu phù hợp": "Đơn thành phần hoặc 2 thành phần (2K)"
    },
    specConfidence: "partial"
  },
  {
    slug: "evolver-560-automatic-gun",
    name: "Evolver 560 Automatic Gun",
    brand: "Binks",
    subCategory: "Súng/đầu phun sơn công nghiệp",
    industries: [],
    shortDesc: "Đầu phun bell tĩnh điện tự động cho robot (Ransburg), van xả đơn/kép nối đất toàn bộ trong manifold, dùng được với vật liệu dẫn điện gốc dung môi, đổi màu nhanh dưới 10 giây, tương thích 4 cấu hình súng cho nhiều loại robot.",
    img: "https://binks.canto.com/direct/image/bq6qkk0f1p49f9dem40qqf8038/G5JHTybcKyDduAFBW9DRvog3kgI/m320/800",
    specs: {
      "Thời gian đổi màu": "≤ 10 giây (van dung môi tích hợp)",
      "Bộ nguồn": "MICROPak 2e (phản hồi điện áp/dòng thực tế)",
      "Cấu hình lắp": "4 kiểu súng cho nhiều loại robot",
      "Vật liệu phù hợp": "Sơn gốc dung môi dẫn điện"
    },
    specConfidence: "partial"
  },
  {
    slug: "evolver-560se",
    name: "Evolver 560SE",
    brand: "Binks",
    subCategory: "Súng/đầu phun sơn công nghiệp",
    industries: [],
    shortDesc: "Súng phun tĩnh điện tự động nhỏ gọn (Ransburg), thiết kế đơn giản bền chắc giảm downtime, phù hợp lắp cố định, reciprocator hoặc robot; hiệu suất truyền sơn cao hơn 30% so với súng khí không tĩnh điện, điện áp sạc 85kV.",
    img: "https://binks.canto.com/direct/image/qd1bajhndd0l3c1vk91m3rke0g/gEgv7YX5NZ10cUTZWwc7721SSdI/m320/800",
    specs: {
      "Điện áp sạc": "85 kV",
      "Hiệu suất truyền sơn": "Cao hơn 30% so với súng khí không tĩnh điện",
      "Vật liệu thân": "Nhựa kỹ thuật cường lực cao",
      "Ứng dụng": "Súng cố định, reciprocator hoặc robot"
    },
    specConfidence: "verified"
  },
  {
    slug: "flg-5-gun",
    name: "FLG-5 Gun",
    brand: "Binks",
    subCategory: "Súng/đầu phun sơn công nghiệp",
    industries: [],
    shortDesc: "Súng phun cầm tay đầy đủ kích thước, chi phí thấp DeVilbiss FLG-5, dùng công nghệ phun Trans-Tech tiết kiệm sơn và tuân chuẩn EPA; thân nhôm đúc siêu nhẹ, air cap đồng và tip/kim inox cho tuổi thọ cao.",
    img: "https://binks.canto.com/direct/image/e0nocfehvh58p91vubr5gro97c/L6fuqQHpEOMLgecI8gJC4SNqaNI/m320/800",
    specs: {
      "Công nghệ phun": "DeVilbiss Trans-Tech",
      "Thân súng": "Nhôm đúc siêu nhẹ",
      "Air cap": "Đồng, tip/kim inox",
      "Kiểu cấp sơn": "Suction, Gravity, Pressure"
    },
    specConfidence: "partial"
  },
  {
    slug: "gti-pro-lite-manual-spray-gun",
    name: "GTi Pro Lite Manual Spray Gun",
    brand: "Binks",
    subCategory: "Súng/đầu phun sơn công nghiệp",
    industries: [],
    shortDesc: "Súng phun cầm tay siêu nhẹ thiết kế lại cho cấp áp lực (pressure feed), thân ergonomic cân bằng tốt, nhiều béc phun cho các độ nhớt khác nhau, 3 lựa chọn air cap compliant, van khí đồng trục cho thao tác cò mượt.",
    img: "https://binks.canto.com/direct/image/beb5rdkjt17it3jbdkk7vk9s49/HEl6S3eaMKLmmfk6DWG18cpIxBk/m320/800",
    specs: {
      "Kiểu cấp sơn": "Pressure feed",
      "Air cap": "3 lựa chọn compliant",
      "Van khí": "Thiết kế đồng trục (coaxial)",
      "Công nghệ atomization": "DeVilbiss"
    },
    specConfidence: "partial"
  },
  {
    slug: "gti-pro-lite-suction-feed-gun",
    name: "GTi Pro Lite Suction Feed Gun",
    brand: "Binks",
    subCategory: "Súng/đầu phun sơn công nghiệp",
    industries: [],
    shortDesc: "Súng phun cầm tay siêu nhẹ thiết kế lại cho cấp hút (suction feed), thân ergonomic cân bằng tốt, nhiều béc phun cho các độ nhớt khác nhau, 3 lựa chọn air cap compliant, van khí đồng trục cho thao tác cò mượt.",
    img: "https://binks.canto.com/direct/image/i5mt0j5j3l0nd6op99oud63h2f/-hkAOoBnYznzt0AjbKATiLDppCo/m320/800",
    specs: {
      "Kiểu cấp sơn": "Suction feed",
      "Air cap": "3 lựa chọn compliant",
      "Van khí": "Thiết kế đồng trục (coaxial)",
      "Công nghệ atomization": "DeVilbiss"
    },
    specConfidence: "partial"
  },
  {
    slug: "j4-turbo-bell",
    name: "J4 Turbo Bell",
    brand: "Binks",
    subCategory: "Súng/đầu phun sơn công nghiệp",
    industries: [],
    shortDesc: "Đầu phun bell tĩnh điện quay ly tâm, giảm mạnh tiêu hao sơn và chi phí buồng sơn, tốc độ quay/áp khí tạo hình/lưu lượng điều khiển từ xa linh hoạt, phù hợp trộn sơn 2 thành phần bên trong bell.",
    img: "https://binks.canto.com/direct/image/b5mos0ub156sd7g4jb770di92t/LteJTSHOCLXYm7bzctFJ47AHeRQ/m3000/800",
    specs: {
      "Đường kính cup": "Φ60 mm",
      "Tốc độ quay tối đa": "30.000 rpm",
      "Khí tiêu thụ": "Turbine 150 L/phút, Shaping 350 L/phút, Seal 30 L/phút",
      "Lưu lượng sơn khuyến nghị": "250 mL/phút",
      "Điện áp ra tối đa (Cascade)": "DC -90 kV",
      "Trọng lượng": "7.0 kg"
    },
    specConfidence: "verified"
  },
  {
    slug: "jga-jghv-spray-gun-series",
    name: "JGA & JGHV Spray Gun Series",
    brand: "Binks",
    subCategory: "Súng/đầu phun sơn công nghiệp",
    industries: [],
    shortDesc: "Dòng súng phun cầm tay JGA/JGHV cho hiệu suất sản xuất cao, tùy chọn kinh tế cho sơn gốc nước/dung môi; gồm 4 biến thể JGA Standard-Size, JGHV Standard-Size Maximum Performer, JGA-HVLP và JGHV-531.",
    img: "https://binks.canto.com/direct/image/dvprd0gtb55bpag8cr84pnlg4v/tNyqHXT7HNQAhGl-pDU_dWkJipI/m320/800",
    specs: {
      "Biến thể": "JGA Standard-Size, JGHV Standard-Size Maximum Performer, JGA-HVLP, JGHV-531",
      "Công nghệ phun": "Conventional (JGA) hoặc HVLP (JGHV)",
      "Vật liệu phù hợp": "Sơn gốc nước và dung môi"
    },
    specConfidence: "partial"
  },
  {
    slug: "jga-pro-manual-gun",
    name: "JGA Pro Manual Gun",
    brand: "Binks",
    subCategory: "Súng/đầu phun sơn công nghiệp",
    industries: [],
    shortDesc: "Súng JGA thiết kế lại toàn diện cho người dùng chuyên nghiệp, thân rèn dập bền, 2 loại air cap công nghệ tiên tiến cho sơn thường và sơn metallic, 3 cỡ béc phun, van khí mới cho thao tác cò mượt hơn.",
    img: "https://binks.canto.com/direct/image/l5v9i9u8956qt7ot2t9tifem0r/nDZ4_7WA-JU18qUoWdS0K7aYU7g/m320/800",
    specs: {
      "Thân súng": "Rèn dập (drop forged), hoàn thiện anod hóa",
      "Air cap": "2 loại công nghệ tiên tiến (cho vật liệu rắn và metallic)",
      "Béc phun": "3 cỡ",
      "Công nghệ phun": "Conventional"
    },
    specConfidence: "partial"
  },
  {
    slug: "mbc-manual-spray-gun",
    name: "MBC Manual Spray Gun",
    brand: "Binks",
    subCategory: "Súng/đầu phun sơn công nghiệp",
    industries: [],
    shortDesc: "Súng phun cầm tay MBC-510 cho ứng dụng đòi hỏi lưu lượng cao và đổi đầu phun nhanh; thân nhôm rèn dập, đầu phun tháo rời, đường sơn đồng mạ nickel, tip/kim inox 400, phù hợp sơn kẽm giàu và bảo trì kết cấu thép/cầu.",
    img: "https://binks.canto.com/direct/image/gn2dbgmmpt43r3t43bund1v12k/tAFEVQuanQ_sINZWf-D4L4uhEKM/m320/800",
    specs: {
      "Model": "MBC-510",
      "Thân súng": "Nhôm rèn dập, đầu phun tháo rời",
      "Đường sơn": "Đồng mạ nickel",
      "Tip/kim": "Inox cấp 400",
      "Ứng dụng": "Sơn kẽm, giàn khoan, chống ăn mòn, bảo trì cầu"
    },
    specConfidence: "partial"
  },
  {
    slug: "micro-bell-mark4",
    name: "Micro Bell Mark4",
    brand: "Binks",
    subCategory: "Súng/đầu phun sơn công nghiệp",
    industries: [],
    shortDesc: "Máy phun tĩnh điện dạng bell mới nhất cho sơn metallic, 4 loại cup kết hợp khí tạo hình cho chất lượng cao ở mọi điều kiện; động cơ air-bearing nhỏ gọn tốc độ cao, giảm 1kg trọng lượng so với model trước (Mark3).",
    img: "https://binks.canto.com/direct/image/b499ha8j653dvb64v0ad374q5k/a6f7MrCXC9GdrhuExLM7rRb3SqM/m3000/800",
    specs: {
      "Đường kính cup": "Φ30 / Φ40 / Φ50 / Φ70 mm",
      "Tốc độ quay tối đa": "60.000 rpm (Φ30~Φ50mm), 40.000 rpm (Φ70mm)",
      "Lưu lượng sơn khuyến nghị": "300 mL/phút",
      "Điện áp ra tối đa": "DC -90 kV, dòng tối đa 200 μA",
      "Cảm biến tốc độ": "Sợi quang (Optical Fiber)",
      "Kích thước/Trọng lượng": "Dài 558 mm / 6.9 kg"
    },
    specConfidence: "verified"
  },
  {
    slug: "mighty-compact-gun",
    name: "Mighty Compact Gun",
    brand: "Binks",
    subCategory: "Súng/đầu phun sơn công nghiệp",
    industries: [],
    shortDesc: "Thiết bị phun tĩnh điện hỗ trợ khí nén (air-assisted electrostatic), kết hợp ưu điểm của phun khí và phun tĩnh điện; cascade tích hợp sẵn cùng cáp điện áp thấp đảm bảo an toàn vận hành.",
    img: "https://binks.canto.com/direct/image/ufhe0a6i4p7vreaiojjs7erj4q/XwPzgoJvnrrUC8rlhBGGEeJkYYM/m3000/800",
    specs: {
      "Kiểu": "Built-in Cascade",
      "Chiều dài": "330 mm",
      "Trọng lượng": "1.8 kg",
      "Điện áp phóng": "DC -10 đến -60 kV",
      "Lưu lượng sơn khuyến nghị": "300 mL/phút",
      "Khí tiêu thụ": "100 – 250 L/phút (khí phun sương)"
    },
    specConfidence: "verified"
  },
  {
    slug: "model-2100-spray-gun",
    name: "Model 2100 Spray Gun",
    brand: "Binks",
    subCategory: "Súng/đầu phun sơn công nghiệp",
    industries: [],
    shortDesc: "Súng phun conventional đầy đủ kích thước cho keo dán, epoxy và chất lỏng mài mòn; đường sơn inox chống ăn mòn cho sơn gốc nước, thân nhôm rèn gia công chính xác, nhiều lựa chọn béc phun nhất trong dòng sản phẩm.",
    img: "https://binks.canto.com/direct/image/st3kpb6b711kd505j3qtm1va1k/Wu2z33s-K9X5WLlj1VrbQoCQ9Mc/m320/800",
    specs: {
      "Đường sơn": "Inox chống ăn mòn, phù hợp sơn gốc nước",
      "Thân súng": "Nhôm rèn gia công chính xác",
      "Air cap/béc": "Bộ lựa chọn nhiều nhất trong ngành",
      "Vật liệu phù hợp": "Keo dán, epoxy, chất lỏng mài mòn, hàm lượng rắn cao"
    },
    specConfidence: "partial"
  },
  {
    slug: "model-30-30a-bead-gun",
    name: "Model 30 & 30A Bead Gun",
    brand: "Binks",
    subCategory: "Súng/đầu phun sơn công nghiệp",
    industries: [],
    shortDesc: "Súng rải hạt thủy tinh phản quang cho công tác kẻ vạch đường, vận hành bằng khí nén từ phía sau súng, model 30 rải 20 lbs/phút ở 50 psi tối thiểu; model 30A dạng bleeder lưu lượng cao cho vật liệu nhớt trong đánh dấu đường.",
    img: "https://binks.canto.com/direct/image/qk7rf14evh4p5e2760e46la61c/20s4XxXke_FuJMniLgdc5mNBlfE/m320/800",
    specs: {
      "Lưu lượng hạt (Model 30)": "20 lbs/phút @ tối thiểu 50 psi",
      "Lưu lượng hạt (Big Bore Kit tùy chọn)": "Tới 60 lbs/phút @ 70 psi (béc 1/2\")",
      "Béc tiêu chuẩn": "7/32\", 1/4\", 9/32\", 11/32\"",
      "Cổng kết nối (Model 30A)": "Khí 1/4\" NPS(m), sơn 3/4\" NPS(m)"
    },
    specConfidence: "verified"
  },
  {
    slug: "no-2-deuce-cart",
    name: "No. 2 Deuce Cart",
    brand: "Binks",
    subCategory: "Súng/đầu phun sơn công nghiệp",
    industries: [],
    shortDesc: "Bộ phun tĩnh điện di động trọn gói (Ransburg No.2 Gun + xe đẩy), hiệu suất truyền sơn từ 95% trở lên, phù hợp thi công tại chỗ cho nội thất kim loại, tủ hồ sơ, hàng rào, lan can; gói SE/LSX gồm đầy đủ súng, nguồn, ống, xe đẩy.",
    img: "https://binks.canto.com/direct/image/o5092qqgrp7c72o8cv1l7dcg0q/Vh7Ygm6_YBehpY5g0iWm4tp_jKM/m800/800",
    specs: {
      "Hiệu suất truyền sơn": "≥ 95%",
      "Gói tiêu chuẩn (SE)": "Súng No.2 (bell cup 4\"), nguồn 9060, cáp cao áp + ống sơn 25ft, xe đẩy, bình áp 2.8 gal, máy nén, bình an toàn dung môi",
      "Ứng dụng": "Nội thất kim loại, tủ hồ sơ, hàng rào, lan can, ống"
    },
    specConfidence: "verified"
  },
  {
    slug: "ransburg-no-2-gun",
    name: "No. 2 Process Gun For Onsite Finishing",
    brand: "Binks",
    subCategory: "Súng/đầu phun sơn công nghiệp",
    industries: [],
    shortDesc: "Súng phun tĩnh điện cầm tay dạng bell quay (Ransburg No.2) cho thi công tại chỗ gần như không overspray, hiệu suất truyền sơn 95%, điện áp 90kV, có bản dẫn động khí hoặc điện, 3 cỡ bell cho nhiều ứng dụng công nghiệp.",
    img: "https://binks.canto.com/direct/image/cpemdt5lip31p0o23niu1le952/H_iZlvSQ1_Rn02tmiNHTgUNcwRY/m320/800",
    specs: {
      "Hiệu suất truyền sơn": "95%",
      "Điện áp": "90 kV",
      "Dẫn động bell": "Turbine khí (air turbine)",
      "Số cỡ bell": "3 cỡ cho các ứng dụng công nghiệp"
    },
    specConfidence: "verified"
  },
  {
    slug: "ragent-supreme-ii",
    name: "RAgent Supreme II",
    brand: "Binks",
    subCategory: "Súng/đầu phun sơn công nghiệp",
    industries: [],
    shortDesc: "Súng phun tĩnh điện tự động ứng dụng công nghệ phun DeVilbiss cho hiệu suất phun sương vượt trội, ổn định điện áp tại đầu súng cho chất lượng hoàn thiện đồng đều; bộ điều khiển cao áp RPI-300 tích hợp nhiều mạch an toàn.",
    img: "https://binks.canto.com/direct/image/atulqcog256hbars63h0c5ek6k/Autrf-Kisx3pBTmyqJr9oC_Uw1E/m3000/800",
    specs: {
      "Model": "RAG3 / RAG4",
      "Chiều dài": "520 mm",
      "Trọng lượng": "4.6 kg (kèm van TD)",
      "Điện áp phóng tối đa": "DC -5 đến -100 kV (RAG4 với RIC-900), DC -5 đến -90 kV (tiêu chuẩn)",
      "Lưu lượng sơn khuyến nghị": "300 mL/phút",
      "Khí tiêu thụ": "100 – 300 L/phút (khí phun sương + khí tạo mẫu)"
    },
    specConfidence: "verified"
  },
  {
    slug: "ransburg-turbodisk-atomizer",
    name: "Ransburg TurboDisk Atomizer",
    brand: "Binks",
    subCategory: "Súng/đầu phun sơn công nghiệp",
    industries: [],
    shortDesc: "Đầu phun tĩnh điện dạng đĩa quay tốc độ cao, phun sương siêu mịn cho hiệu suất truyền sơn cao, phù hợp cả sơn gốc nước và hàm lượng rắn cao; đĩa răng cưa cho atomization tốt ngay cả tốc độ quay thấp, kết cấu chủ yếu bằng inox.",
    img: "https://binks.com/nitropack_static/DKeuCjlrqwkGGlElLmgFlKuNiIjGRaMQ/assets/desktop/optimized/rev-b25607e/binks.canto.com/direct/image/kfes7c4k011rdad3h1vvejpc2l/F1jMVQHy_QUSVeU4lQAOM-XOovU/eeef89b53a5f78efb4ee9589f7944101.original",
    specs: {
      "Kiểu đầu phun": "Đĩa quay tĩnh điện (Disk-Type Rotary)",
      "Thiết kế đĩa": "Cạnh răng cưa (serrated edge conical disk)",
      "Hệ cấp sơn": "Dual feed, lưu lượng cao",
      "Vật liệu kết cấu": "Chủ yếu inox"
    },
    specConfidence: "partial"
  },
  {
    slug: "ransflex-aa85-air-assisted-airless-applicator",
    name: "RansFlex AA85 Air-Assisted Airless Applicator",
    brand: "Binks",
    subCategory: "Súng/đầu phun sơn công nghiệp",
    industries: [],
    shortDesc: "Súng phun tĩnh điện air-assisted airless nhẹ, ergonomic, dùng máy phát điện tích hợp trên súng; kết hợp công nghệ phun sương DeVilbiss với nguồn tĩnh điện Ransburg cho hiệu suất truyền sơn cao.",
    img: "https://binks.canto.com/direct/image/1mlcb2ak3p7vr6v9fs580g5u1u/b0NPUmShHtqMOMQUEAuo9hE_P2E/m3000/800",
    specs: {
      "Loại công nghệ": "Air-Assisted Airless, tĩnh điện",
      "Nguồn tĩnh điện": "Máy phát tích hợp trên súng (onboard generator)",
      "Công nghệ phun sương": "DeVilbiss atomization"
    },
    specConfidence: "partial"
  },
  {
    slug: "ransflex-automatic-gun",
    name: "RansFlex Automatic Gun (RFXA)",
    brand: "Binks",
    subCategory: "Súng/đầu phun sơn công nghiệp",
    industries: [],
    shortDesc: "Súng phun tĩnh điện tự động áp thấp phun khí, có bản gốc nước/dung môi và bleed/non-bleed; air cap và vòng giữ được thiết kế bọc kín tránh rơi vào lưới buồng sơn, nhiều béc phun từ 0.7mm đến 1.8mm, bảo hành 5 năm.",
    img: "https://binks.canto.com/direct/image/qp3jnpqpap5051q6473q65pk13/qqGA4th100MddQkORyPoM5vWYZU/m320/800",
    specs: {
      "Công nghệ phun": "Air spray hoặc Trans-Tech compliant",
      "Béc phun": "0.7 / 1.0 / 1.2 / 1.4 / 1.8 mm và tròn",
      "Chứng nhận": "FM (US & Canada), ATEX EN 50 050",
      "Bảo hành": "5 năm (lỗi nhà sản xuất)"
    },
    specConfidence: "partial"
  },
  {
    slug: "ransflex-electrostatic-gun-rfxw",
    name: "RansFlex Electrostatic Gun (RFXW)",
    brand: "Binks",
    subCategory: "Súng/đầu phun sơn công nghiệp",
    industries: [],
    shortDesc: "Súng phun tĩnh điện cầm tay chuyên cho sơn gốc nước, máy phát 3 pha tích hợp giảm rung tay, ống khí tháo nhanh ở cuối tay cầm giảm trọng lượng/mô-men, béc phun mã màu dễ nhận diện, thiết kế bọc kín linh kiện bên trong.",
    img: "https://binks.canto.com/direct/image/7hudagniel25bcmo2hkt8i6r1d/5ZQ632l3249f7YmMBYzvDLxdGL0/m3000/800",
    specs: {
      "Vật liệu phù hợp": "Chuyên sơn gốc nước (waterborne)",
      "Máy phát": "3 pha, tích hợp giảm rung",
      "Kết nối khí": "Tháo nhanh ở cuối tay cầm",
      "Béc phun": "Mã màu phân biệt kích cỡ"
    },
    specConfidence: "partial"
  },
  {
    slug: "ransflex-electrostatic-gun-rx-rfx",
    name: "RansFlex Electrostatic Gun (RX/RFX)",
    brand: "Binks",
    subCategory: "Súng/đầu phun sơn công nghiệp",
    industries: [],
    shortDesc: "Súng phun tĩnh điện cầm tay hiệu suất cao, tuabin khí dẫn động, dùng cho sơn dung môi; kết hợp công nghệ tĩnh điện Ransburg với công nghệ phun sương DeVilbiss trong thân súng nhỏ gọn nhẹ hơn.",
    img: "https://binks.canto.com/direct/image/u2a1o7itd56n56arbdtin7bo5g/tF5C75fpXPVAO-7pVMi9DXGjEyU/m3000/800",
    specs: {
      "Dẫn động": "Turbine khí (air turbine)",
      "Vật liệu phù hợp": "Sơn gốc dung môi",
      "Đặc điểm": "Cascade và công nghệ phun sương độc quyền, nhỏ gọn hơn thế hệ trước"
    },
    specConfidence: "partial"
  },
  {
    slug: "ransflex-indirect-manual-gun-rfxi",
    name: "RansFlex Indirect Manual Gun (RFXi)",
    brand: "Binks",
    subCategory: "Súng/đầu phun sơn công nghiệp",
    industries: [],
    shortDesc: "Súng phun tĩnh điện cầm tay 65kV cho sơn gốc nước, dùng công nghệ sạc tĩnh điện gián tiếp (indirect charging) nên không cần cách ly bồn/bơm sơn đắt tiền, tuabin nội tích hợp, bảo hành 5 năm, air cap DeVilbiss danh tiếng.",
    img: "https://binks.canto.com/direct/image/1cq2kka2ah78707jut3kc3hf1c/zU3PXxfmAiuwXCn-sXiDG6mFqjY/m3000/800",
    specs: {
      "Điện áp": "65 kV",
      "Công nghệ sạc": "Indirect (gián tiếp), không cần cách ly bồn sơn",
      "Dẫn động": "Turbine khí nội tích hợp",
      "Bảo hành": "5 năm (giới hạn)"
    },
    specConfidence: "verified"
  },
  {
    slug: "ransflex-quick-fan-rxq-rfxq",
    name: "RansFlex Quick Fan (RXQ/RFXQ)",
    brand: "Binks",
    subCategory: "Súng/đầu phun sơn công nghiệp",
    industries: [],
    shortDesc: "Súng phun tĩnh điện dung môi với nút bấm chỉnh nhanh mẫu phun (Quick Fan Adjust) từ rộng sang hẹp chỉ bằng một thao tác ấn nút, máy phát tích hợp trên súng, kích thước nhỏ gọn cho hiệu suất hoàn thiện vượt trội.",
    img: "https://binks.canto.com/direct/image/7u2cufocq55m586lf0q6v8du47/vNeIlU-78C0tMFXS96MRooqyp48/m3000/800",
    specs: {
      "Model": "RXQ (45kV), RFXQ (65kV)",
      "Tính năng nổi bật": "Nút Quick Fan Adjust chuyển mẫu phun rộng/hẹp tức thì",
      "Nguồn": "Máy phát tích hợp trên súng"
    },
    specConfidence: "partial"
  },
  {
    slug: "rma-660-robot-mounted-rotary-atomizer",
    name: "RMA-660 Robot Mounted Rotary Atomizer",
    brand: "Binks",
    subCategory: "Súng/đầu phun sơn công nghiệp",
    industries: [],
    shortDesc: "Đầu phun bell gắn robot thế hệ mới, kiểm soát mẫu phun tốt hơn và độ sạch khi vận hành; dùng cho sơn gốc nước/dung môi, có/không tĩnh điện, mẫu phun 2\"–28\" tùy cup và khí tạo hình, turbine tới 100.000 rpm.",
    img: "https://binks.canto.com/direct/image/eeif4c85750chfmj5lnfa5ou33/X065fnTVvvH12yoOi1Zj1dirQ0k/m800/800",
    specs: {
      "Phạm vi mẫu phun": "2\" (50.8mm) – 28\" (711.2mm)",
      "Tốc độ turbine tối đa": "100.000 rpm",
      "Vật liệu phù hợp": "Sơn gốc dung môi (base coat, clear coat), có/không tĩnh điện",
      "Ứng dụng": "Gắn robot (robot mounted)"
    },
    specConfidence: "verified"
  },
  {
    slug: "rma-670-robot-mounted-rotary-atomizer",
    name: "RMA-670 Robot Mounted Rotary Atomizer",
    brand: "Binks",
    subCategory: "Súng/đầu phun sơn công nghiệp",
    industries: [],
    shortDesc: "Đầu phun bell gắn robot dùng công nghệ sạc tĩnh điện gián tiếp cho sơn gốc nước (basecoat), vòng cao áp tháo rời, không cần cách ly hệ thống cấp sơn; mẫu phun 3.5\"–28\" tùy cup 65/81mm, turbine tới 100.000 rpm.",
    img: "https://binks.canto.com/direct/image/uhfk7segj14fr217q999qb1g3d/JFEEztADLo8MOBkOGUKBJHX53F0/m800/800",
    specs: {
      "Phạm vi mẫu phun": "3.5\" (88.9mm) – 28\" (711.2mm)",
      "Đường kính cup": "65 mm và 81 mm",
      "Tốc độ turbine tối đa": "100.000 rpm",
      "Công nghệ sạc": "Indirect charge (vòng cao áp tháo rời)",
      "Vật liệu phù hợp": "Sơn gốc nước (waterborne basecoat)"
    },
    specConfidence: "verified"
  },
  {
    slug: "rma-680-robot-mounted-rotary-atomizer",
    name: "RMA-680 Robot Mounted Rotary Atomizer",
    brand: "Binks",
    subCategory: "Súng/đầu phun sơn công nghiệp",
    industries: [],
    shortDesc: "Đầu phun bell gắn robot dùng công nghệ sạc tĩnh điện trực tiếp cho sơn gốc nước (basecoat); mẫu phun 3.5\"–28\" tùy cup 65mm và mức khí tạo hình, turbine tốc độ tới 100.000 rpm, tuổi thọ gấp 2-3 lần thế hệ trước.",
    img: "https://binks.canto.com/direct/image/eeif4c85750chfmj5lnfa5ou33/X065fnTVvvH12yoOi1Zj1dirQ0k/m800/800",
    specs: {
      "Phạm vi mẫu phun": "3.5\" (88.9mm) – 28\" (711.2mm)",
      "Đường kính cup": "65 mm",
      "Tốc độ turbine tối đa": "100.000 rpm",
      "Công nghệ sạc": "Direct charge",
      "Vật liệu phù hợp": "Sơn gốc nước (waterborne basecoat)"
    },
    specConfidence: "verified"
  },
  {
    slug: "rmb26-rotary-atomizer",
    name: "RMB26 Rotary Atomizer",
    brand: "Binks",
    subCategory: "Súng/đầu phun sơn công nghiệp",
    industries: [],
    shortDesc: "Đầu phun bell tĩnh điện cho phép phun ở cự ly gần (từ 50mm) mà vẫn giữ độ dày màng sơn đồng đều, giảm lãng phí vật liệu và tăng hiệu suất truyền sơn tới 20%, kiểm soát cao áp bằng đường cong Current Buffer cấp bằng sáng chế.",
    img: "https://binks.canto.com/direct/image/dgk59dmf713ar4p0br3vgoui2c/odPi2ND-hB4jdGKwOTmgFcMRFUk/m3000/800",
    specs: {
      "Model": "RMB26",
      "Đường kính cup": "Φ40 / Φ50 mm",
      "Tốc độ quay tối đa": "60.000 rpm",
      "Lưu lượng sơn tối đa": "400 mL/phút",
      "Điện áp tối đa": "DC -60 kV",
      "Khoảng cách phun": "50 – 250 mm (2–10 inch)",
      "Kích thước/Trọng lượng": "Dài 448 mm / 6.5 kg"
    },
    specConfidence: "verified"
  },
  {
    slug: "robot-rea-gun",
    name: "Robot REA Gun",
    brand: "Binks",
    subCategory: "Súng/đầu phun sơn công nghiệp",
    industries: [],
    shortDesc: "Súng phun tĩnh điện tự động nhỏ gọn cho robot, kết hợp lực xuyên thấm (penetration power) và hiệu suất truyền sơn cao nhờ hiệu ứng tĩnh điện, độ bền cao cho vận hành lâu dài, dùng nguồn cao áp gắn ngoài.",
    img: "https://binks.canto.com/direct/image/e2skch1lr148tfagin6ngl8k6r/Xun0ivojKXchJRF-b4eLr5uMSDI/m3000/800",
    specs: {
      "Kiểu": "HV power supply type",
      "Điện áp phóng": "DC -60 kV",
      "Áp suất khí": "1 – 6 kg/cm²",
      "Lưu lượng sơn khuyến nghị": "300 mL/phút",
      "Khí tiêu thụ": "100 – 210 L/phút (khí phun sương + khí tạo mẫu)",
      "Kích thước/Trọng lượng": "Dài 240 mm / 500 g"
    },
    specConfidence: "verified"
  },
  {
    slug: "devilbiss-spray-gun-extensions",
    name: "Spray Gun Extensions",
    brand: "Binks",
    subCategory: "Súng/đầu phun sơn công nghiệp",
    industries: [],
    shortDesc: "Bộ nối dài chuyên dùng cho súng tự động Advance HD (manual), AG-362 và Cobra 2 (pressure), làm từ đồng thau và kim inox, nhiều kiểu phun (fan, forward round, 360°, 45°, 30° ngược), dài từ 6 đến 84 inch, có bản gốm/mềm theo yêu cầu.",
    img: "https://binks.canto.com/direct/image/us7r47hd6l3ct3a9f6g3hbsd0a/5Cj4uAUJn3ZJ9NzgbxA0EhhKpzs/m800/800",
    specs: {
      "Chiều dài": "6\" đến 84\" (nhiều mức)",
      "Vật liệu": "Đồng thau, kim inox (có bản gốm/mềm đặt riêng)",
      "Súng tương thích": "Advance HD (manual), AG-362, Cobra 2 (automatic pressure)",
      "Kiểu phun": "Fan, Forward round, 360°, 45°, 30° ngược"
    },
    specConfidence: "partial"
  },
  {
    slug: "t-2agpv-automatic-gun",
    name: "T-2AGPV Automatic Gun",
    brand: "Binks",
    subCategory: "Súng/đầu phun sơn công nghiệp",
    industries: [],
    shortDesc: "Súng phun tự động LVMP tháo rời gắn robot, nâng cấp từ T-AGPV với độ bền, vệ sinh và bảo trì tốt hơn; thân súng tháo khỏi manifold dễ dàng, dùng cho nhiều tác vụ phun chất lỏng ngoài sơn.",
    img: "https://binks.canto.com/direct/image/0ihn322sjh5vf4s5piqr7n713t/AW-ojhThAawI3EkJ3L4MDm_VTYA/m3000/800",
    specs: {
      "Áp suất sơn tối đa": "0.7 MPa",
      "Áp suất khí phun sương": "0.1 – 0.4 MPa",
      "Áp suất vận hành": "0.35 – 0.5 MPa",
      "Trọng lượng": "366 g (nhôm, T2AGPV-A68) / 730 g (inox, T2AGPV-A78)",
      "Béc phun": "0.7 / 1.1 / 1.4 / 1.6 / 1.8 mm"
    },
    specConfidence: "verified"
  },
  {
    slug: "t-afpv-automatic-gun",
    name: "T-AFPV Automatic Gun",
    brand: "Binks",
    subCategory: "Súng/đầu phun sơn công nghiệp",
    industries: [],
    shortDesc: "Súng phun tự động LVMP siêu nhỏ gọn tháo lắp nhanh chỉ bằng nới 1 bu-lông, chuyên phun các sản phẩm nhỏ như điện thoại/laptop, giảm vật liệu 20-35% so với súng conventional, có bản tuần hoàn sơn trong đầu súng.",
    img: "https://binks.canto.com/direct/image/9mbisnqift6pf8d3rcakm6gi7q/Zoe3kUnYbA6OFovgF6ZAM-Se1zc/m3000/800",
    specs: {
      "Áp suất sơn tối đa": "0.69 MPa",
      "Áp suất khí phun sương": "0.05 – 0.2 MPa",
      "Áp suất vận hành": "0.34 – 0.49 MPa",
      "Trọng lượng": "265 g",
      "Béc phun": "0.7 / 1.0 mm",
      "Tiết kiệm vật liệu (LVMP)": "20 – 35% so với súng conventional"
    },
    specConfidence: "verified"
  },
  {
    slug: "t-agb-automatic-gun",
    name: "T-AGB Automatic Gun",
    brand: "Binks",
    subCategory: "Súng/đầu phun sơn công nghiệp",
    industries: [],
    shortDesc: "Súng phun tự động nhỏ gọn dùng air cap DeVilbiss chất lượng cao, dài 92mm nặng 270-570g, thân nhôm hoặc inox tùy chọn, tip/kim tiêu chuẩn inox (có bản nitralloy/carbide chống mài mòn), phù hợp mọi máy phun và robot tự động.",
    img: "https://binks.canto.com/direct/image/b5e6podokl7812pgf6gvbmmo3m/xEAyaWMgHHlXUS6vl6LpSJ3YPeY/m3000/800",
    specs: {
      "Kích thước": "Dài 92 mm",
      "Trọng lượng": "270 – 570 g (tùy vật liệu thân)",
      "Thân súng": "Nhôm hoặc inox",
      "Tip/kim": "Inox tiêu chuẩn, có bản nitralloy/tungsten carbide",
      "Áp suất khí xy-lanh khuyến nghị": "≥ 3.5 kgf/cm²"
    },
    specConfidence: "verified"
  },
  {
    slug: "t-aghv-hvlp-automatic-gun",
    name: "T-AGHV HVLP Automatic Gun",
    brand: "Binks",
    subCategory: "Súng/đầu phun sơn công nghiệp",
    industries: [],
    shortDesc: "Phiên bản HVLP của súng tự động nhỏ gọn T-AGB, đạt hiệu suất truyền sơn từ 65% trở lên dù áp khí trong cup chỉ 0.7 kgf/cm², cùng kích thước lắp đặt với T-AGB nên không cần thay đồ gá hay dạy lại chương trình robot.",
    img: "https://binks.canto.com/direct/image/irker4ebit3c56b1rrp074p41r/Oj8FWYRAlfwArax7O_EggQcaWpc/m3000/800",
    specs: {
      "Hiệu suất truyền sơn": "≥ 65%",
      "Áp khí trong cup": "0.7 kgf/cm²",
      "Kích thước lắp đặt": "Tương thích trực tiếp với T-AGB",
      "Thân/tip/kim": "Inox, thân mạ vàng"
    },
    specConfidence: "verified"
  },
  {
    slug: "t-aghv-lvmp-automatic-gun",
    name: "T-AGHV LVMP Automatic Gun",
    brand: "Binks",
    subCategory: "Súng/đầu phun sơn công nghiệp",
    industries: [],
    shortDesc: "Súng phun tự động LVMP hiệu suất truyền sơn cao hơn cả súng thường lẫn HVLP nhờ tốc độ khí ra thấp ở khoảng cách phun 200mm; đạt hiệu suất 74% so với 55% (HVLP) và 44% (súng thường) trong cùng điều kiện thử.",
    img: "https://binks.canto.com/direct/image/elnnnv775h45re5glgb3dig84m/SDH1dhy9MfPX369w5Mrhthrygts/m3000/800",
    specs: {
      "Hiệu suất truyền sơn (LVMP)": "74% (so với HVLP 55%, súng thường 44%)",
      "Áp khí đầu súng": "0.25 MPa",
      "Áp khí tại air cap": "0.20 MPa",
      "Khí tiêu thụ": "280 L/phút",
      "Tốc độ khí ra": "16 m/giây"
    },
    specConfidence: "verified"
  },
  {
    slug: "t-agpv_automatic_gun",
    name: "T-AGPV Automatic Gun",
    brand: "Binks",
    subCategory: "Súng/đầu phun sơn công nghiệp",
    industries: [],
    shortDesc: "Súng phun tự động LVMP với cơ chế tháo lắp bán vòng xoay không cần dụng cụ (xoay tay cầm 180°), giảm mạnh thời gian dừng chuyền khi thay/bảo trì; giảm vật liệu 20-35% so với súng conventional và HVLP.",
    img: "https://binks.canto.com/direct/image/962s2l9je16iledt4neja7d267/AJREaiwnLp7qoYzNaRU6f2f7GY0/m3000/800",
    specs: {
      "Cơ chế tháo lắp": "Bán vòng xoay 180°, không cần dụng cụ",
      "Áp suất sơn tối đa": "0.7 MPa",
      "Áp suất khí phun sương": "0.1 – 0.4 MPa",
      "Áp suất vận hành": "0.35 – 0.5 MPa",
      "Trọng lượng": "345 g (điều khiển từ xa) / 370 g (chỉnh tay)",
      "Tiết kiệm vật liệu (LVMP)": "20 – 35% so với súng conventional"
    },
    specConfidence: "verified"
  },
  {
    slug: "trophy-aa1600-aa4400",
    name: "Trophy AA1600 & AA4400 Manual Gun",
    brand: "Binks",
    subCategory: "Súng/đầu phun sơn công nghiệp",
    industries: [],
    shortDesc: "Súng phun cầm tay air-assisted airless dòng Trophy AA, thân rèn cứng cáp bền bỉ, air cap AA10+ cùng seal đầu tip thay thế được, lực bóp cò thấp giảm mỏi tay và nguy cơ RSI; phù hợp sơn/verni/mực/keo gốc nước hoặc dung môi.",
    img: "https://binks.canto.com/direct/image/i0ccbi8ot10c19veppg1at0s73/TyLPNVsc1prTowvrPjPmFEIxCc8/m320/800",
    specs: {
      "Model": "AA1600, AA4400",
      "Kiểu": "Air-Assisted Airless, cầm tay",
      "Thân súng": "Rèn cứng, phủ Quick-Clean",
      "Air cap": "Dòng AA10+",
      "Vật liệu phù hợp": "Sơn/verni gốc nước hoặc dung môi, mực, keo dán, sealer"
    },
    specConfidence: "partial"
  },
  {
    slug: "trophy-series-automatic-guns",
    name: "Trophy Automatic Guns",
    brand: "Binks",
    subCategory: "Súng/đầu phun sơn công nghiệp",
    industries: [],
    shortDesc: "Súng phun tự động cao cấp dòng Trophy, kiểm soát toàn diện áp khí phun sương, khí bên hông, lưu lượng sơn và mẫu phun; có 3 công nghệ HVLP/LVMP/Conventional, nhiều lựa chọn tip inox/nhựa/carbide tùy vật liệu.",
    img: "https://binks.canto.com/direct/image/394dc9seal73l985veqv3prp7l/YkzJftlDTpqbG7AXF3JLSY2EHsY/m800/800",
    specs: {
      "Công nghệ phun": "HVLP, LVMP, Conventional",
      "Tip/nozzle": "Inox (bền hơn 20%), nhựa hoặc tungsten carbide",
      "Kiểm soát": "Áp khí phun sương, khí bên hông (side port), lưu lượng sơn, mẫu phun"
    },
    specConfidence: "partial"
  },
  {
    slug: "trophy-full-size-touch-up-gun",
    name: "Trophy Full-Size & Touch Up Gun",
    brand: "Binks",
    subCategory: "Súng/đầu phun sơn công nghiệp",
    industries: [],
    shortDesc: "Súng phun cầm tay cao cấp dòng Trophy cho pressure/gravity/suction, thiết kế nhẹ ergonomic cho độ thoải mái và kiểm soát vượt trội; có bản HVLP (xanh)/LVMP Trans-Tech (xanh lá)/Conventional (nâu), ít chi tiết giảm bảo trì.",
    img: "https://binks.canto.com/direct/image/8a1iu9prel4vd2k0ji4i7e2466/WIt39BSOven_RTn-xGEWdQ3e_cQ/m320/800",
    specs: {
      "Kiểu cấp sơn": "Pressure, Gravity, Suction",
      "Công nghệ phun (mã màu)": "HVLP (xanh dương), LVMP/Trans-Tech (xanh lá), Conventional (nâu)",
      "Đặc điểm": "Ít chi tiết hơn, giảm bảo trì và chi phí vận hành"
    },
    specConfidence: "partial"
  }
];
