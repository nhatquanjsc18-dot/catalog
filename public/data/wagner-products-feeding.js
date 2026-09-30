// Wagner — Fluid Handling category (bơm cấp liệu, thùng áp lực)
// Source: https://www.wagner-group.com/en/industry/products/liquid-coating/feeding/
// 37 sản phẩm — đã đối chiếu đủ số lượng link /product/ trên trang danh mục nguồn.
// Ảnh lấy nguyên văn từ thuộc tính src trong DOM trang chi tiết từng sản phẩm (domain
// cdn.wagner-group.com/fileadmin/pim/...), không gõ tay lại.
var WAGNER_FEEDING_PRODUCTS = [
  {
    slug: "dp-1-40", name: "DP 1-40", brand: "Wagner",
    subCategory: "Hệ thống cấp liệu",
    industries: ["construction", "wood"],
    shortDesc: "Bơm màng kép khí nén cho ứng dụng airspray áp suất thấp, phù hợp cấp sơn trực tiếp cho 1-2 súng phun hoặc tích hợp vào hệ trộn/đổi màu, không cần bộ điều áp vật liệu riêng.",
    img: "https://cdn.wagner-group.com/fileadmin/pim/1200x1200/WAGNER_DP1-40_dynL_ID0738_WA24018INTPIC02_99863.jpg",
    specs: {
      "Lĩnh vực ứng dụng": "Sơn kim loại, Sơn nhựa, Sơn gỗ",
      "Kỹ thuật phun": "Airspray",
      "Vật liệu xử lý được": "Gốc nước, Gốc dung môi, Vật liệu mài mòn, dễ đứt gãy cấu trúc, nhạy ẩm",
      "Vật liệu tiếp xúc": "Nhôm mạ niken, Thép không gỉ, POM (polyacetal)",
      "Kích thước": "192 x 165 x 265 mm",
      "Trọng lượng": "3.2 kg",
      "Đầu ra vật liệu": "I G 3/8''",
      "Đầu nối khí nén": "M G 1/4''",
      "Áp suất khí đầu vào": "1-6 bar",
      "Áp suất vật liệu tối đa": "6 bar",
      "Lưu lượng mỗi hành trình kép": "40 cm³",
      "Mức ồn tối đa": "62 dB(A)",
      "Tỷ số truyền (:1)": "1:1",
      "Nhiệt độ vật liệu": "5-60 °C"
    }, specConfidence: "verified"
  },
  {
    slug: "protec-60-240-270-bar", name: "PROTEC 60-240 (270 bar)", brand: "Wagner",
    subCategory: "Hệ thống cấp liệu",
    industries: ["construction", "wood"],
    shortDesc: "Bơm piston áp lực cao, thân thép không gỉ, chuyên dùng cho ứng dụng AirCoat lên tới 200 bar, 12 l/phút; phù hợp hệ tự động 6 súng phun trở lên như dây chuyền sơn phẳng sản xuất hàng loạt.",
    img: "https://cdn.wagner-group.com/fileadmin/pim/1200x1200/PIC_EQU_PROTEC_60-240_34537.jpg",
    specs: {
      "Lĩnh vực ứng dụng": "Sơn kim loại, Sơn gỗ",
      "Kỹ thuật phun": "AirCoat",
      "Vật liệu xử lý được": "Gốc nước, Gốc dung môi, Vật liệu mài mòn, nhạy ẩm",
      "Vật liệu tiếp xúc": "Thép không gỉ, Crôm cứng, Carbide, PTFE, PE",
      "Trọng lượng": "58 kg",
      "Đầu nối khí nén": "I G 1''",
      "Áp suất khí đầu vào": "2.5-4.5 bar",
      "Áp suất vật liệu tối đa": "270 bar",
      "Lưu lượng mỗi hành trình kép": "240 cm³",
      "Lưu lượng mỗi phút": "14.4 l/min",
      "Tốc độ hành trình tối đa": "60 lần/phút",
      "Mức ồn ở 6 bar": "81 dB(A)",
      "Tỷ số truyền (:1)": "60:1",
      "Độ pH vật liệu": "3.5-9",
      "Nhiệt độ vật liệu": "5-80 °C"
    }, specConfidence: "verified"
  },
  {
    slug: "color-change-block", name: "Color change block", brand: "Wagner",
    subCategory: "Hệ thống cấp liệu",
    industries: ["construction", "wood"],
    shortDesc: "Khối van đổi màu cấu hình linh hoạt cho các ứng dụng áp suất thấp trên hệ robot/tự động cần đổi màu thường xuyên, tích hợp dễ dàng vào cánh tay robot hoặc hệ trục tuyến tính.",
    img: "https://cdn.wagner-group.com/fileadmin/pim/1200x1200/WAGNER_CCB_6x2-flushing-valve_dyn-R_ID0885_5472x3648_WA24019INTPIC01_99492.jpg",
    specs: {
      "Kích thước": "43.5 x 39.5 x 53.65 mm",
      "Trọng lượng": "205 g",
      "Áp suất vật liệu tối đa": "22 bar",
      "Mức ồn tối đa": "65 dB(A)",
      "Độ pH vật liệu": "3.5-9",
      "Nhiệt độ vật liệu": "5-80 °C",
      "Độ nhớt vật liệu": "20-340 mPas"
    }, specConfidence: "verified"
  },
  {
    slug: "unica-3-125", name: "Unica", brand: "Wagner",
    subCategory: "Hệ thống cấp liệu",
    industries: ["construction", "wood"],
    shortDesc: "Bơm màng kép khí nén có khuếch đại áp suất, cấp vật liệu độ nhớt cao qua đường ống dài trong hệ tuần hoàn hoặc ứng dụng airspray đầu nhánh, tỷ lệ khuếch đại 3:1.",
    img: "https://cdn.wagner-group.com/fileadmin/pim/1200x1200/WAGNER_UNICA-3-125_dynL_IDILD0913_WA23100INTPIC01_84864.jpg",
    specs: {
      "Lĩnh vực ứng dụng": "Sơn kim loại, Sơn nhựa, Sơn gỗ",
      "Kỹ thuật phun": "Airspray",
      "Vật liệu xử lý được": "Gốc dung môi, Gốc nước, Vật liệu mài mòn, nhạy ẩm",
      "Vật liệu tiếp xúc": "Thép không gỉ, PTFE",
      "Đầu ra vật liệu": "I G 3/4''",
      "Đầu nối khí nén": "I G 1/2''",
      "Áp suất khí đầu vào": "1.5-6 bar",
      "Áp suất vật liệu tối đa": "21 bar"
    }, specConfidence: "verified"
  },
  {
    slug: "leopard-26-200", name: "Leopard 26-200", brand: "Wagner",
    subCategory: "Hệ thống cấp liệu",
    industries: ["construction", "wood"],
    shortDesc: "Bơm piston áp lực cao, thân thép không gỉ, chuyên dùng cho ứng dụng AirCoat lên tới 200 bar, 12 l/phút; phù hợp hệ tự động 6 súng phun trở lên.",
    img: "https://cdn.wagner-group.com/fileadmin/pim/1200x1200/PIC_EQU_Leopard-48-110_32189.jpg",
    specs: {
      "Lĩnh vực ứng dụng": "Sơn kim loại, Sơn gỗ",
      "Kỹ thuật phun": "AirCoat",
      "Vật liệu xử lý được": "Gốc nước, Gốc dung môi, Vật liệu mài mòn, nhạy ẩm",
      "Vật liệu tiếp xúc": "Thép không gỉ, Crôm cứng, Carbide, PTFE, PE",
      "Trọng lượng": "38 kg",
      "Đầu ra vật liệu": "M M24x1.5",
      "Đầu nối khí nén": "I G 1/2''",
      "Áp suất khí đầu vào": "2.5-8 bar",
      "Áp suất vật liệu tối đa": "200 bar",
      "Lưu lượng mỗi hành trình kép": "200 cm³",
      "Lưu lượng mỗi phút": "12 l/min",
      "Tốc độ hành trình tối đa": "60 lần/phút",
      "Mức ồn ở 6 bar": "74 dB(A)",
      "Tỷ số truyền (:1)": "26:1",
      "Độ pH vật liệu": "3.5-9",
      "Nhiệt độ vật liệu": "5-80 °C"
    }, specConfidence: "partial",
    specNote: "Ảnh và một phần thông số trên trang nguồn wagner-group.com hiển thị trùng với Leopard 48-110 (có thể là lỗi hiển thị của chính trang nguồn); các trị số tỷ số truyền/áp suất lấy đúng theo bảng Technical data hiển thị riêng cho Leopard 26-200."
  },
  {
    slug: "evomotion-40-15s", name: "EvoMotion 40-15", brand: "Wagner",
    subCategory: "Hệ thống cấp liệu",
    industries: ["construction", "wood"],
    shortDesc: "Bơm piston nhỏ gọn cho ứng dụng airless/AirCoat áp lực rất cao tới 320 bar, thích hợp cấp liệu cho các trạm sơn đơn lẻ trong công nghiệp kim loại và gỗ.",
    img: "https://cdn.wagner-group.com/fileadmin/pim/1200x1200/PIC_EQU_EM-40-15S_30918.jpg",
    specs: {
      "Lĩnh vực ứng dụng": "Sơn kim loại, Sơn gỗ",
      "Kỹ thuật phun": "Airless, AirCoat",
      "Vật liệu xử lý được": "Gốc nước, Gốc dung môi",
      "Vật liệu tiếp xúc": "Thép không gỉ, PE, PTFE, Crôm cứng",
      "Trọng lượng": "9 kg",
      "Đầu ra vật liệu": "M NPS 1/4''",
      "Áp suất khí đầu vào": "2.5-8 bar",
      "Áp suất vật liệu tối đa": "320 bar",
      "Lưu lượng tối đa": "0.9 l/min",
      "Lưu lượng mỗi hành trình kép": "15 cm³",
      "Tốc độ hành trình tối đa": "60 lần/phút",
      "Mức ồn ở 6 bar": "74 dB(A)",
      "Tỷ số truyền (:1)": "40:1",
      "Độ pH vật liệu": "3.5-9",
      "Nhiệt độ vật liệu": "5-80 °C"
    }, specConfidence: "verified"
  },
  {
    slug: "evomotion-20-30", name: "EvoMotion 20-30", brand: "Wagner",
    subCategory: "Hệ thống cấp liệu",
    industries: ["construction", "wood"],
    shortDesc: "Bơm piston phục vụ 1 súng phun AirCoat, áp lực tối đa 160 bar, phù hợp cấp keo dán dạng nhũ tương và sơn công nghiệp gỗ/kim loại.",
    img: "https://cdn.wagner-group.com/fileadmin/pim/1200x1200/PIC_EQU_EM-20-30_30913.jpg",
    specs: {
      "Lĩnh vực ứng dụng": "Sơn kim loại, Sơn gỗ",
      "Kỹ thuật phun": "AirCoat",
      "Vật liệu xử lý được": "Gốc nước, Gốc dung môi, keo dán dạng nhũ tương",
      "Vật liệu tiếp xúc": "Thép không gỉ, PE, PTFE, Crôm cứng",
      "Số súng phun tối đa": "1",
      "Trọng lượng": "11 kg",
      "Đầu ra vật liệu": "M NPS 1/4''",
      "Áp suất khí đầu vào": "2.5-8 bar",
      "Áp suất vật liệu tối đa": "160 bar",
      "Lưu lượng tối đa": "1.8 l/min",
      "Lưu lượng mỗi hành trình kép": "30 cm³",
      "Tốc độ hành trình tối đa": "60 lần/phút",
      "Mức ồn ở 6 bar": "74 dB(A)",
      "Tỷ số truyền (:1)": "20:1",
      "Độ pH vật liệu": "3.5-9",
      "Nhiệt độ vật liệu": "5-80 °C"
    }, specConfidence: "verified"
  },
  {
    slug: "wildcat-10-70", name: "Wildcat 10-70", brand: "Wagner",
    subCategory: "Hệ thống cấp liệu",
    industries: ["construction", "wood"],
    shortDesc: "Bơm piston thân thép không gỉ cho ứng dụng airspray, áp suất vật liệu tối đa 40 bar, phù hợp sơn kim loại, nhựa, gỗ và các ứng dụng dán keo.",
    img: "https://cdn.wagner-group.com/fileadmin/pim/1200x1200/PIC_EQU_Wildcat-10-70_left_66804.jpg",
    specs: {
      "Lĩnh vực ứng dụng": "Sơn kim loại, Sơn nhựa, Sơn gỗ, dán keo",
      "Kỹ thuật phun": "Airspray",
      "Vật liệu xử lý được": "Gốc nước, Gốc dung môi, Vật liệu mài mòn, nhạy ẩm",
      "Vật liệu tiếp xúc": "Thép không gỉ, Crôm cứng, Carbide, PTFE, PE",
      "Trọng lượng": "17 kg",
      "Đầu ra vật liệu": "M M24x1.5",
      "Đầu nối khí nén": "I G 1/2''",
      "Áp suất khí đầu vào": "2.5-5 bar",
      "Áp suất vật liệu tối đa": "40 bar",
      "Lưu lượng mỗi hành trình kép": "70 cm³",
      "Lưu lượng mỗi phút": "4.2 l/min",
      "Tốc độ hành trình tối đa": "60 lần/phút",
      "Mức ồn ở 6 bar": "74 dB(A)",
      "Tỷ số truyền (:1)": "10:1",
      "Độ pH vật liệu": "3.5-9",
      "Nhiệt độ vật liệu": "5-80 °C"
    }, specConfidence: "verified"
  },
  {
    slug: "wildcat-18-40", name: "Wildcat 18-40", brand: "Wagner",
    subCategory: "Hệ thống cấp liệu",
    industries: ["construction", "wood"],
    shortDesc: "Bơm piston thân thép không gỉ cho ứng dụng AirCoat, áp suất tối đa 144 bar, phù hợp sơn công nghiệp gỗ/kim loại kể cả vật liệu 2K trộn sẵn.",
    img: "https://cdn.wagner-group.com/fileadmin/pim/1200x1200/PIC_EQU_Wildcat-18-40_left_66803.jpg",
    specs: {
      "Lĩnh vực ứng dụng": "Sơn kim loại, Sơn gỗ",
      "Kỹ thuật phun": "AirCoat",
      "Vật liệu xử lý được": "Gốc nước, Gốc dung môi, vật liệu 2K trộn sẵn, nhạy ẩm",
      "Vật liệu tiếp xúc": "Thép không gỉ, Crôm cứng, Carbide, PE, PTFE",
      "Trọng lượng": "15 kg",
      "Đầu ra vật liệu": "M M24x1.5",
      "Đầu nối khí nén": "I G 1/2''",
      "Áp suất khí đầu vào": "2.5-8 bar",
      "Áp suất vật liệu tối đa": "144 bar",
      "Lưu lượng mỗi hành trình kép": "40 cm³",
      "Lưu lượng mỗi phút": "2.4 l/min",
      "Tốc độ hành trình tối đa": "60 lần/phút",
      "Mức ồn ở 6 bar": "74 dB(A)",
      "Tỷ số truyền (:1)": "18:1",
      "Độ pH vật liệu": "3.5-9",
      "Nhiệt độ vật liệu": "5-80 °C"
    }, specConfidence: "verified"
  },
  {
    slug: "puma-21-110", name: "Puma 21-110", brand: "Wagner",
    subCategory: "Hệ thống cấp liệu",
    industries: ["construction", "wood"],
    shortDesc: "Bơm piston AirCoat áp suất tối đa 168 bar, lưu lượng 6.6 l/phút, thích hợp sơn gỗ/kim loại và ứng dụng dán keo cần lưu lượng lớn hơn.",
    img: "https://cdn.wagner-group.com/fileadmin/pim/1200x1200/PIC_EQU_Puma-21-110_left_66806.jpg",
    specs: {
      "Lĩnh vực ứng dụng": "Sơn kim loại, Sơn gỗ, dán keo",
      "Kỹ thuật phun": "AirCoat",
      "Vật liệu xử lý được": "Gốc nước, Gốc dung môi, Vật liệu mài mòn, nhạy ẩm",
      "Vật liệu tiếp xúc": "Thép không gỉ, Crôm cứng, Carbide, PTFE, PE",
      "Trọng lượng": "28 kg",
      "Đầu ra vật liệu": "M M24x1.5",
      "Đầu nối khí nén": "I G 1/2''",
      "Áp suất khí đầu vào": "2.5-8 bar",
      "Áp suất vật liệu tối đa": "168 bar",
      "Lưu lượng mỗi hành trình kép": "110 cm³",
      "Lưu lượng mỗi phút": "6.6 l/min",
      "Tốc độ hành trình tối đa": "60 lần/phút",
      "Mức ồn ở 6 bar": "74 dB(A)",
      "Tỷ số truyền (:1)": "21:1",
      "Độ pH vật liệu": "3.5-9",
      "Nhiệt độ vật liệu": "5-80 °C"
    }, specConfidence: "verified"
  },
  {
    slug: "leopard-35-150", name: "Leopard 35-150", brand: "Wagner",
    subCategory: "Hệ thống cấp liệu",
    industries: ["construction", "wood", "marine"],
    shortDesc: "Bơm piston thép không gỉ cho airless/AirCoat áp suất tới 250 bar, lưu lượng 9 l/phút, dùng cho sơn kim loại, chống ăn mòn, gỗ và dán keo.",
    img: "https://cdn.wagner-group.com/fileadmin/pim/1200x1200/PIC_EQU_Leopard-35-150_left_66808.jpg",
    specs: {
      "Lĩnh vực ứng dụng": "Sơn kim loại, Sơn chống ăn mòn, Sơn gỗ, dán keo",
      "Kỹ thuật phun": "Airless, AirCoat",
      "Vật liệu xử lý được": "Gốc nước, Gốc dung môi, Vật liệu mài mòn, nhạy ẩm",
      "Vật liệu tiếp xúc": "Thép không gỉ, Crôm cứng, Carbide, PTFE, PE",
      "Trọng lượng": "36 kg",
      "Đầu ra vật liệu": "M M24x1.5",
      "Đầu nối khí nén": "I G 1/2''",
      "Áp suất khí đầu vào": "2.5-7.7 bar",
      "Áp suất vật liệu tối đa": "250 bar",
      "Lưu lượng mỗi hành trình kép": "150 cm³",
      "Lưu lượng mỗi phút": "9 l/min",
      "Tốc độ hành trình tối đa": "60 lần/phút",
      "Mức ồn ở 6 bar": "78 dB(A)",
      "Tỷ số truyền (:1)": "35:1",
      "Độ pH vật liệu": "3.5-9",
      "Nhiệt độ vật liệu": "5-80 °C"
    }, specConfidence: "verified"
  },
  {
    slug: "leopard-48-110", name: "Leopard 48-110", brand: "Wagner",
    subCategory: "Hệ thống cấp liệu",
    industries: ["construction", "wood", "marine"],
    shortDesc: "Bơm piston thép không gỉ áp lực cực cao tới 370 bar cho airless/AirCoat, phù hợp sơn kim loại và chống ăn mòn đòi hỏi áp suất lớn.",
    img: "https://cdn.wagner-group.com/fileadmin/pim/1200x1200/PIC_EQU_Leopard-48-110_left_35997.jpg",
    specs: {
      "Lĩnh vực ứng dụng": "Sơn kim loại, Sơn chống ăn mòn, Sơn gỗ",
      "Kỹ thuật phun": "Airless, AirCoat",
      "Vật liệu xử lý được": "Gốc nước, Gốc dung môi, Vật liệu mài mòn, nhạy ẩm",
      "Vật liệu tiếp xúc": "Thép không gỉ, Crôm cứng, PTFE, PE",
      "Trọng lượng": "36 kg",
      "Đầu ra vật liệu": "M M24x1.5",
      "Đầu nối khí nén": "I G 1/2''",
      "Áp suất khí đầu vào": "2.5-8 bar",
      "Áp suất vật liệu tối đa": "370 bar",
      "Lưu lượng mỗi hành trình kép": "110 cm³",
      "Lưu lượng mỗi phút": "6.6 l/min",
      "Tốc độ hành trình tối đa": "60 lần/phút",
      "Mức ồn ở 6 bar": "74 dB(A)",
      "Tỷ số truyền (:1)": "48:1",
      "Độ pH vật liệu": "3.5-9",
      "Nhiệt độ vật liệu": "5-80 °C"
    }, specConfidence: "verified"
  },
  {
    slug: "protec-60-240", name: "PROTEC 60-240", brand: "Wagner",
    subCategory: "Hệ thống cấp liệu",
    industries: ["construction", "wood", "marine"],
    shortDesc: "Bơm piston thép không gỉ cho ứng dụng airless áp lực cực cao tới 480 bar, dùng trong sơn kim loại và chống ăn mòn công nghiệp nặng.",
    img: "https://cdn.wagner-group.com/fileadmin/pim/1200x1200/PIC_EQU_PROTEC_60-240_34537.jpg",
    specs: {
      "Lĩnh vực ứng dụng": "Sơn kim loại, Sơn chống ăn mòn",
      "Kỹ thuật phun": "Airless",
      "Vật liệu xử lý được": "Gốc nước, Gốc dung môi, Vật liệu mài mòn, nhạy ẩm",
      "Vật liệu tiếp xúc": "Thép không gỉ, Crôm cứng, Carbide, PTFE, PE",
      "Trọng lượng": "58 kg",
      "Đầu ra vật liệu": "M M24x1.5",
      "Áp suất khí đầu vào": "2.5-8 bar",
      "Áp suất vật liệu tối đa": "480 bar",
      "Lưu lượng mỗi hành trình kép": "240 cm³",
      "Tốc độ hành trình tối đa": "60 lần/phút",
      "Mức ồn ở 6 bar": "81 dB(A)",
      "Tỷ số truyền (:1)": "60:1",
      "Độ pH vật liệu": "3.5-9",
      "Nhiệt độ vật liệu": "5-80 °C"
    }, specConfidence: "verified"
  },
  {
    slug: "protec-72-200", name: "PROTEC 72-200", brand: "Wagner",
    subCategory: "Hệ thống cấp liệu",
    industries: ["construction", "wood", "marine"],
    shortDesc: "Bơm piston thép không gỉ dòng PROTEC, tỷ số truyền 72:1, áp lực vật liệu tối đa 530 bar, phục vụ ứng dụng airless đòi hỏi áp suất rất cao.",
    img: "https://cdn.wagner-group.com/fileadmin/pim/1200x1200/PIC_EQU_PROTEC_60-240_34537.jpg",
    specs: {
      "Lĩnh vực ứng dụng": "Sơn kim loại, Sơn chống ăn mòn",
      "Kỹ thuật phun": "Airless",
      "Vật liệu xử lý được": "Gốc nước, Gốc dung môi, Vật liệu mài mòn, nhạy ẩm",
      "Vật liệu tiếp xúc": "Thép không gỉ, Crôm cứng, Carbide, PTFE, PE",
      "Trọng lượng": "58 kg",
      "Đầu ra vật liệu": "M M24x1.5",
      "Đầu nối khí nén": "I G 1''",
      "Áp suất khí đầu vào": "2.5-8 bar",
      "Áp suất vật liệu tối đa": "530 bar",
      "Lưu lượng mỗi hành trình kép": "200 cm³",
      "Lưu lượng mỗi phút": "12 l/min",
      "Tốc độ hành trình tối đa": "60 lần/phút",
      "Mức ồn ở 6 bar": "81 dB(A)",
      "Tỷ số truyền (:1)": "72:1",
      "Độ pH vật liệu": "3.5-9",
      "Nhiệt độ vật liệu": "5-80 °C"
    }, specConfidence: "partial",
    specNote: "Ảnh sản phẩm trên trang nguồn dùng chung file ảnh với PROTEC 60-240 (270 bar) — thông số kỹ thuật lấy đúng từ bảng riêng của PROTEC 72-200."
  },
  {
    slug: "protec-95-150", name: "PROTEC 95-150", brand: "Wagner",
    subCategory: "Hệ thống cấp liệu",
    industries: ["construction", "wood", "marine"],
    shortDesc: "Bơm piston thép không gỉ dòng PROTEC, tỷ số truyền 95:1, áp lực vật liệu tối đa 530 bar, dùng cho các ứng dụng airless đòi hỏi áp suất cực cao.",
    img: "https://cdn.wagner-group.com/fileadmin/pim/1200x1200/PIC_EQU_PROTEC_60-240_34537.jpg",
    specs: {
      "Lĩnh vực ứng dụng": "Sơn kim loại, Sơn chống ăn mòn",
      "Kỹ thuật phun": "Airless",
      "Vật liệu xử lý được": "Gốc nước, Gốc dung môi, Vật liệu mài mòn, nhạy ẩm",
      "Vật liệu tiếp xúc": "Thép không gỉ, Crôm cứng, Carbide, PTFE, PE",
      "Trọng lượng": "58 kg",
      "Đầu ra vật liệu": "M M24x1.5",
      "Đầu nối khí nén": "I G 1''",
      "Áp suất khí đầu vào": "2-5.6 bar",
      "Áp suất vật liệu tối đa": "530 bar",
      "Lưu lượng mỗi hành trình kép": "150 cm³",
      "Lưu lượng mỗi phút": "9 l/min",
      "Tốc độ hành trình tối đa": "60 lần/phút",
      "Mức ồn ở 6 bar": "81 dB(A)",
      "Tỷ số truyền (:1)": "95:1",
      "Độ pH vật liệu": "3.5-9",
      "Nhiệt độ vật liệu": "5-80 °C"
    }, specConfidence: "partial",
    specNote: "Ảnh sản phẩm trên trang nguồn dùng chung file ảnh với PROTEC 60-240 (270 bar) — thông số kỹ thuật lấy đúng từ bảng riêng của PROTEC 95-150."
  },
  {
    slug: "zip-eco-perfect-flow", name: "ZIP Eco Perfect Flow", brand: "Wagner",
    subCategory: "Hệ thống cấp liệu",
    industries: ["construction", "wood"],
    shortDesc: "Bơm màng kép khí nén cho airspray, có bộ điều chỉnh dòng chảy tinh (Perfect Flow) giúp áp suất vật liệu ổn định không mạch đập, cho lớp sơn chất lượng cao.",
    img: "https://cdn.wagner-group.com/fileadmin/pim/1200x1200/PIC_EQU_ZipEcoPF-Stand_30955.jpg",
    specs: {
      "Lĩnh vực ứng dụng": "Sơn kim loại, Sơn gỗ",
      "Kỹ thuật phun": "Airspray",
      "Vật liệu xử lý được": "Gốc nước, Gốc dung môi, Vật liệu mài mòn, nhạy ẩm",
      "Vật liệu tiếp xúc": "Nhôm, PE, Thép không gỉ",
      "Trọng lượng": "7.9 kg",
      "Đầu ra vật liệu": "M G 1/4''",
      "Đầu nối khí nén": "M G 1/4''",
      "Áp suất khí đầu vào": "1.5-8 bar",
      "Áp suất vật liệu tối đa": "8 bar",
      "Lưu lượng tự do tối đa": "28 l/min",
      "Lưu lượng mỗi hành trình kép": "62 cm³",
      "Mức ồn ở 6 bar": "73 dB(A)",
      "Tỷ số truyền (:1)": "1:1",
      "Nhiệt độ vật liệu": "4-90 °C"
    }, specConfidence: "verified"
  },
  {
    slug: "evomotion-5-60", name: "EvoMotion 5-60", brand: "Wagner",
    subCategory: "Hệ thống cấp liệu",
    industries: ["construction", "wood"],
    shortDesc: "Bơm piston nhỏ gọn cho airspray, tỷ số truyền thấp 5:1, phù hợp cấp liệu độ nhớt trung bình cho sơn kim loại, nhựa, gỗ và dán keo.",
    img: "https://cdn.wagner-group.com/fileadmin/pim/1200x1200/PIC_EQU_EM-5-60_30911.jpg",
    specs: {
      "Lĩnh vực ứng dụng": "Sơn kim loại, Sơn nhựa, Sơn gỗ, dán keo",
      "Kỹ thuật phun": "Airspray",
      "Vật liệu xử lý được": "Gốc nước, Gốc dung môi, Vật liệu mài mòn, nhạy ẩm",
      "Vật liệu tiếp xúc": "Thép không gỉ, Carbide, Crôm cứng, PTFE, PE",
      "Trọng lượng": "13 kg",
      "Đầu ra vật liệu": "M M24x1.5",
      "Áp suất khí đầu vào": "2.5-8 bar",
      "Áp suất vật liệu tối đa": "40 bar",
      "Lưu lượng tối đa": "3.6 l/min",
      "Lưu lượng mỗi hành trình kép": "60 cm³",
      "Tốc độ hành trình tối đa": "60 lần/phút",
      "Mức ồn ở 6 bar": "63 dB(A)",
      "Tỷ số truyền (:1)": "5:1",
      "Độ pH vật liệu": "3.5-9",
      "Nhiệt độ vật liệu": "5-80 °C"
    }, specConfidence: "verified"
  },
  {
    slug: "evomotion-5-125", name: "EvoMotion 5-125", brand: "Wagner",
    subCategory: "Hệ thống cấp liệu",
    industries: ["construction", "wood", "marine"],
    shortDesc: "Bơm piston lưu lượng lớn hơn trong dòng EvoMotion, phục vụ sơn kim loại, nhựa, chống ăn mòn và gỗ với áp suất vật liệu tối đa 40 bar.",
    img: "https://cdn.wagner-group.com/fileadmin/pim/1200x1200/PIC_EQU_EM-5-125_30912.jpg",
    specs: {
      "Lĩnh vực ứng dụng": "Sơn kim loại, Sơn nhựa, Sơn chống ăn mòn, Sơn gỗ",
      "Vật liệu xử lý được": "Gốc nước, Gốc dung môi, Vật liệu mài mòn, nhạy ẩm",
      "Vật liệu tiếp xúc": "Thép không gỉ, Thép carbon, PTFE, PA, PE",
      "Trọng lượng": "25 kg",
      "Đầu ra vật liệu": "I G 1/2''",
      "Áp suất khí đầu vào": "2-8 bar",
      "Áp suất vật liệu tối đa": "40 bar",
      "Lưu lượng mỗi hành trình kép": "125 cm³",
      "Lưu lượng mỗi phút": "7.5 l/min",
      "Tốc độ hành trình tối đa": "60 lần/phút",
      "Mức ồn ở 6 bar": "69 dB(A)",
      "Nhiệt độ vật liệu": "5-80 °C"
    }, specConfidence: "verified"
  },
  {
    slug: "puma-3-600", name: "Puma 3-600", brand: "Wagner",
    subCategory: "Hệ thống cấp liệu",
    industries: ["construction", "wood", "marine"],
    shortDesc: "Bơm piston lưu lượng lớn (600 cm³/hành trình), tỷ số truyền thấp 3:1, phù hợp cấp liệu số lượng lớn cho sơn kim loại, nhựa, chống ăn mòn và gỗ.",
    img: "https://cdn.wagner-group.com/fileadmin/pim/1200x1200/PIC_EQU_Puma-3-600_left_66812.jpg",
    specs: {
      "Lĩnh vực ứng dụng": "Sơn kim loại, Sơn nhựa, Sơn chống ăn mòn, Sơn gỗ",
      "Vật liệu xử lý được": "Gốc nước, Gốc dung môi, Vật liệu mài mòn, dễ đứt gãy cấu trúc, nhạy ẩm",
      "Vật liệu tiếp xúc": "Thép không gỉ, Crôm cứng, Carbide, PE, PTFE",
      "Trọng lượng": "35 kg",
      "Đầu ra vật liệu": "M M24x1.5",
      "Đầu nối khí nén": "I G 1/2''",
      "Áp suất khí đầu vào": "2.5-8 bar",
      "Áp suất vật liệu tối đa": "24 bar",
      "Lưu lượng mỗi hành trình kép": "600 cm³",
      "Lưu lượng mỗi phút": "30 l/min",
      "Tốc độ hành trình tối đa": "50 lần/phút",
      "Mức ồn ở 6 bar": "74 dB(A)",
      "Tỷ số truyền (:1)": "3:1",
      "Độ pH vật liệu": "3.5-9",
      "Nhiệt độ vật liệu": "5-80 °C"
    }, specConfidence: "verified"
  },
  {
    slug: "leopard-8-600", name: "Leopard 8-600", brand: "Wagner",
    subCategory: "Hệ thống cấp liệu",
    industries: ["construction", "wood", "marine"],
    shortDesc: "Bơm piston thép không gỉ lưu lượng lớn (600 cm³/hành trình) trong dòng Leopard, dùng cho sơn kim loại, nhựa, chống ăn mòn và gỗ khối lượng lớn.",
    img: "https://cdn.wagner-group.com/fileadmin/pim/1200x1200/PIC_EQU_Leopard-8-600_left_66813.jpg",
    specs: {
      "Lĩnh vực ứng dụng": "Sơn kim loại, Sơn nhựa, Sơn chống ăn mòn, Sơn gỗ",
      "Vật liệu xử lý được": "Gốc nước, Gốc dung môi, Vật liệu mài mòn, dễ đứt gãy cấu trúc, nhạy ẩm",
      "Vật liệu tiếp xúc": "Thép không gỉ, Crôm cứng, Carbide, PE, PTFE",
      "Trọng lượng": "43 kg",
      "Đầu ra vật liệu": "M M24x1.5",
      "Đầu nối khí nén": "I G 1/2''",
      "Áp suất khí đầu vào": "2.5-8 bar",
      "Lưu lượng mỗi hành trình kép": "600 cm³",
      "Lưu lượng mỗi phút": "30 l/min",
      "Tốc độ hành trình tối đa": "50 lần/phút",
      "Mức ồn ở 6 bar": "78 dB(A)",
      "Độ pH vật liệu": "3.5-9",
      "Nhiệt độ vật liệu": "5-80 °C",
      "Nhiệt độ hoạt động": "5-50 °C"
    }, specConfidence: "verified"
  },
  {
    slug: "zip52", name: "ZIP 52", brand: "Wagner",
    subCategory: "Hệ thống cấp liệu",
    industries: ["construction", "wood"],
    shortDesc: "Bơm màng kép khí nén nhỏ gọn (thân thép không gỉ), lưu lượng tự do 52 l/phút, dùng cấp liệu cho các trạm sơn airspray đơn giản.",
    img: "https://cdn.wagner-group.com/fileadmin/pim/1200x1200/PIC_EQU_Zip52-SSt-left_30944.jpg",
    specs: {
      "Vật liệu xử lý được": "Gốc nước, Gốc dung môi, Vật liệu mài mòn, dễ đứt gãy cấu trúc, nhạy ẩm",
      "Trọng lượng": "3.8 kg",
      "Đầu ra vật liệu": "I G 1/2''",
      "Đầu nối khí nén": "M G 1/4''",
      "Áp suất khí đầu vào": "1.5-8 bar",
      "Áp suất vật liệu tối đa": "8 bar",
      "Lưu lượng tự do tối đa": "52 l/min",
      "Lưu lượng mỗi hành trình kép": "108 cm³",
      "Mức ồn ở 6 bar": "73 dB(A)",
      "Tỷ số truyền (:1)": "1:1",
      "Nhiệt độ vật liệu": "4-90 °C"
    }, specConfidence: "verified"
  },
  {
    slug: "zip-52-finishing", name: "ZIP 52 Finishing", brand: "Wagner",
    subCategory: "Hệ thống cấp liệu",
    industries: ["construction", "wood"],
    shortDesc: "Bơm màng kép cho airspray kèm bộ điều áp vật liệu tích hợp lọc và ống hút, có sẵn bộ điều chỉnh khí phun cho 1 súng — thiết kế tối ưu cho vận hành dễ dàng.",
    img: "https://cdn.wagner-group.com/fileadmin/pim/1200x1200/PIC_EQU_Zip52-Stand_30946.jpg",
    specs: {
      "Lĩnh vực ứng dụng": "Sơn kim loại, Sơn nhựa, Sơn gỗ",
      "Kỹ thuật phun": "Airspray",
      "Vật liệu xử lý được": "Gốc nước, Gốc dung môi, Vật liệu mài mòn, dễ đứt gãy cấu trúc, nhạy ẩm",
      "Vật liệu tiếp xúc": "Nhôm, PE, Thép không gỉ",
      "Trọng lượng": "11.1 kg",
      "Đầu ra vật liệu": "M G 1/4''",
      "Đầu nối khí nén": "M G 1/4''",
      "Áp suất khí đầu vào": "1.5-8 bar",
      "Áp suất vật liệu tối đa": "8 bar",
      "Lưu lượng tự do tối đa": "52 l/min",
      "Lưu lượng mỗi hành trình kép": "108 cm³",
      "Mức ồn ở 6 bar": "73 dB(A)",
      "Tỷ số truyền (:1)": "1:1",
      "Độ pH vật liệu": "3.5-9",
      "Nhiệt độ vật liệu": "4-90 °C"
    }, specConfidence: "verified"
  },
  {
    slug: "zip-80", name: "ZIP 80", brand: "Wagner",
    subCategory: "Hệ thống cấp liệu",
    industries: ["construction", "wood"],
    shortDesc: "Bơm màng kép khí nén, lưu lượng tự do 80 l/phút, thân hợp kim nhôm/thép không gỉ, cấp liệu cho các ứng dụng airspray công suất trung bình.",
    img: "https://cdn.wagner-group.com/fileadmin/pim/1200x1200/PIC_EQU_Zip80-SSt-left_30951.jpg",
    specs: {
      "Vật liệu xử lý được": "Gốc nước, Gốc dung môi, Vật liệu mài mòn, dễ đứt gãy cấu trúc, nhạy ẩm",
      "Vật liệu tiếp xúc": "Nhôm, PTFE, Thép không gỉ",
      "Trọng lượng": "5.4 kg",
      "Đầu ra vật liệu": "I G 3/4''",
      "Đầu nối khí nén": "M R 1/4''",
      "Áp suất khí đầu vào": "2.2-8 bar",
      "Áp suất vật liệu tối đa": "8 bar",
      "Lưu lượng tự do tối đa": "80 l/min",
      "Lưu lượng mỗi hành trình kép": "225 cm³",
      "Mức ồn ở 6 bar": "79 dB(A)",
      "Tỷ số truyền (:1)": "1:1",
      "Nhiệt độ vật liệu": "4-90 °C"
    }, specConfidence: "verified"
  },
  {
    slug: "pm500", name: "PM 500", brand: "Wagner",
    subCategory: "Hệ thống cấp liệu",
    industries: ["construction", "wood"],
    shortDesc: "Bơm màng kép khí nén công suất lớn, lưu lượng hành trình 500 cm³, phù hợp trạm trộn/cấp liệu quy mô lớn trong xưởng sơn công nghiệp.",
    img: "https://cdn.wagner-group.com/fileadmin/pim/1200x1200/PIC_EQU_PM-500_right_66802.jpg",
    specs: {
      "Vật liệu xử lý được": "Gốc nước, Gốc dung môi, Vật liệu mài mòn, dễ đứt gãy cấu trúc, nhạy ẩm",
      "Vật liệu tiếp xúc": "Nhôm, PTFE, Thép không gỉ",
      "Trọng lượng": "13.8 kg",
      "Đầu ra vật liệu": "I G 1''",
      "Đầu nối khí nén": "M G 1/4''",
      "Áp suất khí đầu vào": "2-8 bar",
      "Áp suất vật liệu tối đa": "8 bar",
      "Lưu lượng tự do tối đa": "75 l/min",
      "Lưu lượng mỗi hành trình kép": "500 cm³",
      "Mức ồn ở 6 bar": "81 dB(A)",
      "Tỷ số truyền (:1)": "1:1",
      "Nhiệt độ vật liệu": "4-90 °C"
    }, specConfidence: "verified"
  },
  {
    slug: "zip-182", name: "ZIP 182", brand: "Wagner",
    subCategory: "Hệ thống cấp liệu",
    industries: ["construction", "wood"],
    shortDesc: "Bơm màng kép khí nén công suất cao nhất dòng ZIP, lưu lượng tự do 180 l/phút, phù hợp cấp liệu số lượng lớn cho hệ thống airspray nhiều súng.",
    img: "https://cdn.wagner-group.com/fileadmin/pim/1200x1200/PIC_EQU_Zip182_30953.jpg",
    specs: {
      "Vật liệu xử lý được": "Gốc dung môi, Vật liệu mài mòn, dầu, dễ đứt gãy cấu trúc, nhạy ẩm",
      "Vật liệu tiếp xúc": "Nhôm, PTFE, Thép không gỉ",
      "Trọng lượng": "12.5 kg",
      "Đầu ra vật liệu": "I G 1''",
      "Đầu nối khí nén": "M G 1/2''",
      "Áp suất khí đầu vào": "1-8 bar",
      "Áp suất vật liệu tối đa": "8 bar",
      "Lưu lượng tự do tối đa": "180 l/min",
      "Lưu lượng mỗi hành trình kép": "710 cm³",
      "Mức ồn ở 6 bar": "78 dB(A)",
      "Tỷ số truyền (:1)": "1:1",
      "Nhiệt độ vật liệu": "4-90 °C"
    }, specConfidence: "verified"
  },
  {
    slug: "cobra-40-10", name: "Cobra 40-10", brand: "Wagner",
    subCategory: "Hệ thống cấp liệu",
    industries: ["construction", "wood", "marine", "composite"],
    shortDesc: "Bơm màng kép piston áp lực cao (Consistal) cho ứng dụng AirCoat/airless tới 2.5 l/phút và 250 bar; phù hợp từ trạm sơn đơn tới hệ đa màu phức tạp.",
    img: "https://cdn.wagner-group.com/fileadmin/pim/1200x1200/WAGNER_Cobra_40-10_dynL-hor_ProductGroup_2253x2505_32223.jpg",
    specs: {
      "Lĩnh vực ứng dụng": "Sơn kim loại, Sơn chống ăn mòn, Sơn gỗ, tách khuôn",
      "Kỹ thuật phun": "Airless, AirCoat",
      "Vật liệu xử lý được": "Gốc nước, Gốc dung môi, Vật liệu mài mòn, dễ đứt gãy cấu trúc, nhạy ẩm",
      "Vật liệu tiếp xúc": "Nhôm, Thép không gỉ, Carbide, PA",
      "Trọng lượng": "19 kg",
      "Đầu ra vật liệu": "M G 3/8''",
      "Đầu nối khí nén": "I G 1/2''",
      "Áp suất khí đầu vào": "2.5-6 bar",
      "Áp suất vật liệu tối đa": "250 bar",
      "Lưu lượng mỗi hành trình kép": "10 cm³",
      "Lưu lượng mỗi phút": "2 l/min",
      "Tốc độ hành trình tối đa": "200 lần/phút",
      "Mức ồn ở 6 bar": "74 dB(A)",
      "Tỷ số truyền (:1)": "40:1",
      "Độ pH vật liệu": "3.5-9",
      "Nhiệt độ vật liệu": "10-80 °C"
    }, specConfidence: "verified"
  },
  {
    slug: "cobra-40-25", name: "Cobra 40-25", brand: "Wagner",
    subCategory: "Hệ thống cấp liệu",
    industries: ["construction", "wood", "marine", "composite"],
    shortDesc: "Bơm piston màng cao áp, xử lý được vật liệu ăn mòn, mài mòn và dễ đứt gãy cấu trúc, tiêu thụ dung dịch tráng rửa rất thấp; áp suất tới 250 bar, lưu lượng 5 l/phút, phù hợp cấp cho tối đa 8 súng AirCoat.",
    img: "https://cdn.wagner-group.com/fileadmin/pim/1200x1200/PIC_EQU_Cobra-40-25_horizontal_left_71732.jpg",
    specs: {
      "Lĩnh vực ứng dụng": "Sơn kim loại, Sơn chống ăn mòn, Sơn gỗ, tách khuôn",
      "Kỹ thuật phun": "Airless, AirCoat",
      "Vật liệu xử lý được": "Gốc nước, Gốc dung môi, Vật liệu mài mòn, dễ đứt gãy cấu trúc, nhạy ẩm",
      "Vật liệu tiếp xúc": "Nhôm mạ niken, Thép không gỉ, Carbide, PA",
      "Trọng lượng": "32 kg",
      "Đầu ra vật liệu": "M G 3/8''",
      "Đầu nối khí nén": "I G 1/2''",
      "Áp suất khí đầu vào": "2.5-6.25 bar",
      "Áp suất vật liệu tối đa": "250 bar",
      "Lưu lượng mỗi hành trình kép": "25 cm³",
      "Lưu lượng mỗi phút": "5 l/min",
      "Tốc độ hành trình tối đa": "200 lần/phút",
      "Mức ồn ở 6 bar": "76 dB(A)",
      "Tỷ số truyền (:1)": "40:1",
      "Độ pH vật liệu": "3.5-9",
      "Nhiệt độ vật liệu": "10-80 °C"
    }, specConfidence: "verified"
  },
  {
    slug: "leopard-35-70", name: "Leopard 35-70", brand: "Wagner",
    subCategory: "Hệ thống cấp liệu",
    industries: ["construction", "wood", "composite"],
    shortDesc: "Bơm piston thép không gỉ cho airless/AirCoat tới 250 bar và 4.2 l/phút, thiết kế bộ động cơ khí chống đóng băng, dễ bảo trì với hệ Activeflush tiết kiệm dung dịch tráng rửa.",
    img: "https://cdn.wagner-group.com/fileadmin/pim/1200x1200/PIC_EQU_Leopard-35-70_32177.jpg",
    specs: {
      "Lĩnh vực ứng dụng": "Sơn kim loại, Sơn gỗ, tách khuôn, dán keo",
      "Kỹ thuật phun": "Airless, AirCoat",
      "Vật liệu xử lý được": "Gốc nước, Gốc dung môi, Vật liệu mài mòn, nhạy ẩm",
      "Vật liệu tiếp xúc": "Thép không gỉ, Crôm cứng, Carbide, PTFE, PE",
      "Trọng lượng": "26 kg",
      "Đầu ra vật liệu": "M M24x1.5",
      "Đầu nối khí nén": "I G 1/2''",
      "Áp suất khí đầu vào": "2.5-7.1 bar",
      "Áp suất vật liệu tối đa": "250 bar",
      "Lưu lượng mỗi hành trình kép": "70 cm³",
      "Lưu lượng mỗi phút": "4.2 l/min",
      "Tốc độ hành trình tối đa": "60 lần/phút",
      "Mức ồn ở 6 bar": "74 dB(A)",
      "Tỷ số truyền (:1)": "35:1",
      "Độ pH vật liệu": "3.5-9",
      "Nhiệt độ vật liệu": "5-80 °C"
    }, specConfidence: "verified"
  },
  {
    slug: "puma-28-40", name: "Puma 28-40", brand: "Wagner",
    subCategory: "Hệ thống cấp liệu",
    industries: ["construction", "wood", "composite"],
    shortDesc: "Bơm piston thép không gỉ cho airless/AirCoat tới 220 bar và 2.4 l/phút, lý tưởng cho trạm sơn đơn hoặc dùng làm bơm chất đóng rắn.",
    img: "https://cdn.wagner-group.com/fileadmin/pim/1200x1200/PIC_EQU_Puma-28-40_32195.jpg",
    specs: {
      "Lĩnh vực ứng dụng": "Sơn kim loại, Sơn gỗ, tách khuôn, dán keo",
      "Kỹ thuật phun": "Airless, AirCoat",
      "Vật liệu xử lý được": "Gốc nước, Gốc dung môi, nhạy ẩm",
      "Vật liệu tiếp xúc": "Thép không gỉ, Crôm cứng, Carbide, PTFE, PA",
      "Trọng lượng": "16 kg",
      "Đầu ra vật liệu": "M M24x1.5",
      "Đầu nối khí nén": "I G 1/2''",
      "Áp suất khí đầu vào": "2.5-8 bar",
      "Áp suất vật liệu tối đa": "224 bar",
      "Lưu lượng mỗi hành trình kép": "40 cm³",
      "Lưu lượng mỗi phút": "2.4 l/min",
      "Tốc độ hành trình tối đa": "60 lần/phút",
      "Mức ồn ở 6 bar": "74 dB(A)",
      "Tỷ số truyền (:1)": "28:1",
      "Độ pH vật liệu": "3.5-9",
      "Nhiệt độ vật liệu": "5-80 °C"
    }, specConfidence: "verified"
  },
  {
    slug: "ldg-5", name: "Material pressure tanks, type LDG 5", brand: "Wagner",
    subCategory: "Hệ thống cấp liệu",
    industries: ["construction", "wood"],
    shortDesc: "Thùng áp lực vật liệu do Walther chế tạo, dùng để chuẩn bị, hút chân không, gia nhiệt và cấp liệu không mạch đập cho nhiều loại vật liệu sơn.",
    img: "https://cdn.wagner-group.com/fileadmin/pim/1200x1200/PIC_EQU_Pilot_LDG-5_Gruppenbild_94808.jpg",
    specs: {
      "Loại": "Thùng áp lực vật liệu tiêu chuẩn LDG 5",
      "Rút vật liệu": "Van bi"
    }, specConfidence: "partial",
    specNote: "Trang chi tiết wagner-group.com không công bố bảng Technical data (dung tích, áp suất) cho biến thể này — chỉ có mô tả tổng quan."
  },
  {
    slug: "ldg-10", name: "Material pressure tanks, type LDG 10", brand: "Wagner",
    subCategory: "Hệ thống cấp liệu",
    industries: ["construction", "wood"],
    shortDesc: "Thùng áp lực vật liệu do Walther chế tạo, dùng để chuẩn bị, hút chân không, gia nhiệt và cấp liệu không mạch đập cho nhiều loại vật liệu sơn.",
    img: "https://cdn.wagner-group.com/fileadmin/pim/1200x1200/PIC_EQU_Pilot_LDG-10_Gruppenbild_94809.jpg",
    specs: {
      "Loại": "Thùng áp lực vật liệu tiêu chuẩn LDG 10",
      "Rút vật liệu": "Van bi"
    }, specConfidence: "partial",
    specNote: "Trang chi tiết wagner-group.com không công bố bảng Technical data (dung tích, áp suất) cho biến thể này — chỉ có mô tả tổng quan."
  },
  {
    slug: "ldg-20", name: "Material pressure tanks, type LDG 20", brand: "Wagner",
    subCategory: "Hệ thống cấp liệu",
    industries: ["construction", "wood"],
    shortDesc: "Thùng áp lực vật liệu do Walther chế tạo, dùng để chuẩn bị, hút chân không, gia nhiệt và cấp liệu không mạch đập cho nhiều loại vật liệu sơn.",
    img: "https://cdn.wagner-group.com/fileadmin/pim/1200x1200/PIC_EQU_Pilot_LDG-20_Gruppenbild_94810.jpg",
    specs: {
      "Loại": "Thùng áp lực vật liệu tiêu chuẩn LDG 20",
      "Rút vật liệu": "Van bi"
    }, specConfidence: "partial",
    specNote: "Trang chi tiết wagner-group.com không công bố bảng Technical data (dung tích, áp suất) cho biến thể này — chỉ có mô tả tổng quan."
  },
  {
    slug: "mdg-2", name: "Material pressure tanks, type MDG 2", brand: "Wagner",
    subCategory: "Hệ thống cấp liệu",
    industries: ["construction", "wood"],
    shortDesc: "Thùng áp lực vật liệu Walther với vít cánh giúp thao tác dễ dàng, có thể gia nhiệt/khuấy/khử khí và kiểm soát mức đổ đầy; phù hợp lưu trữ vật liệu kín cần tránh ánh sáng.",
    img: "https://cdn.wagner-group.com/fileadmin/pim/1200x1200/PIC_EQU_Pilot_MDG-2_Gruppenbild_94822.jpg",
    specs: {
      "Loại": "Thùng áp lực vật liệu tiêu chuẩn MDG 2",
      "Rút vật liệu": "Van bi"
    }, specConfidence: "partial",
    specNote: "Trang chi tiết wagner-group.com không công bố bảng Technical data (dung tích, áp suất) cho biến thể này — chỉ có mô tả tổng quan (khác MDG 45/60 có công bố dung tích)."
  },
  {
    slug: "mdg-12", name: "Material pressure tanks, type MDG 12", brand: "Wagner",
    subCategory: "Hệ thống cấp liệu",
    industries: ["construction", "wood"],
    shortDesc: "Thùng áp lực vật liệu Walther với vít cánh giúp thao tác dễ dàng, có thể gia nhiệt/khuấy/khử khí và kiểm soát mức đổ đầy; phù hợp lưu trữ vật liệu kín cần tránh ánh sáng.",
    img: "https://cdn.wagner-group.com/fileadmin/pim/1200x1200/PIC_EQU_Pilot_MDG-12_Gruppenbild_94818.jpg",
    specs: {
      "Loại": "Thùng áp lực vật liệu tiêu chuẩn MDG 12",
      "Rút vật liệu": "Van bi"
    }, specConfidence: "partial",
    specNote: "Trang chi tiết wagner-group.com không công bố bảng Technical data (dung tích, áp suất) cho biến thể này — chỉ có mô tả tổng quan."
  },
  {
    slug: "mdg-22", name: "Material pressure tanks, type MDG 22", brand: "Wagner",
    subCategory: "Hệ thống cấp liệu",
    industries: ["construction", "wood"],
    shortDesc: "Thùng áp lực vật liệu Walther với vít cánh giúp thao tác dễ dàng, có thể gia nhiệt/khuấy/khử khí và kiểm soát mức đổ đầy; phù hợp lưu trữ vật liệu kín cần tránh ánh sáng.",
    img: "https://cdn.wagner-group.com/fileadmin/pim/1200x1200/PIC_EQU_Pilot_MDG-22_Gruppenbild_94817.jpg",
    specs: {
      "Loại": "Thùng áp lực vật liệu tiêu chuẩn MDG 22",
      "Rút vật liệu": "Van bi"
    }, specConfidence: "partial",
    specNote: "Trang chi tiết wagner-group.com không công bố bảng Technical data (dung tích, áp suất) cho biến thể này — chỉ có mô tả tổng quan."
  },
  {
    slug: "mdg-45", name: "Material pressure tanks, type MDG 45", brand: "Wagner",
    subCategory: "Hệ thống cấp liệu",
    industries: ["construction", "wood"],
    shortDesc: "Thùng áp lực vật liệu Walther dung tích 48 lít, có thể gia nhiệt/khuấy/khử khí, dùng để cấp liệu ổn định không mạch đập cho nhiều loại vật liệu sơn.",
    img: "https://cdn.wagner-group.com/fileadmin/pim/1200x1200/PIC_EQU_Pilot_MDG-45_Gruppenbild_94815.jpg",
    specs: {
      "Loại": "Thùng áp lực vật liệu tiêu chuẩn MDG 45",
      "Dung tích": "48 l",
      "Dung tích sử dụng được": "42.8 l",
      "Rút vật liệu": "Van bi"
    }, specConfidence: "verified"
  },
  {
    slug: "mdg-60", name: "Material pressure tanks, type MDG 60", brand: "Wagner",
    subCategory: "Hệ thống cấp liệu",
    industries: ["construction", "wood"],
    shortDesc: "Thùng áp lực vật liệu Walther dung tích lớn nhất dòng MDG (63.6 lít), phục vụ cấp liệu số lượng lớn không mạch đập cho hệ thống sơn công nghiệp.",
    img: "https://cdn.wagner-group.com/fileadmin/pim/1200x1200/PIC_EQU_Pilot_MDG-60_Gruppenbild_94814.jpg",
    specs: {
      "Loại": "Thùng áp lực vật liệu tiêu chuẩn MDG 60",
      "Dung tích": "63.6 l",
      "Dung tích sử dụng được": "58.6 l",
      "Rút vật liệu": "Van bi"
    }, specConfidence: "verified"
  }
];
