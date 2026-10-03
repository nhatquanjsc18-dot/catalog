(function () {
  var list = [
  {
    slug: "prona-rl-90",
    name: "Súng phun sơn dặm vá nhỏ RL-90",
    brand: "Prona",
    subCategory: "Súng phun sơn cầm tay",
    industries: [],
    shortDesc: "Thân súng thiết kế công thái học, kiểm soát thao tác tốt hơn.",
    img: "",
    specs: {
      "Khoảng cách phun": "150mm (5.91in)",
      "Độ nhớt sơn": "20±1 second/ RV-2",
      "Đầu nối khí/sơn": "1/4 PF/NPF"
    },
    specConfidence: "partial"
  },
  {
    slug: "prona-rl-80f",
    name: "Súng phun sơn dặm vá nhỏ RL-80F",
    brand: "Prona",
    subCategory: "Súng phun sơn cầm tay",
    industries: [],
    shortDesc: "Thân súng thiết kế công thái học, kiểm soát thao tác tốt hơn.",
    img: "",
    specs: {
      "Khoảng cách phun": "150mm (5.91in)",
      "Độ nhớt sơn": "20±1 second/ RV-2",
      "Đầu nối khí/sơn": "1/4 PF/NPF"
    },
    specConfidence: "partial"
  },
  {
    slug: "prona-rl-50",
    name: "Súng phun sơn dặm vá, sửa chữa RL-50",
    brand: "Prona",
    subCategory: "Súng phun sơn cầm tay",
    industries: [],
    shortDesc: "Chụp khí được gia công tiện-phay độ chính xác cao, cho khả năng tán sương đều và ổn định.",
    img: "",
    specs: {
      "Khoảng cách phun": "100-200mm(3.94-7.87in)",
      "Độ nhớt sơn": "20±1 second/RV-2",
      "Đầu nối khí/sơn": "1/4 PF/NPF"
    },
    specConfidence: "partial"
  },
  {
    slug: "prona-rg-3l",
    name: "Súng phun sơn dặm vá, sửa chữa RG-3L",
    brand: "Prona",
    subCategory: "Súng phun sơn cầm tay",
    industries: [],
    shortDesc: "Chụp khí được gia công tiện-phay độ chính xác cao, cho khả năng tán sương đều và ổn định.",
    img: "",
    specs: {
      "Khoảng cách phun": "200mm(7.87in)",
      "Độ nhớt sơn": "20±1 second/RV-2",
      "Đầu nối khí/sơn": "1/4 PF/NPF"
    },
    specConfidence: "partial"
  },
  {
    slug: "prona-r-53",
    name: "Súng phun sơn dặm vá nhỏ R-53",
    brand: "Prona",
    subCategory: "Súng phun sơn cầm tay",
    industries: [],
    shortDesc: "Thân súng thiết kế công thái học, kiểm soát thao tác tốt hơn.",
    img: "",
    specs: {
      "Khoảng cách phun": "100-150mm (3.9-5.91in)",
      "Độ nhớt sơn": "20±1 second/ RV-2",
      "Đầu nối khí/sơn": "1/4 PF/NPF"
    },
    specConfidence: "partial"
  },
  {
    slug: "prona-r-51",
    name: "Súng phun sơn dặm vá, sửa chữa R-51",
    brand: "Prona",
    subCategory: "Súng phun sơn cầm tay",
    industries: [],
    shortDesc: "Chụp khí được gia công tiện-phay độ chính xác cao, cho khả năng tán sương đều và ổn định.",
    img: "",
    specs: {
      "Khoảng cách phun": "150mm(5.91in)",
      "Độ nhớt sơn": "20±1 second/RV-2",
      "Đầu nối khí/sơn": "1/4 PF/NPF"
    },
    specConfidence: "partial"
  },
  {
    slug: "prona-r-3",
    name: "Súng phun sơn dặm vá, sửa chữa R-3",
    brand: "Prona",
    subCategory: "Súng phun sơn cầm tay",
    industries: [],
    shortDesc: "Chụp khí được gia công tiện-phay độ chính xác cao, cho khả năng tán sương đều và ổn định. Cả kim phun và béc phun làm bằng thép không gỉ.",
    img: "",
    specs: {
      "Khoảng cách phun": "150mm(5.91in)",
      "Độ nhớt sơn": "20±1 second/RV-2",
      "Đầu nối khí/sơn": "1/4 PF/NPF"
    },
    specConfidence: "partial"
  },
  {
    slug: "prona-r-2",
    name: "Súng phun sơn dặm vá, sửa chữa R-2",
    brand: "Prona",
    subCategory: "Súng phun sơn cầm tay",
    industries: [],
    shortDesc: "Chụp khí được gia công tiện-phay độ chính xác cao, cho khả năng tán sương đều và ổn định. Cả kim phun và béc phun làm bằng thép không gỉ.",
    img: "",
    specs: {
      "Khoảng cách phun": "150mm(5.91in)",
      "Độ nhớt sơn": "20±1 second/RV-2",
      "Đầu nối khí/sơn": "1/4 PF/NPF"
    },
    specConfidence: "partial"
  },
  {
    slug: "prona-r-21v",
    name: "Súng phun sơn đa năng R-21V",
    brand: "Prona",
    subCategory: "Súng phun sơn cầm tay",
    industries: [],
    shortDesc: "Kim phun và béc phun đã qua xử lý nhiệt, độ cứng cao, chống mài mòn, bền bỉ.",
    img: "",
    specs: {
      "Khoảng cách phun": "200mm(7.87in)",
      "Độ nhớt sơn": "20±1 second/RV-2",
      "Áp suất sơn": "0.8kg/cm2",
      "Đầu nối khí/sơn": "1/4 PF/NPF"
    },
    specConfidence: "partial"
  },
  {
    slug: "prona-r-21x",
    name: "Súng phun sơn đa năng R-21X",
    brand: "Prona",
    subCategory: "Súng phun sơn cầm tay",
    industries: [],
    shortDesc: "Kim phun và béc phun đã qua xử lý nhiệt, độ cứng cao, chống mài mòn, bền bỉ.",
    img: "",
    specs: {
      "Khoảng cách phun": "200mm (7.87in)",
      "Độ nhớt sơn": "20±1 second/ RV-2",
      "Áp suất sơn": "0.8kg/m2",
      "Đầu nối khí/sơn": "1/4 PF/NPF"
    },
    specConfidence: "partial"
  },
  {
    slug: "prona-r-21xn",
    name: "Súng phun sơn đa năng R-21XN",
    brand: "Prona",
    subCategory: "Súng phun sơn cầm tay",
    industries: [],
    shortDesc: "Kim phun và béc phun đã qua xử lý nhiệt, độ cứng cao, chống mài mòn, bền bỉ.",
    img: "",
    specs: {
      "Khoảng cách phun": "200mm (7.87in)",
      "Độ nhớt sơn": "20±1 second/ RV-2",
      "Áp suất sơn": "0.8kg/m2",
      "Đầu nối khí/sơn": "1/4 PF/NPF"
    },
    specConfidence: "partial"
  },
  {
    slug: "prona-r-71",
    name: "Súng phun sơn đa năng R-71",
    brand: "Prona",
    subCategory: "Súng phun sơn cầm tay",
    industries: [],
    shortDesc: "Kim phun và béc phun đã qua xử lý nhiệt, độ cứng cao, chống mài mòn, bền bỉ.",
    img: "",
    specs: {
      "Khoảng cách phun": "200mm (7.87in)",
      "Độ nhớt sơn": "20±1 second/ RV-2",
      "Áp suất sơn": "0.8kg/cm2",
      "Đầu nối khí/sơn": "1/4 PF/NPF"
    },
    specConfidence: "partial"
  },
  {
    slug: "prona-r-71n",
    name: "Súng phun sơn đa năng R-71N",
    brand: "Prona",
    subCategory: "Súng phun sơn cầm tay",
    industries: [],
    shortDesc: "Kim phun và béc phun đã qua xử lý nhiệt, độ cứng cao, chống mài mòn, bền bỉ.",
    img: "",
    specs: {
      "Khoảng cách phun": "200mm (7.87in)",
      "Độ nhớt sơn": "20±1 second/ RV-2",
      "Áp suất sơn": "0.8kg/cm2",
      "Đầu nối khí/sơn": "1/4 PF/NPF"
    },
    specConfidence: "partial"
  },
  {
    slug: "prona-r-77",
    name: "Súng phun sơn đa năng R-77",
    brand: "Prona",
    subCategory: "Súng phun sơn cầm tay",
    industries: [],
    shortDesc: "Kim phun và béc phun đã qua xử lý nhiệt, độ cứng cao, chống mài mòn, bền bỉ.",
    img: "",
    specs: {
      "Khoảng cách phun": "250mm (9.84in)",
      "Độ nhớt sơn": "20±1 second/RV-2",
      "Áp suất sơn": "0.8kg/cm2. Fluid inlet: 3/8 PF/NPF",
      "Đầu nối khí/sơn": "1/4 PF/NPF"
    },
    specConfidence: "partial"
  },
  {
    slug: "prona-r-77n",
    name: "Súng phun sơn đa năng R-77N",
    brand: "Prona",
    subCategory: "Súng phun sơn cầm tay",
    industries: [],
    shortDesc: "Kim phun và béc phun đã qua xử lý nhiệt, độ cứng cao, chống mài mòn, bền bỉ.",
    img: "",
    specs: {
      "Khoảng cách phun": "250mm (9.84in)",
      "Độ nhớt sơn": "20±1 second/RV-2",
      "Áp suất sơn": "0.8kg/cm2. Fluid inlet: 3/8 PF/NPF",
      "Đầu nối khí/sơn": "1/4 PF/NPF"
    },
    specConfidence: "partial"
  },
  {
    slug: "prona-r-101",
    name: "Súng phun sơn đa năng R-101",
    brand: "Prona",
    subCategory: "Súng phun sơn cầm tay",
    industries: [],
    shortDesc: "Áp suất khí điều chỉnh tự do trong khoảng 2,5–3,0 bar, giảm hao sơn và bắn tóe. Tia phun rộng dạng quạt, tán sương mịn, hiệu suất chuyển sơn cao, thi công nhanh.",
    img: "",
    specs: {
      "Khoảng cách phun": "200mm (7.87in)",
      "Độ nhớt sơn": "20±1 second/ RV-2",
      "Áp suất sơn": "0.8kg/cm2",
      "Đầu nối khí/sơn": "1/4PF/NPF"
    },
    specConfidence: "partial"
  },
  {
    slug: "prona-r-200",
    name: "Súng phun sơn đa năng R-200",
    brand: "Prona",
    subCategory: "Súng phun sơn cầm tay",
    industries: [],
    shortDesc: "Áp suất khí điều chỉnh tự do trong khoảng 2,5–3,0 bar, giảm hao sơn và bắn tóe. Tia phun rộng dạng quạt, tán sương mịn, hiệu suất chuyển sơn cao, thi công nhanh.",
    img: "",
    specs: {
      "Khoảng cách phun": "250mm (9.84in)",
      "Độ nhớt sơn": "20±1 second RV-2",
      "Áp suất sơn": "0.8kg/cm2. Fluid inlet: 3/8 PF/NPF",
      "Đầu nối khí/sơn": "1/4 PF/NPF"
    },
    specConfidence: "partial"
  },
  {
    slug: "prona-r-400",
    name: "Súng phun sơn đa năng R-400",
    brand: "Prona",
    subCategory: "Súng phun sơn cầm tay",
    industries: [],
    shortDesc: "Tán sương mịn hơn, tia phun đồng đều, giảm sơn bay thừa ở áp suất khí thấp.",
    img: "",
    specs: {
      "Độ nhớt sơn": "20±1 second RV-2. Fluid inlet: M16X1.5P",
      "Đầu nối khí/sơn": "1/4 PF/NPF"
    },
    specConfidence: "partial"
  },
  {
    slug: "prona-r-410",
    name: "Súng phun sơn đa năng R-410",
    brand: "Prona",
    subCategory: "Súng phun sơn cầm tay",
    industries: [],
    shortDesc: "Thân súng nhôm rèn nhẹ giúp kiểm soát thao tác tốt hơn; bề mặt xử lý anod hóa và phun cát, dễ vệ sinh, bảo trì.",
    img: "",
    specs: {
      "Khoảng cách phun": "250mm(9.84in)",
      "Độ nhớt sơn": "20±1 second/RV-2. Fluid inlet: M16X1.5P",
      "Đầu nối khí/sơn": "1/4 PF/NPF"
    },
    specConfidence: "partial"
  },
  {
    slug: "prona-r-413",
    name: "Súng phun sơn đa năng R-413",
    brand: "Prona",
    subCategory: "Súng phun sơn cầm tay",
    industries: [],
    shortDesc: "Thân súng nhôm rèn nhẹ giúp kiểm soát thao tác tốt hơn; bề mặt xử lý anod hóa và phun cát, dễ vệ sinh, bảo trì.",
    img: "",
    specs: {
      "Khoảng cách phun": "250mm(9.84in)",
      "Độ nhớt sơn": "20±1 second/RV-2. Fluid inlet: M16X1.5P",
      "Đầu nối khí/sơn": "1/4 PF/NPF"
    },
    specConfidence: "partial"
  },
  {
    slug: "prona-r-711",
    name: "Súng phun sơn đa năng R-711",
    brand: "Prona",
    subCategory: "Súng phun sơn cầm tay",
    industries: [],
    shortDesc: "Thân súng bằng nhôm rèn nhẹ, cầm thoải mái; bề mặt xử lý anod hóa, dễ vệ sinh và bảo trì.",
    img: "",
    specs: {
      "Khoảng cách phun": "200mm(7.87in)",
      "Độ nhớt sơn": "20±1 second/RV-2，",
      "Áp suất sơn": "0.8kg/cm²",
      "Đầu nối khí/sơn": "1/4 PF/NPF"
    },
    specConfidence: "partial"
  },
  {
    slug: "prona-r-715",
    name: "Súng phun sơn đa năng R-715",
    brand: "Prona",
    subCategory: "Súng phun sơn cầm tay",
    industries: [],
    shortDesc: "Thân súng nhôm rèn nhẹ giúp kiểm soát thao tác tốt hơn; bề mặt xử lý anod hóa và phun cát, dễ vệ sinh, bảo trì.",
    img: "",
    specs: {
      "Khoảng cách phun": "200mm(7.87in)",
      "Độ nhớt sơn": "20±1 second/RV-2",
      "Áp suất sơn": "0.8kg/cm²",
      "Đầu nối khí/sơn": "1/4 PF/NPF"
    },
    specConfidence: "partial"
  },
  {
    slug: "prona-r-771",
    name: "Súng phun sơn đa năng R-771",
    brand: "Prona",
    subCategory: "Súng phun sơn cầm tay",
    industries: [],
    shortDesc: "Thân súng bằng nhôm rèn nhẹ, cầm thoải mái; bề mặt xử lý anod hóa, dễ vệ sinh và bảo trì.",
    img: "",
    specs: {
      "Khoảng cách phun": "250mm(9.84in)",
      "Độ nhớt sơn": "20±1 second/RV-2",
      "Áp suất sơn": "0.8kg/cm². Fluid inlet: 3/8 PF/NPF",
      "Đầu nối khí/sơn": "1/4 PF/NPF"
    },
    specConfidence: "partial"
  },
  {
    slug: "prona-r-775",
    name: "Súng phun sơn đa năng R-775",
    brand: "Prona",
    subCategory: "Súng phun sơn cầm tay",
    industries: [],
    shortDesc: "Thân súng nhôm rèn nhẹ giúp kiểm soát thao tác tốt hơn; bề mặt xử lý anod hóa và phun cát, dễ vệ sinh, bảo trì.",
    img: "",
    specs: {
      "Khoảng cách phun": "250mm(9.84in)",
      "Độ nhớt sơn": "20±1 second/RV-2",
      "Áp suất sơn": "0.8kg/cm². Fluid inlet: 3/8 PF/NPF",
      "Đầu nối khí/sơn": "1/4 PF/NPF"
    },
    specConfidence: "partial"
  },
  {
    slug: "prona-r-77-b",
    name: "Súng phun sơn có khuấy R-77-B",
    brand: "Prona",
    subCategory: "Súng phun sơn cầm tay",
    industries: [],
    shortDesc: "Thân súng nhôm rèn nhẹ giúp kiểm soát thao tác tốt hơn; bề mặt xử lý anod hóa và phun cát, dễ vệ sinh, bảo trì.",
    img: "",
    specs: {
      "Khoảng cách phun": "250mm(9.84in)",
      "Độ nhớt sơn": "20±1 second/RV-2",
      "Áp suất sơn": "0.8kg/cm². Fluid inlet: 3/8 PF/NPF",
      "Đầu nối khí/sơn": "1/4 PF/NPF"
    },
    specConfidence: "partial"
  },
  {
    slug: "prona-r-413-b",
    name: "Súng phun sơn có khuấy R-413-B",
    brand: "Prona",
    subCategory: "Súng phun sơn cầm tay",
    industries: [],
    shortDesc: "Thân súng nhôm rèn nhẹ giúp kiểm soát thao tác tốt hơn; bề mặt xử lý anod hóa và phun cát, dễ vệ sinh, bảo trì.",
    img: "",
    specs: {
      "Khoảng cách phun": "250mm(9.84in)",
      "Độ nhớt sơn": "20±1 second/RV-2. Fluid inlet: M16X1.5P",
      "Đầu nối khí/sơn": "1/4 PF/NPF"
    },
    specConfidence: "partial"
  },
  {
    slug: "prona-r-410-dp",
    name: "Súng phun sơn có bình tăng áp R-410-DP",
    brand: "Prona",
    subCategory: "Súng phun sơn cầm tay",
    industries: [],
    shortDesc: "Súng phun kiểu trọng lực có bình tăng áp, áp suất trong cốc điều chỉnh qua van tiết lưu; phù hợp sơn độ nhớt cao, tăng lưu lượng phun, nâng cao hiệu suất.",
    img: "",
    specs: {
      "Khoảng cách phun": "250mm(9.84in)",
      "Độ nhớt sơn": "20±1 second/RV-2. Fluid inlet: M16X1.5P",
      "Đầu nối khí/sơn": "1/4 PF/NPF"
    },
    specConfidence: "partial"
  },
  {
    slug: "prona-r-410-ip",
    name: "Súng phun sơn có bình tăng áp R-410-IP",
    brand: "Prona",
    subCategory: "Súng phun sơn cầm tay",
    industries: [],
    shortDesc: "Súng phun kiểu trọng lực có bình tăng áp, áp suất trong cốc điều chỉnh qua van tiết lưu; phù hợp sơn độ nhớt cao, tăng lưu lượng phun, nâng cao hiệu suất.",
    img: "",
    specs: {
      "Khoảng cách phun": "250mm(9.84in)",
      "Độ nhớt sơn": "20±1 second/RV-2. Fluid inlet: M16X1.5P",
      "Đầu nối khí/sơn": "1/4 PF/NPF"
    },
    specConfidence: "partial"
  },
  {
    slug: "prona-sgd-r77",
    name: "Súng phun sơn đa sắc (Water-in-water) SGD-R77",
    brand: "Prona",
    subCategory: "Súng phun sơn cầm tay",
    industries: [],
    shortDesc: "Súng phun sơn đa sắc (water-in-water) dùng trong nhà máy sơn nội, ngoại thất; phù hợp sơn latex, sơn kim loại, sơn fluorocarbon, sơn đa sắc, sơn giả đá — tán sương đều, tạo hiệu ứng vân đá đẹp.",
    img: "",
    specs: {
      "Đầu nối khí/sơn": "1/4 PF/NPF"
    },
    specConfidence: "partial"
  },
  {
    slug: "prona-r-210-1h",
    name: "Súng phun keo/chất kết dính 2 thành phần R-210-1H",
    brand: "Prona",
    subCategory: "Súng phun sơn cầm tay",
    industries: [],
    shortDesc: "Trộn ngoài súng (external mixing), giảm hiện tượng đông cứng dung dịch trong súng, ống dẫn, bình chứa và bồn chứa.",
    img: "",
    specs: {
      "Khoảng cách phun": "200-250mm. Paint viscosity: 20±1seconds/RV-2",
      "Áp suất sơn": "0.8kg/cm². The main fluid intake: 3/8PF/NPF. Vice fluid intake: Ø4XØ6mm. Air intake: 1/4 PF/NPF"
    },
    specConfidence: "partial"
  },
  {
    slug: "prona-r-210-2h",
    name: "Súng phun keo/chất kết dính 2 thành phần R-210-2H",
    brand: "Prona",
    subCategory: "Súng phun sơn cầm tay",
    industries: [],
    shortDesc: "Trộn ngoài súng (external mixing), giảm hiện tượng đông cứng dung dịch trong súng, ống dẫn, bình chứa và bồn chứa.",
    img: "",
    specs: {
      "Khoảng cách phun": "200-250mm. Paint viscosity: 20±1 seconds/RV-2",
      "Áp suất sơn": "0.8kg/cm². The main fluid intake: 3/8 PF/NPF. Vice fluid intake: Ø4XØ6mm. Air intake: 1/4 PF/NPF"
    },
    specConfidence: "partial"
  },
  {
    slug: "prona-mrs2-2r",
    name: "Súng phun sơn nano hai đầu MRS2-2R",
    brand: "Prona",
    subCategory: "Súng phun sơn cầm tay",
    industries: [],
    shortDesc: "Phù hợp làm đồ thủ công mỹ nghệ, trang trí, sơn mâm xe cá nhân hóa, sơn nano lên vỏ điện thoại/máy tính, thay thế mạ điện truyền thống bằng phun nano.",
    img: "",
    specs: {
      "Khoảng cách phun": "100-150mm (3. 94-5.91in)",
      "Độ nhớt sơn": "9±1 second/ RV-2"
    },
    specConfidence: "partial"
  },
  {
    slug: "prona-r-77-zp",
    name: "Súng phun sơn chống mài mòn R-77-ZP",
    brand: "Prona",
    subCategory: "Súng phun sơn cầm tay",
    industries: [],
    shortDesc: "Cả kim phun và béc phun đều làm bằng thép không gỉ qua xử lý đặc biệt. Phù hợp phun men gốm gốc nước hoặc sơn phủ dễ hao mòn.",
    img: "",
    specs: {
      "Khoảng cách phun": "250mm(9.84in). Fluid inlet: 3/8PF/NPF",
      "Đầu nối khí/sơn": "1/4 PF/NPF"
    },
    specConfidence: "partial"
  },
  {
    slug: "prona-r-200-zp",
    name: "Súng phun sơn chống mài mòn R-200-ZP",
    brand: "Prona",
    subCategory: "Súng phun sơn cầm tay",
    industries: [],
    shortDesc: "Cả kim phun và béc phun đều làm bằng thép không gỉ qua xử lý đặc biệt. Phù hợp phun men gốm gốc nước hoặc sơn phủ dễ hao mòn.",
    img: "",
    specs: {
      "Khoảng cách phun": "250mm(9.84in). Fluid inlet: 3/8PF/NPF",
      "Đầu nối khí/sơn": "1/4 PF/NPF"
    },
    specConfidence: "partial"
  },
  {
    slug: "prona-sgd-71",
    name: "Súng phun sơn tạo vân tán màu (Dishevel) SGD-71",
    brand: "Prona",
    subCategory: "Súng phun sơn cầm tay",
    industries: [],
    shortDesc: "Với kiểu phun bắn tóe (spattering): dùng chụp khí #1, độ nhớt sơn 20 giây/RV-2, áp suất sơn 0,3 kg/cm², áp suất khí 0,5–0,7 kg/cm².",
    img: "",
    specs: {
      "Độ nhớt sơn": "20 second/RV-2, fluid pressure: 0.3kg/cm2 and air pressure: 0.5-0.7 kg/cm2. ♦For misting pattern, use cap#2",
      "Đầu nối khí/sơn": "1/4 PF/NPF"
    },
    specConfidence: "partial"
  },
  {
    slug: "prona-mrs",
    name: "Súng phun sơn tách khuôn MRS",
    brand: "Prona",
    subCategory: "Súng phun sơn cầm tay",
    industries: [],
    shortDesc: "Phù hợp phun chất tách khuôn, dung dịch kích hoạt hydrographics (in chuyển nước), dung dịch phản ứng bạc, và dùng làm chất bôi trơn trong công nghiệp. Cả kim phun và béc phun làm bằng thép không gỉ.",
    img: "",
    specs: {
      "Khoảng cách phun": "100-150mm (3.94-5.9in)",
      "Độ nhớt sơn": "9±1 second/ RV-2",
      "Áp suất sơn": "0 8kg/cm2"
    },
    specConfidence: "partial"
  },
  {
    slug: "prona-mrs2",
    name: "Súng phun sơn tách khuôn MRS2",
    brand: "Prona",
    subCategory: "Súng phun sơn cầm tay",
    industries: [],
    shortDesc: "Phù hợp phun chất tách khuôn, dung dịch kích hoạt hydrographics (in chuyển nước), dung dịch phản ứng bạc, và dùng làm chất bôi trơn trong công nghiệp. Cả kim phun và béc phun làm bằng thép không gỉ.",
    img: "",
    specs: {
      "Khoảng cách phun": "100-150mm (3.94-5.9in)",
      "Độ nhớt sơn": "9±1 second/ RV-2",
      "Áp suất sơn": "0 8kg/cm2"
    },
    specConfidence: "partial"
  },
  {
    slug: "prona-mrs2-l90",
    name: "Súng phun sơn tách khuôn, ống dài góc 90° MRS2-L90°",
    brand: "Prona",
    subCategory: "Súng phun sơn cầm tay",
    industries: [],
    shortDesc: "Phù hợp phun chất tách khuôn, dung dịch kích hoạt hydrographics (in chuyển nước), dung dịch phản ứng bạc, và dùng làm chất bôi trơn trong công nghiệp. Cả kim phun và béc phun làm bằng thép không gỉ.",
    img: "",
    specs: {
      "Khoảng cách phun": "100-150mm (3.94-5.9in)",
      "Độ nhớt sơn": "9±1 second/ RV-2",
      "Áp suất sơn": "0 8kg/cm2"
    },
    specConfidence: "partial"
  },
  {
    slug: "prona-r-210ac",
    name: "Súng phun sơn hỗ trợ khí nén (Air-Assisted) R-210AC",
    brand: "Prona",
    subCategory: "Súng phun sơn cầm tay",
    industries: [],
    shortDesc: "Súng phun hỗ trợ khí, kết hợp công nghệ phun khí truyền thống và phun không khí (airless); tán sương chính xác, tạo bề mặt sơn đều, hiệu suất chuyển sơn cao, chất lượng phun mịn.",
    img: "",
    specs: {
      "Nguồn": "prona.com.cn"
    },
    specConfidence: "partial"
  },
  {
    slug: "prona-r-2200ac",
    name: "Súng phun sơn hỗ trợ khí nén (Air-Assisted) R-2200AC",
    brand: "Prona",
    subCategory: "Súng phun sơn cầm tay",
    industries: [],
    shortDesc: "Súng phun hỗ trợ khí, kết hợp công nghệ phun khí truyền thống và phun không khí (airless); tán sương chính xác, tạo bề mặt sơn đều, hiệu suất chuyển sơn cao, chất lượng phun mịn.",
    img: "",
    specs: {
      "Nguồn": "prona.com.cn"
    },
    specConfidence: "partial"
  },
  {
    slug: "prona-r-871",
    name: "Súng phun sơn độ nhớt cao R-871",
    brand: "Prona",
    subCategory: "Súng phun sơn cầm tay",
    industries: [],
    shortDesc: "Thân súng thiết kế công thái học, đường nét cò súng đẹp, cầm nắm thoải mái.",
    img: "",
    specs: {
      "Khoảng cách phun": "200-300mm (7.87-11.81in). Fluid inlet: M16X1.5P",
      "Đầu nối khí/sơn": "1/4 PF/NPF"
    },
    specConfidence: "partial"
  },
  {
    slug: "prona-r-2003",
    name: "Súng phun sơn độ nhớt cao R-2003",
    brand: "Prona",
    subCategory: "Súng phun sơn cầm tay",
    industries: [],
    shortDesc: "Thân súng thiết kế công thái học, đường nét cò súng đẹp, cầm nắm thoải mái.",
    img: "",
    specs: {
      "Khoảng cách phun": "250mm (7.8mm). Fluid inlet: M16X1.5P",
      "Đầu nối khí/sơn": "1/4 PF/NPF"
    },
    specConfidence: "partial"
  },
  {
    slug: "prona-r-4300",
    name: "Súng phun sơn sửa xe áp thấp R-4300",
    brand: "Prona",
    subCategory: "Súng phun sơn cầm tay",
    industries: [],
    shortDesc: "Tán sương mịn, lưu lượng sơn ổn định, độ bám tốt, giảm sơn bay thừa.",
    img: "",
    specs: {
      "Khoảng cách phun": "200mm (7.87in)",
      "Độ nhớt sơn": "20±1 second/RV-2. Fluid inlet: M16X1.5P",
      "Đầu nối khí/sơn": "1/4 PF/NPF"
    },
    specConfidence: "partial"
  },
  {
    slug: "prona-r-4300-p",
    name: "Súng phun sơn sửa xe áp thấp R-4300-P",
    brand: "Prona",
    subCategory: "Súng phun sơn cầm tay",
    industries: [],
    shortDesc: "Tán sương mịn, lưu lượng sơn ổn định, độ bám tốt, giảm sơn bay thừa.",
    img: "",
    specs: {
      "Khoảng cách phun": "200-250mm(7.87-9.84in)",
      "Độ nhớt sơn": "20±1 second/RV-2. Fluid inlet: 3/8PF/NPF",
      "Đầu nối khí/sơn": "1/4PF/NPF"
    },
    specConfidence: "partial"
  },
  {
    slug: "prona-r-4303",
    name: "Súng phun sơn sửa xe áp thấp R-4303",
    brand: "Prona",
    subCategory: "Súng phun sơn cầm tay",
    industries: [],
    shortDesc: "Tán sương mịn, lưu lượng sơn ổn định, độ bám tốt, giảm sơn bay thừa.",
    img: "",
    specs: {
      "Khoảng cách phun": "200mm (7.87in)",
      "Độ nhớt sơn": "20±1 second/RV-2. Fluid inlet: M16X1.5P",
      "Đầu nối khí/sơn": "1/4 PF/NPF"
    },
    specConfidence: "partial"
  },
  {
    slug: "prona-r-4600",
    name: "Súng phun sơn sửa xe áp thấp R-4600",
    brand: "Prona",
    subCategory: "Súng phun sơn cầm tay",
    industries: [],
    shortDesc: "Tán sương mịn, lưu lượng sơn ổn định, độ bám tốt, giảm sơn bay thừa.",
    img: "",
    specs: {
      "Khoảng cách phun": "200mm (7.87in)",
      "Độ nhớt sơn": "20±1 second/RV-2. Fluid inlet: M16X1.5P",
      "Đầu nối khí/sơn": "1/4 PF/NPF"
    },
    specConfidence: "partial"
  },
  {
    slug: "prona-r-4630",
    name: "Súng phun sơn sửa xe áp thấp R-4630",
    brand: "Prona",
    subCategory: "Súng phun sơn cầm tay",
    industries: [],
    shortDesc: "Tán sương mịn, lưu lượng sơn ổn định, độ bám tốt, giảm sơn bay thừa.",
    img: "",
    specs: {
      "Khoảng cách phun": "200mm (7.87in)",
      "Độ nhớt sơn": "20±1 second/RV-2. Fluid inlet: M16X1.5P",
      "Đầu nối khí/sơn": "1/4 PF/NPF"
    },
    specConfidence: "partial"
  },
  {
    slug: "prona-rl-101p",
    name: "Súng phun sơn áp thấp RL-101P",
    brand: "Prona",
    subCategory: "Súng phun sơn cầm tay",
    industries: [],
    shortDesc: "Thân súng nhẹ hơn giúp thao tác dễ dàng, cò súng bấm êm và thoải mái hơn. Áp suất khí tại chụp khí dưới 0,7 bar, độ bám dính tốt, tia phun rộng, phù hợp phun sơn kim loại.",
    img: "",
    specs: {
      "Khoảng cách phun": "200mm (7.87in)",
      "Độ nhớt sơn": "20±1 second/ RV-2.Operating pressure: 0.8kg/cm2",
      "Đầu nối khí/sơn": "1/4 PF/NPF"
    },
    specConfidence: "partial"
  },
  {
    slug: "prona-rl-200p",
    name: "Súng phun sơn áp thấp RL-200P",
    brand: "Prona",
    subCategory: "Súng phun sơn cầm tay",
    industries: [],
    shortDesc: "Thân súng nhẹ hơn giúp thao tác dễ dàng, cò súng bấm êm và thoải mái hơn. Áp suất khí tại chụp khí dưới 0,7 bar, độ bám dính tốt, tia phun rộng, phù hợp phun sơn kim loại.",
    img: "",
    specs: {
      "Khoảng cách phun": "200mm (7.87in)",
      "Độ nhớt sơn": "20±1 second/ RV-2. Operating pressure: 0.8kg/cm2",
      "Đầu nối khí/sơn": "1/4 PF/NPF"
    },
    specConfidence: "partial"
  },
  {
    slug: "prona-r-430",
    name: "Súng phun sơn sửa xe áp thấp R-430",
    brand: "Prona",
    subCategory: "Súng phun sơn cầm tay",
    industries: [],
    shortDesc: "Tán sương mịn, lưu lượng sơn ổn định, độ bám tốt, giảm sơn bay thừa.",
    img: "",
    specs: {
      "Khoảng cách phun": "200mm (7.87in)",
      "Độ nhớt sơn": "20±1 second/RV-2. Fluid inlet: M16X1.5P",
      "Đầu nối khí/sơn": "1/4 PF/NPF"
    },
    specConfidence: "partial"
  },
  {
    slug: "prona-rh-80",
    name: "Bút phun sơn nghệ thuật (Airbrush) RH-80",
    brand: "Prona",
    subCategory: "Súng phun sơn cầm tay",
    industries: [],
    shortDesc: "Thiết kế cơ khí công thái học (ergonomic), cầm nắm thoải mái, chất liệu nhôm rèn cường độ cao, không có lỗ rỗ bên trong.",
    img: "",
    specs: {
      "Khoảng cách phun": "100-150mm(3.9-5.9in)",
      "Đầu nối khí/sơn": "1/4 PF/NPF"
    },
    specConfidence: "partial"
  },
  {
    slug: "prona-rh-90",
    name: "Bút phun sơn nghệ thuật (Airbrush) RH-90",
    brand: "Prona",
    subCategory: "Súng phun sơn cầm tay",
    industries: [],
    shortDesc: "Thiết kế cơ khí công thái học (ergonomic), cầm nắm thoải mái, chất liệu nhôm rèn cường độ cao, không có lỗ rỗ bên trong.",
    img: "",
    specs: {
      "Khoảng cách phun": "100-150mm(3.9-5.9in)",
      "Đầu nối khí/sơn": "1/4 PF/NPF"
    },
    specConfidence: "partial"
  },
  {
    slug: "prona-rh-a",
    name: "Bút phun sơn nghệ thuật (Airbrush) RH-A",
    brand: "Prona",
    subCategory: "Súng phun sơn cầm tay",
    industries: [],
    shortDesc: "Phù hợp phun diện tích nhỏ.",
    img: "",
    specs: {
      "Nguồn": "prona.com.cn"
    },
    specConfidence: "partial"
  },
  {
    slug: "prona-rh-ap",
    name: "Bút phun sơn nghệ thuật (Airbrush) RH-AP",
    brand: "Prona",
    subCategory: "Súng phun sơn cầm tay",
    industries: [],
    shortDesc: "Phù hợp phun diện tích nhỏ.",
    img: "",
    specs: {
      "Nguồn": "prona.com.cn"
    },
    specConfidence: "partial"
  },
  {
    slug: "prona-rh-b",
    name: "Bút phun sơn nghệ thuật (Airbrush) RH-B",
    brand: "Prona",
    subCategory: "Súng phun sơn cầm tay",
    industries: [],
    shortDesc: "Phù hợp phun diện tích nhỏ.",
    img: "",
    specs: {
      "Nguồn": "prona.com.cn"
    },
    specConfidence: "partial"
  },
  {
    slug: "prona-rh-bp",
    name: "Bút phun sơn nghệ thuật (Airbrush) RH-BP",
    brand: "Prona",
    subCategory: "Súng phun sơn cầm tay",
    industries: [],
    shortDesc: "Phù hợp phun diện tích nhỏ.",
    img: "",
    specs: {
      "Nguồn": "prona.com.cn"
    },
    specConfidence: "partial"
  },
  {
    slug: "prona-rh-bs",
    name: "Bút phun sơn nghệ thuật (Airbrush) RH-BS",
    brand: "Prona",
    subCategory: "Súng phun sơn cầm tay",
    industries: [],
    shortDesc: "Phù hợp phun diện tích nhỏ.",
    img: "",
    specs: {
      "Nguồn": "prona.com.cn"
    },
    specConfidence: "partial"
  },
  {
    slug: "prona-rh-c",
    name: "Bút phun sơn nghệ thuật (Airbrush) RH-C",
    brand: "Prona",
    subCategory: "Súng phun sơn cầm tay",
    industries: [],
    shortDesc: "Phù hợp phun diện tích nhỏ.",
    img: "",
    specs: {
      "Nguồn": "prona.com.cn"
    },
    specConfidence: "partial"
  },
  {
    slug: "prona-rh-cp",
    name: "Bút phun sơn nghệ thuật (Airbrush) RH-CP",
    brand: "Prona",
    subCategory: "Súng phun sơn cầm tay",
    industries: [],
    shortDesc: "Phù hợp phun diện tích nhỏ.",
    img: "",
    specs: {
      "Nguồn": "prona.com.cn"
    },
    specConfidence: "partial"
  },
  {
    slug: "prona-rh-gp",
    name: "Bút phun sơn nghệ thuật (Airbrush) RH-GP",
    brand: "Prona",
    subCategory: "Súng phun sơn cầm tay",
    industries: [],
    shortDesc: "Phù hợp phun diện tích nhỏ.",
    img: "",
    specs: {
      "Nguồn": "prona.com.cn"
    },
    specConfidence: "partial"
  },
  {
    slug: "prona-rh-gp2",
    name: "Bút phun sơn nghệ thuật (Airbrush) RH-GP2",
    brand: "Prona",
    subCategory: "Súng phun sơn cầm tay",
    industries: [],
    shortDesc: "Phù hợp phun diện tích nhỏ.",
    img: "",
    specs: {
      "Nguồn": "prona.com.cn"
    },
    specConfidence: "partial"
  },
  {
    slug: "prona-rh-l100",
    name: "Bút phun sơn nghệ thuật (Airbrush) RH-L100",
    brand: "Prona",
    subCategory: "Súng phun sơn cầm tay",
    industries: [],
    shortDesc: "Phù hợp phun diện tích nhỏ.",
    img: "",
    specs: {
      "Nguồn": "prona.com.cn"
    },
    specConfidence: "partial"
  },
  {
    slug: "prona-rh-rap",
    name: "Bút phun sơn nghệ thuật (Airbrush) RH-RAP",
    brand: "Prona",
    subCategory: "Súng phun sơn cầm tay",
    industries: [],
    shortDesc: "Phù hợp phun diện tích nhỏ.",
    img: "",
    specs: {
      "Nguồn": "prona.com.cn"
    },
    specConfidence: "partial"
  },
  {
    slug: "prona-rg-7",
    name: "Súng thổi bụi khí nén RG-7",
    brand: "Prona",
    subCategory: "Súng phun sơn cầm tay",
    industries: [],
    shortDesc: "Phù hợp sơn màu chi tiết nhỏ, vẽ hình xăm giả, tranh nghệ thuật, v.v.",
    img: "",
    specs: {
      "Nguồn": "prona.com.cn"
    },
    specConfidence: "partial"
  },
  {
    slug: "prona-lr-10",
    name: "Súng phun sơn nối dài có định hướng LR-10",
    brand: "Prona",
    subCategory: "Súng phun sơn cầm tay",
    industries: [],
    shortDesc: "Kim phun, béc phun và đường dẫn sơn đều bằng thép không gỉ, kín khít tốt, chống ăn mòn.",
    img: "",
    specs: {
      "Độ nhớt sơn": "20±1 second/RV-2",
      "Áp suất sơn": "0.8kg/cm²",
      "Đầu nối khí/sơn": "hose size: 1/4 PF/NPF"
    },
    specConfidence: "partial"
  },
  {
    slug: "prona-r103-px",
    name: "Súng phun sơn nối dài, phun mặt phẳng và thành trong R103-PX",
    brand: "Prona",
    subCategory: "Súng phun sơn cầm tay",
    industries: [],
    shortDesc: "Súng phun nối dài phù hợp phun ở khoảng cách xa hoặc bề mặt khó tiếp cận; béc phun thiết kế riêng cho sơn có độ bám cao, hiệu suất cao. Cả kim phun và béc phun làm bằng thép không gỉ, phù hợp phun sơn gốc nước.",
    img: "",
    specs: {
      "Độ nhớt sơn": "20±1 second/RV-2",
      "Áp suất sơn": "0.8kg/cm²",
      "Đầu nối khí/sơn": "hose size: 1/4 PF/NPF"
    },
    specConfidence: "partial"
  },
  {
    slug: "prona-lr-18",
    name: "Súng phun sơn nối dài đa năng LR-18",
    brand: "Prona",
    subCategory: "Súng phun sơn cầm tay",
    industries: [],
    shortDesc: "Đầu súng xoay được 180°, cụm ống dẫn khí xoay được 360°. Kim phun, béc phun và đường dẫn sơn đều bằng thép không gỉ, kín khít tốt, chống ăn mòn.",
    img: "",
    specs: {
      "Độ nhớt sơn": "20±1 second/RV-2",
      "Áp suất sơn": "0.8kg/cm²",
      "Đầu nối khí/sơn": "hose size: 1/4 PF/NPF"
    },
    specConfidence: "partial"
  },
  {
    slug: "prona-lr-18-50",
    name: "Súng phun sơn nối dài đa năng LR-18(50)",
    brand: "Prona",
    subCategory: "Súng phun sơn cầm tay",
    industries: [],
    shortDesc: "Đầu súng xoay được 180°, cụm ống dẫn khí xoay được 360°. Kim phun, béc phun và đường dẫn sơn đều bằng thép không gỉ, kín khít tốt, chống ăn mòn.",
    img: "",
    specs: {
      "Độ nhớt sơn": "20±1 second/RV-2",
      "Áp suất sơn": "0.8kg/cm²",
      "Đầu nối khí/sơn": "hose size: 1/4 PF/NPF"
    },
    specConfidence: "partial"
  },
  {
    slug: "prona-r1218",
    name: "Súng phun sơn thành mỏng, phun trong lòng ống R1218",
    brand: "Prona",
    subCategory: "Súng phun sơn cầm tay",
    industries: [],
    shortDesc: "Tán sương mịn. Cả kim phun và béc phun làm bằng thép không gỉ, phù hợp phun sơn gốc nước.",
    img: "",
    specs: {
      "Khoảng cách phun": "150-200mm(5.90-7.87in)",
      "Độ nhớt sơn": "20±1 seconds/RV-2",
      "Áp suất sơn": "0.8kg/cm²",
      "Đầu nối khí/sơn": "1/4 PF/NPF"
    },
    specConfidence: "partial"
  },
  {
    slug: "prona-r-1218-90",
    name: "Súng phun sơn ống nhỏ, đầu góc 90° R-1218-90°",
    brand: "Prona",
    subCategory: "Súng phun sơn cầm tay",
    industries: [],
    shortDesc: "Tán sương mịn. Cả kim phun và béc phun làm bằng thép không gỉ, phù hợp phun sơn gốc nước.",
    img: "",
    specs: {
      "Khoảng cách phun": "150-200mm(5.90-7.87in)",
      "Độ nhớt sơn": "20±1 seconds/RV-2",
      "Áp suất sơn": "0.8kg/cm²",
      "Đầu nối khí/sơn": "1/4 PF/NPF"
    },
    specConfidence: "partial"
  },
  {
    slug: "prona-r-103-l",
    name: "Súng phun sơn nối dài, phun mặt phẳng và thành trong R-103-L",
    brand: "Prona",
    subCategory: "Súng phun sơn cầm tay",
    industries: [],
    shortDesc: "Súng phun nối dài phù hợp phun ở khoảng cách xa hoặc bề mặt khó tiếp cận; béc phun thiết kế riêng cho sơn có độ bám cao, hiệu suất cao. Cả kim phun và béc phun làm bằng thép không gỉ, phù hợp phun sơn gốc nước.",
    img: "",
    specs: {
      "Độ nhớt sơn": "20±1 second/RV-2",
      "Áp suất sơn": "0.5-0.8kg/cm²",
      "Đầu nối khí/sơn": "hose size:1/4 PF/NPF"
    },
    specConfidence: "partial"
  },
  {
    slug: "prona-r-103-ps",
    name: "Súng phun sơn nối dài, phun thành trong R-103-PS",
    brand: "Prona",
    subCategory: "Súng phun sơn cầm tay",
    industries: [],
    shortDesc: "Súng phun nối dài phù hợp phun ở khoảng cách xa hoặc bề mặt khó tiếp cận; béc phun thiết kế riêng cho sơn có độ bám cao, hiệu suất cao. Cả kim phun và béc phun làm bằng thép không gỉ, phù hợp phun sơn gốc nước.",
    img: "",
    specs: {
      "Độ nhớt sơn": "20±1 second/RV-2",
      "Áp suất sơn": "0.5-0.8kg/cm²",
      "Đầu nối khí/sơn": "hose size: 1/4 PF/NPF"
    },
    specConfidence: "partial"
  }
  ];
  window.PRONA_PRODUCTS = (window.PRONA_PRODUCTS || []).concat(list);
})();
