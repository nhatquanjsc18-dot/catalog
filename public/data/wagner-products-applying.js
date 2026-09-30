// Wagner — Atomizers category (súng phun tự động & cầm tay công nghiệp)
// Source: https://www.wagner-group.com/en/industry/products/liquid-coating/applying/
// 25 sản phẩm — đã đối chiếu đủ số lượng link /product/ trên trang danh mục nguồn
// (trang có 1 link "View product" trỏ tới id sản phẩm bị lỗi 404 trên chính site
// Wagner, không tương ứng sản phẩm nào ngoài 25 tên đã liệt kê nên không tính).
// Ảnh lấy nguyên văn từ thuộc tính src trong DOM trang chi tiết từng sản phẩm.
var WAGNER_APPLYING_PRODUCTS = [
  {
    slug: "protec-gm-1", name: "PROTEC GM 1", brand: "Wagner",
    subCategory: "Sơn ướt",
    industries: ["construction", "wood", "marine"],
    shortDesc: "Súng phun airless tự động áp lực cao tới 350 bar, xử lý được sơn kẽm giàu, sơn chống ăn mòn 2K, sơn chống hà và lót epoxy — phù hợp lắp trên robot/hệ tự động.",
    img: "https://cdn.wagner-group.com/fileadmin/pim/1200x1200/PIC_EQU_GM1-350-left_67841.jpg",
    specs: {
      "Lĩnh vực ứng dụng": "Sơn kim loại, Sơn chống ăn mòn",
      "Kỹ thuật phun": "Airless",
      "Vật liệu xử lý được": "Sơn gốc nước/dung môi, Sơn kẽm giàu, High solids, Sơn chống ăn mòn 2K, Sơn chống hà, Lót epoxy",
      "Vật liệu tiếp xúc": "Nhôm, Thép không gỉ, Carbide, PTFE, UHMW-PE, POM",
      "Trọng lượng": "560 g",
      "Áp suất vật liệu tối đa": "350 bar",
      "Mức ồn tối đa": "85 dB(A)",
      "Độ pH vật liệu": "3.5-9",
      "Kích thước đầu phun": "0.007-0.065 inch"
    }, specConfidence: "verified"
  },
  {
    slug: "topfinish-robotbell2-bell2s", name: "TOPFINISH RobotBell 2 / Bell 2S", brand: "Wagner",
    subCategory: "Sơn ướt",
    industries: ["construction", "wood", "marine", "automotive"],
    shortDesc: "Đầu phun chuông tĩnh điện xoay (rotary bell) gắn robot dòng TOPFINISH, dùng cho sơn kim loại, nhựa, chống ăn mòn, gỗ và sơn vành xe, cho chất lượng bề mặt cao cả ngoại/nội thất.",
    img: "https://cdn.wagner-group.com/fileadmin/pim/1200x1200/_106219.jpg",
    specs: {
      "Lĩnh vực ứng dụng": "Sơn kim loại, Sơn nhựa, Sơn chống ăn mòn, Sơn gỗ, Sơn vành xe, ngoại thất, nội thất",
      "Kỹ thuật phun": "Airspray thông thường, phun ly tâm (rotation atomization)",
      "Kích thước": "413 x 110 x 319 mm",
      "Trọng lượng": "5.3 kg",
      "Áp suất vật liệu tối đa": "8 bar",
      "Lưu lượng tự do tối đa": "0.8 cm³/phút"
    }, specConfidence: "verified"
  },
  {
    slug: "vector-grip", name: "Vector Grip 4-finger", brand: "Wagner",
    subCategory: "Sơn ướt",
    industries: ["construction", "wood", "marine"],
    shortDesc: "Súng phun airless cầm tay 4 ngón cầm chắc tay, áp lực vật liệu tối đa 270 bar, dùng cho sơn kim loại, chống ăn mòn và gỗ với vật liệu mài mòn.",
    img: "https://cdn.wagner-group.com/fileadmin/pim/1200x1200/WAGNER_Vector-Grip_4-finger_dynL_ProductGroup_295x295_101055.jpg",
    specs: {
      "Lĩnh vực ứng dụng": "Sơn kim loại, Sơn chống ăn mòn, Sơn gỗ",
      "Kỹ thuật phun": "Airless",
      "Vật liệu xử lý được": "Gốc nước, Gốc dung môi, Vật liệu mài mòn",
      "Vật liệu tiếp xúc": "Thép không gỉ, Nhôm, PTFE, Carbide, UHMW-PE, POM",
      "Áp suất vật liệu tối đa": "270 bar",
      "Mức ồn tối đa": "81 dB(A)",
      "Độ pH vật liệu": "3.5-9",
      "Kích thước đầu phun": "0.007-0.052 inch"
    }, specConfidence: "verified"
  },
  {
    slug: "topfinish-gm-1030g", name: "TOPFINISH GM 1030G", brand: "Wagner",
    subCategory: "Sơn ướt",
    industries: ["construction", "wood"],
    shortDesc: "Súng phun cầm tay dòng TOPFINISH cho airspray thường/HVLP/HVLP-Plus, thân thép không gỉ, xử lý sơn gốc nước và dung môi cho kim loại, nhựa, gỗ và dán keo.",
    img: "https://cdn.wagner-group.com/fileadmin/pim/1200x1200/PIC_EQU_GM1030G_left_002_73810.jpg",
    specs: {
      "Lĩnh vực ứng dụng": "Sơn kim loại, Sơn nhựa, Sơn gỗ, dán keo",
      "Kỹ thuật phun": "Airspray thường/HVLP/HVLP-Plus, phun thủ công",
      "Vật liệu xử lý được": "Gốc nước, Gốc dung môi",
      "Vật liệu tiếp xúc": "Thép không gỉ",
      "Kích thước": "130 x 180 x 50 mm",
      "Trọng lượng": "419 g",
      "Đầu nối khí nén": "M G 1/4''",
      "Mức ồn tối đa": "84.1 dB(A)",
      "Kích thước đầu phun": "1-2.2 mm"
    }, specConfidence: "verified"
  },
  {
    slug: "topfinish-robotbell-1-ech", name: "TOPFINISH RobotBell 1/ Bell 1S ECH", brand: "Wagner",
    subCategory: "Sơn tĩnh điện ướt",
    industries: ["construction", "wood"],
    shortDesc: "Đầu phun chuông tĩnh điện xoay gắn robot cho sơn gốc nước, thân bằng titan/Consistal mạ niken, thích hợp sơn kim loại, nhựa và gỗ ở nhiệt độ vận hành 15-50 °C.",
    img: "https://cdn.wagner-group.com/fileadmin/_processed_/a/0/csm__106219_ab4d5aaece.jpg",
    specs: {
      "Lĩnh vực ứng dụng": "Sơn kim loại, Sơn nhựa, Sơn gỗ",
      "Kỹ thuật phun": "Airspray thường, phun ly tâm, tĩnh điện gốc nước",
      "Vật liệu xử lý được": "Gốc nước, dễ đứt gãy cấu trúc",
      "Vật liệu tiếp xúc": "Consistal mạ niken, Thép không gỉ, Titan, PET",
      "Kích thước": "369 x 285 x 285 mm",
      "Trọng lượng": "7.4 kg",
      "Áp suất vật liệu tối đa": "8 bar",
      "Lưu lượng tối đa": "0.8 l/min",
      "Kích thước đầu phun": "0.8-1.7 mm",
      "Nhiệt độ hoạt động": "15-50 °C"
    }, specConfidence: "verified"
  },
  {
    slug: "topfinish-gm-1030p", name: "TOPFINISH GM 1030P", brand: "Wagner",
    subCategory: "Sơn ướt",
    industries: ["construction", "wood", "marine", "composite"],
    shortDesc: "Súng phun tự động dòng TOPFINISH cho airspray thường/HVLP/HVLP-Plus, xử lý vật liệu 2K trộn sẵn và chất tách khuôn, kích thước đầu phun linh hoạt 0.3-3.5 mm.",
    img: "https://cdn.wagner-group.com/fileadmin/pim/1200x1200/PIC_EQU_GM1030P_67632.jpg",
    specs: {
      "Lĩnh vực ứng dụng": "Sơn kim loại, Sơn nhựa, Sơn chống ăn mòn, Sơn gỗ",
      "Kỹ thuật phun": "Airspray thường/HVLP/HVLP-Plus, phun thủ công",
      "Vật liệu xử lý được": "Gốc nước, vật liệu 2K trộn sẵn, chất tách khuôn",
      "Vật liệu tiếp xúc": "Thép không gỉ",
      "Trọng lượng": "486 g",
      "Áp suất khí đầu vào": "1-8 bar",
      "Áp suất vật liệu tối đa": "8 bar",
      "Mức ồn tối đa": "92.8 dB(A)",
      "Kích thước đầu phun": "0.3-3.5 mm"
    }, specConfidence: "verified"
  },
  {
    slug: "topfinish-ga-1900", name: "TOPFINISH GA 1900", brand: "Wagner",
    subCategory: "Sơn ướt",
    industries: ["construction", "wood"],
    shortDesc: "Súng phun tự động nhỏ gọn cho airspray thường, thân thép không gỉ, phù hợp lắp đặt trong không gian hẹp trên hệ thống sơn kim loại, nhựa và gỗ.",
    img: "https://cdn.wagner-group.com/fileadmin/pim/1200x1200/PIC_EQU_GA1900_Left-Baseplate_67521.jpg",
    specs: {
      "Lĩnh vực ứng dụng": "Sơn kim loại, Sơn nhựa, Sơn gỗ",
      "Kỹ thuật phun": "Airspray thường",
      "Vật liệu xử lý được": "Gốc nước, Gốc dung môi, dễ đứt gãy cấu trúc, nhạy ẩm",
      "Vật liệu tiếp xúc": "Thép không gỉ",
      "Kích thước": "119 x 52 x 49 mm",
      "Trọng lượng": "890 g",
      "Áp suất vật liệu tối đa": "18 bar",
      "Mức ồn tối đa": "102 dB(A)",
      "Kích thước đầu phun": "0.5-1.4 mm"
    }, specConfidence: "verified"
  },
  {
    slug: "supracoat-ga-3000sc", name: "SupraCoat GA3000SC", brand: "Wagner",
    subCategory: "Sơn ướt",
    industries: ["construction", "wood", "marine"],
    shortDesc: "Súng phun tự động công nghệ HVLP dòng SupraCoat, mạ vàng chống ăn mòn, áp suất vật liệu tối đa 160 bar, phù hợp sơn kim loại, nhựa và gỗ chất lượng cao.",
    img: "https://cdn.wagner-group.com/fileadmin/pim/1200x1200/PIC_EQU_GA3000SCIC-gold_30980.jpg",
    specs: {
      "Lĩnh vực ứng dụng": "Sơn kim loại, Sơn nhựa, Sơn gỗ",
      "Kỹ thuật phun": "Airspray - HVLP",
      "Vật liệu xử lý được": "Gốc nước, Gốc dung môi, dễ đứt gãy cấu trúc, nhạy ẩm",
      "Vật liệu tiếp xúc": "Thép không gỉ, PTFE, Carbide, UHMW-PE",
      "Kích thước": "132 x 50 x 82 mm",
      "Trọng lượng": "880 g",
      "Áp suất vật liệu tối đa": "160 bar",
      "Mức ồn tối đa": "82 dB(A)",
      "Nhiệt độ hoạt động": "5-40 °C"
    }, specConfidence: "verified"
  },
  {
    slug: "ga-5000eaw", name: "GA 5000EAW", brand: "Wagner",
    subCategory: "Sơn tĩnh điện ướt",
    industries: ["construction", "wood", "composite"],
    shortDesc: "Súng phun tự động tĩnh điện gốc nước dòng GA 5000, xử lý sơn lót và sơn phủ gốc nước 1K cùng chất tách khuôn gốc nước, độ dẫn điện vật liệu 1-1 KΩ.cm.",
    img: "https://cdn.wagner-group.com/fileadmin/pim/1200x1200/PIC_EQU_GA5000_EA_IC_Roundjet-left_34691.jpg",
    specs: {
      "Lĩnh vực ứng dụng": "Sơn kim loại, Sơn nhựa, Sơn gỗ",
      "Kỹ thuật phun": "Airspray, tĩnh điện gốc nước",
      "Vật liệu xử lý được": "Sơn lót/sơn phủ gốc nước 1K, chất tách khuôn gốc nước",
      "Vật liệu tiếp xúc": "Thép không gỉ, Carbide, PA 12, PEEK, POM-C, FEP",
      "Kích thước": "272 x 74 x 135 mm",
      "Trọng lượng": "1,000 g",
      "Áp suất vật liệu tối đa": "8 bar",
      "Mức ồn tối đa": "78 dB(A)",
      "Độ dẫn điện vật liệu": "1-1 KΩ.cm",
      "Kích thước đầu phun": "0.3-2 mm",
      "Nhiệt độ hoạt động": "5-40 °C"
    }, specConfidence: "verified"
  },
  {
    slug: "ga-5000ea", name: "GA 5000EA", brand: "Wagner",
    subCategory: "Sơn tĩnh điện ướt",
    industries: ["construction", "wood", "composite"],
    shortDesc: "Súng phun tự động tĩnh điện gốc dung môi dòng GA 5000, xử lý sơn lót/sơn phủ 1K và 2K/3K/4K gốc dung môi cùng chất tách khuôn.",
    img: "https://cdn.wagner-group.com/fileadmin/pim/1200x1200/PIC_EQU_GA5000_EA_IC_left_34688.jpg",
    specs: {
      "Lĩnh vực ứng dụng": "Sơn kim loại, Sơn nhựa, Sơn gỗ",
      "Kỹ thuật phun": "Airspray, tĩnh điện gốc dung môi",
      "Vật liệu xử lý được": "Sơn lót/sơn phủ 1K, 2K/3K/4K gốc dung môi, chất tách khuôn gốc dung môi",
      "Vật liệu tiếp xúc": "Thép không gỉ, Carbide, PA 12, PEEK, POM-C",
      "Kích thước": "272 x 74 x 135 mm",
      "Trọng lượng": "1,200 g",
      "Áp suất vật liệu tối đa": "8 bar",
      "Mức ồn tối đa": "73 dB(A)",
      "Độ dẫn điện vật liệu": "18.5-123 MΩ.cm",
      "Độ dẫn điện vật liệu (chế độ LowR)": "6.2-123 MΩ.cm",
      "Kích thước đầu phun": "0.3-2 mm",
      "Nhiệt độ hoạt động": "5-40 °C"
    }, specConfidence: "verified"
  },
  {
    slug: "ga-5000eac", name: "GA 5000EAC", brand: "Wagner",
    subCategory: "Sơn tĩnh điện ướt",
    industries: ["construction", "wood"],
    shortDesc: "Súng phun tự động tĩnh điện AirCoat gốc dung môi dòng GA 5000, áp suất vật liệu tối đa 250 bar, xử lý sơn lót gốc dung môi dễ đứt gãy cấu trúc.",
    img: "https://cdn.wagner-group.com/fileadmin/pim/1200x1200/PIC_EQU_GA5000_EAC_EC_left_34697.jpg",
    specs: {
      "Lĩnh vực ứng dụng": "Sơn kim loại, Sơn nhựa, Sơn gỗ",
      "Kỹ thuật phun": "AirCoat, tĩnh điện gốc dung môi",
      "Vật liệu xử lý được": "Gốc dung môi, sơn lót 1K gốc dung môi, dễ đứt gãy cấu trúc",
      "Vật liệu tiếp xúc": "Thép không gỉ, Carbide, PA 12, PEEK, POM-C",
      "Kích thước": "290 x 74 x 135 mm",
      "Trọng lượng": "1,200 g",
      "Áp suất vật liệu tối đa": "250 bar",
      "Mức ồn tối đa": "76 dB(A)",
      "Độ dẫn điện vật liệu": "18.5-123 MΩ.cm",
      "Độ dẫn điện vật liệu (chế độ LowR)": "6.2-123 MΩ.cm",
      "Nhiệt độ hoạt động": "5-40 °C"
    }, specConfidence: "verified"
  },
  {
    slug: "ga-5000eacw", name: "GA 5000EACW", brand: "Wagner",
    subCategory: "Sơn tĩnh điện ướt",
    industries: ["construction", "wood", "composite"],
    shortDesc: "Súng phun tự động tĩnh điện AirCoat gốc nước dòng GA 5000, áp suất vật liệu tối đa 250 bar, xử lý sơn lót/sơn phủ và chất tách khuôn gốc nước.",
    img: "https://cdn.wagner-group.com/fileadmin/pim/1200x1200/PIC_EQU_GA5000_EAC_IC-left_34710.jpg",
    specs: {
      "Lĩnh vực ứng dụng": "Sơn kim loại, Sơn nhựa, Sơn gỗ",
      "Kỹ thuật phun": "AirCoat, tĩnh điện gốc nước",
      "Vật liệu xử lý được": "Sơn lót/sơn phủ gốc nước 1K, chất tách khuôn gốc nước",
      "Vật liệu tiếp xúc": "Thép không gỉ, Carbide, PA 12, PEEK, POM-C",
      "Kích thước": "290 x 75 x 125 mm",
      "Trọng lượng": "1,000 g",
      "Áp suất vật liệu tối đa": "250 bar",
      "Mức ồn tối đa": "73 dB(A)",
      "Độ dẫn điện vật liệu": "1-1 KΩ.cm",
      "Nhiệt độ hoạt động": "5-40 °C"
    }, specConfidence: "verified"
  },
  {
    slug: "gm-4100ac", name: "GM 4100AC", brand: "Wagner",
    subCategory: "Sơn ướt",
    industries: ["construction", "wood"],
    shortDesc: "Súng phun cầm tay tĩnh điện AirCoat dòng GM 4100AC, áp suất vật liệu tối đa 250 bar, xử lý sơn gốc nước, kích thước đầu phun nhỏ 0.007-0.023 inch.",
    img: "https://cdn.wagner-group.com/fileadmin/pim/1200x1200/PIC_EQU_GM4100AC-250bar-blueAC_left_31052.jpg",
    specs: {
      "Lĩnh vực ứng dụng": "Sơn kim loại, Sơn nhựa, Sơn gỗ",
      "Kỹ thuật phun": "AirCoat",
      "Vật liệu xử lý được": "Gốc nước",
      "Vật liệu tiếp xúc": "Thép không gỉ, Carbide, PA, POM, PTFE",
      "Trọng lượng": "600 g",
      "Đầu nối khí nén": "M G 1/4''",
      "Áp suất vật liệu tối đa": "250 bar",
      "Mức ồn tối đa": "82 dB(A)",
      "Kích thước đầu phun": "0.007-0.023 inch",
      "Nhiệt độ hoạt động": "5-40 °C"
    }, specConfidence: "verified"
  },
  {
    slug: "gm-4700ac", name: "GM 4700AC", brand: "Wagner",
    subCategory: "Sơn ướt",
    industries: ["construction", "wood"],
    shortDesc: "Súng phun cầm tay tĩnh điện AirCoat dòng GM 4700AC, tương đương GM 4100AC về áp suất và cấu trúc vật liệu tiếp xúc, phân biệt qua màu bộ điều khiển khí (đỏ).",
    img: "https://cdn.wagner-group.com/fileadmin/pim/1200x1200/PIC_EQU_GM4700AC-250bar-redAC_31058.jpg",
    specs: {
      "Lĩnh vực ứng dụng": "Sơn kim loại, Sơn nhựa, Sơn gỗ",
      "Kỹ thuật phun": "AirCoat",
      "Vật liệu xử lý được": "Gốc nước",
      "Vật liệu tiếp xúc": "Thép không gỉ, Carbide, PA, POM, PTFE",
      "Trọng lượng": "597 g",
      "Đầu nối khí nén": "M G 1/4''",
      "Áp suất vật liệu tối đa": "250 bar",
      "Mức ồn tối đa": "82 dB(A)",
      "Kích thước đầu phun": "0.007-0.023 inch",
      "Nhiệt độ hoạt động": "5-40 °C"
    }, specConfidence: "verified"
  },
  {
    slug: "ga-250al", name: "GA 250/400AL", brand: "Wagner",
    subCategory: "Sơn ướt",
    industries: ["construction", "wood"],
    shortDesc: "Súng phun tự động airless nhỏ gọn dòng GA 250/400AL, áp suất vật liệu tối đa 400 bar, dùng cho sơn kim loại và gỗ với vật liệu mài mòn.",
    img: "https://cdn.wagner-group.com/fileadmin/pim/1200x1200/PIC_EQU_GA400AL_31074.jpg",
    specs: {
      "Lĩnh vực ứng dụng": "Sơn kim loại, Sơn gỗ",
      "Kỹ thuật phun": "Airless",
      "Vật liệu xử lý được": "Gốc nước, Gốc dung môi, Vật liệu mài mòn, nhạy ẩm",
      "Vật liệu tiếp xúc": "Thép không gỉ, Carbide, PA, UHMW-PE",
      "Kích thước": "104 x 40 x 40 mm",
      "Trọng lượng": "545 g",
      "Đầu nối khí điều khiển": "I G 1/8''",
      "Áp suất khí đầu vào": "4.5-8 bar",
      "Áp suất vật liệu tối đa": "400 bar",
      "Mức ồn tối đa": "84 dB(A)",
      "Kích thước đầu phun": "0.007-0.052 inch"
    }, specConfidence: "verified"
  },
  {
    slug: "gm-5000ea", name: "GM 5000EA", brand: "Wagner",
    subCategory: "Sơn tĩnh điện ướt",
    industries: ["construction", "wood"],
    shortDesc: "Súng phun cầm tay tĩnh điện gốc dung môi dòng GM 5000, xử lý được vật liệu mài mòn, dễ đứt gãy cấu trúc và nhạy ẩm cho sơn kim loại, nhựa, gỗ.",
    img: "https://cdn.wagner-group.com/fileadmin/pim/1200x1200/PIC_EQU_GM5000EA-FS-Left_31106.jpg",
    specs: {
      "Lĩnh vực ứng dụng": "Sơn kim loại, Sơn nhựa, Sơn gỗ",
      "Kỹ thuật phun": "Airspray, tĩnh điện gốc dung môi",
      "Vật liệu xử lý được": "Vật liệu mài mòn, dễ đứt gãy cấu trúc, nhạy ẩm",
      "Vật liệu tiếp xúc": "Thép không gỉ, Carbide, PA 12, PEEK, POM-C",
      "Trọng lượng": "630 g",
      "Đầu nối khí nén": "M G 1/4''",
      "Áp suất vật liệu tối đa": "8 bar",
      "Độ dẫn điện vật liệu": "18.5-123 MΩ.cm",
      "Độ dẫn điện vật liệu (chế độ LowR)": "6.2-123 MΩ.cm",
      "Nhiệt độ hoạt động": "5-40 °C"
    }, specConfidence: "verified"
  },
  {
    slug: "gm-5000eac", name: "GM 5000EAC", brand: "Wagner",
    subCategory: "Sơn tĩnh điện ướt",
    industries: ["construction", "wood"],
    shortDesc: "Súng phun cầm tay tĩnh điện AirCoat gốc dung môi dòng GM 5000, áp suất vật liệu tối đa 250 bar, xử lý vật liệu mài mòn và dễ đứt gãy cấu trúc.",
    img: "https://cdn.wagner-group.com/fileadmin/pim/1200x1200/PIC_EQU_GM5000EAC-FS-Left_31089.jpg",
    specs: {
      "Lĩnh vực ứng dụng": "Sơn kim loại, Sơn gỗ",
      "Kỹ thuật phun": "AirCoat, tĩnh điện gốc dung môi",
      "Vật liệu xử lý được": "Gốc dung môi, Vật liệu mài mòn, dễ đứt gãy cấu trúc, nhạy ẩm",
      "Vật liệu tiếp xúc": "Thép không gỉ, PA 12, PEEK, POM-C, Carbide",
      "Trọng lượng": "710 g",
      "Đầu nối khí nén": "M G 1/4''",
      "Áp suất vật liệu tối đa": "250 bar",
      "Mức ồn tối đa": "73 dB(A)",
      "Nhiệt độ hoạt động": "5-40 °C"
    }, specConfidence: "verified"
  },
  {
    slug: "gm-5020-eaw", name: "GM 5020EAW", brand: "Wagner",
    subCategory: "Sơn tĩnh điện ướt",
    industries: ["construction", "wood"],
    shortDesc: "Súng phun cầm tay tĩnh điện gốc nước dòng GM 5000, xử lý vật liệu dễ đứt gãy cấu trúc và nhạy ẩm, kích thước đầu phun 0.3-2 mm.",
    img: "https://cdn.wagner-group.com/fileadmin/pim/1200x1200/PIC_EQU_GM5000EAW-FS-Left_31118.jpg",
    specs: {
      "Lĩnh vực ứng dụng": "Sơn kim loại, Sơn nhựa, Sơn gỗ",
      "Kỹ thuật phun": "Airspray, tĩnh điện gốc nước",
      "Vật liệu xử lý được": "Gốc nước, dễ đứt gãy cấu trúc, nhạy ẩm",
      "Vật liệu tiếp xúc": "Thép không gỉ, Carbide, PA 12, PEEK, POM-C",
      "Trọng lượng": "580 g",
      "Đầu nối khí nén": "M G 1/4''",
      "Áp suất vật liệu tối đa": "8 bar",
      "Mức ồn tối đa": "78 dB(A)",
      "Độ dẫn điện vật liệu": "1-1 KΩ.cm",
      "Kích thước đầu phun": "0.3-2 mm",
      "Nhiệt độ hoạt động": "5-40 °C"
    }, specConfidence: "verified"
  },
  {
    slug: "gm-5020-eacw", name: "GM 5020EACW", brand: "Wagner",
    subCategory: "Sơn tĩnh điện ướt",
    industries: ["construction", "wood"],
    shortDesc: "Súng phun cầm tay tĩnh điện AirCoat gốc nước dòng GM 5000, áp suất vật liệu tối đa 250 bar, xử lý được vật liệu mài mòn và dễ đứt gãy cấu trúc.",
    img: "https://cdn.wagner-group.com/fileadmin/pim/1200x1200/PIC_EQU_GM5000EACW-FS-Left_31102.jpg",
    specs: {
      "Lĩnh vực ứng dụng": "Sơn kim loại, Sơn nhựa, Sơn gỗ",
      "Kỹ thuật phun": "AirCoat, tĩnh điện gốc nước",
      "Vật liệu xử lý được": "Gốc nước, dễ đứt gãy cấu trúc, Vật liệu mài mòn",
      "Vật liệu tiếp xúc": "Thép không gỉ, Carbide, PA 12, PEEK, POM-C",
      "Áp suất vật liệu tối đa": "250 bar",
      "Nhiệt độ hoạt động": "5-40 °C"
    }, specConfidence: "partial",
    specNote: "Trang nguồn không công bố trọng lượng/kích thước riêng cho biến thể EACW — các chỉ số còn lại lấy đúng theo bảng Technical data của sản phẩm."
  },
  {
    slug: "pilot-trend-fb", name: "Pilot Trend FB", brand: "Wagner",
    subCategory: "Sơn ướt",
    industries: ["construction", "wood"],
    shortDesc: "Súng phun cầm tay dòng Pilot Trend cho airspray thường/HVLP, xử lý sơn gốc dung môi, kích thước đầu phun linh hoạt 0.5-2.5 mm.",
    img: "https://cdn.wagner-group.com/fileadmin/pim/1200x1200/PIC_EQU_Pilot_Trend_FB_Gruppenbild_94863.jpg",
    specs: {
      "Kỹ thuật phun": "Airspray, Airspray thường, Airspray - HVLP, phun thủ công",
      "Vật liệu xử lý được": "Gốc dung môi",
      "Vật liệu tiếp xúc": "Thép không gỉ",
      "Kích thước": "145 x 38 x 355 mm",
      "Trọng lượng": "677 g",
      "Mức ồn tối đa": "85 dB(A)",
      "Kích thước đầu phun": "0.5-2.5 mm"
    }, specConfidence: "verified"
  },
  {
    slug: "pilot-mini-material-connection", name: "Pilot Mini FA", brand: "Wagner",
    subCategory: "Sơn ướt",
    industries: ["construction", "wood"],
    shortDesc: "Súng phun cầm tay nhỏ gọn dòng Pilot Mini cho airspray thường/HVLP-Plus, xử lý cả sơn gốc dung môi và gốc nước, áp suất vật liệu tối đa 8 bar.",
    img: "https://cdn.wagner-group.com/fileadmin/pim/1200x1200/PIC_EQU_Pilot_Mini_FA_Gruppenbild_94867.jpg",
    specs: {
      "Kỹ thuật phun": "Airspray, Airspray thường, Airspray - HVLP-Plus, phun thủ công",
      "Vật liệu xử lý được": "Gốc dung môi, Gốc nước",
      "Vật liệu tiếp xúc": "Thép không gỉ",
      "Kích thước": "135 x 43 x 170 mm",
      "Trọng lượng": "279 g",
      "Áp suất vật liệu tối đa": "8 bar",
      "Mức ồn tối đa": "85 dB(A)",
      "Kích thước đầu phun": "0.3-2.2 mm"
    }, specConfidence: "verified"
  },
  {
    slug: "pilot-trend-fa", name: "Pilot Trend FA", brand: "Wagner",
    subCategory: "Sơn ướt",
    industries: ["construction", "wood"],
    shortDesc: "Súng phun cầm tay dòng Pilot Trend, thân ngắn hơn bản FB, cho airspray thường/HVLP, xử lý sơn gốc dung môi với đầu phun 0.5-2.5 mm.",
    img: "https://cdn.wagner-group.com/fileadmin/pim/1200x1200/PIC_EQU_Pilot_Trend_FA_Gruppenbild_94864.jpg",
    specs: {
      "Kỹ thuật phun": "Airspray, Airspray thường, Airspray - HVLP, phun thủ công",
      "Vật liệu xử lý được": "Gốc dung môi",
      "Vật liệu tiếp xúc": "Thép không gỉ",
      "Kích thước": "145 x 38 x 185 mm",
      "Trọng lượng": "482 g",
      "Mức ồn tối đa": "85 dB(A)",
      "Kích thước đầu phun": "0.5-2.5 mm"
    }, specConfidence: "verified"
  },
  {
    slug: "pilot-ga-9010-marking", name: "PILOT GA 9010 Marking", brand: "Wagner",
    subCategory: "Sơn ướt",
    industries: ["construction", "wood"],
    shortDesc: "Súng phun tự động cỡ nhỏ chuyên dùng đánh dấu/kẻ vạch (marking) cho sơn kim loại và nhựa, áp suất vật liệu tối đa 6 bar, kích thước rất nhỏ gọn.",
    img: "https://cdn.wagner-group.com/fileadmin/pim/1200x1200/PIC_EQU_Pilot_GA9010_Gruppenbild_95081.jpg",
    specs: {
      "Lĩnh vực ứng dụng": "Sơn kim loại, Sơn nhựa",
      "Kỹ thuật phun": "Airspray thường",
      "Vật liệu tiếp xúc": "Thép không gỉ",
      "Kích thước": "128 x 22 x 29 mm",
      "Trọng lượng": "440 g",
      "Áp suất vật liệu tối đa": "6 bar",
      "Mức ồn tối đa": "83 dB(A)"
    }, specConfidence: "verified"
  },
  {
    slug: "pilot-mini", name: "Pilot Mini FB", brand: "Wagner",
    subCategory: "Sơn ướt",
    industries: ["construction", "wood"],
    shortDesc: "Súng phun cầm tay dòng Pilot Mini, thân dài hơn bản FA, cho airspray thường/HVLP-Plus, xử lý cả sơn gốc dung môi và gốc nước.",
    img: "https://cdn.wagner-group.com/fileadmin/pim/1200x1200/PIC_EQU_Pilot_Mini_FB_Gruppenbild_94866.jpg",
    specs: {
      "Kỹ thuật phun": "Airspray, Airspray thường, Airspray - HVLP-Plus, phun thủ công",
      "Vật liệu xử lý được": "Gốc dung môi, Gốc nước",
      "Vật liệu tiếp xúc": "Thép không gỉ",
      "Kích thước": "135 x 43 x 247 mm",
      "Trọng lượng": "379 g",
      "Áp suất vật liệu tối đa": "8 bar",
      "Mức ồn tối đa": "85 dB(A)",
      "Kích thước đầu phun": "0.3-2.2 mm"
    }, specConfidence: "verified"
  },
  {
    slug: "topfinish-ga-1020-1030", name: "TOPFINISH GA 1020/1030", brand: "Wagner",
    subCategory: "Sơn ướt",
    industries: ["construction", "wood", "automotive"],
    shortDesc: "Súng phun tự động dòng TOPFINISH cho airspray thường/HVLP/HVLP-Plus, thân thép không gỉ 1.4305, phù hợp sơn kim loại, nhựa, gỗ và sơn vành xe.",
    img: "https://cdn.wagner-group.com/fileadmin/pim/1200x1200/WAGNER_GA1030_IC_adapter-plate_dynL_ProductGroup_3330x3330_67618.jpg",
    specs: {
      "Lĩnh vực ứng dụng": "Sơn kim loại, Sơn nhựa, Sơn gỗ, Sơn vành xe",
      "Kỹ thuật phun": "Airspray, Airspray thường/HVLP/HVLP-Plus",
      "Vật liệu xử lý được": "Gốc nước, Gốc dung môi, Vật liệu mài mòn, dễ đứt gãy cấu trúc, nhạy ẩm",
      "Vật liệu tiếp xúc": "Thép không gỉ 1.4305",
      "Kích thước": "139 x 42 x 42 mm",
      "Trọng lượng": "650 g",
      "Áp suất vật liệu tối đa": "8 bar",
      "Mức ồn tối đa": "92.8 dB(A)",
      "Nhiệt độ vật liệu": "5-80 °C",
      "Kích thước đầu phun": "0.3-3.5 mm"
    }, specConfidence: "verified"
  },
  {
    slug: "ga-4000", name: "GA 4000ACIC/ACEC", brand: "Wagner",
    subCategory: "Sơn ướt",
    industries: ["construction", "wood"],
    shortDesc: "Súng phun tự động AirCoat với bộ điều khiển nội bộ, lắp trong hệ thống sơn tự động; nhiều loại đế lắp cho phép nhiều phương án lắp đặt, có/không tuần hoàn vật liệu.",
    img: "https://cdn.wagner-group.com/fileadmin/pim/1200x1200/PIC_EQU_GA4000ACIC-left_31043.jpg",
    specs: {
      "Lĩnh vực ứng dụng": "Sơn kim loại, Sơn gỗ",
      "Kỹ thuật phun": "AirCoat",
      "Vật liệu xử lý được": "Gốc nước, Gốc dung môi, Vật liệu mài mòn, dễ đứt gãy cấu trúc, nhạy ẩm",
      "Vật liệu tiếp xúc": "Thép không gỉ, Carbide, PA, POM, PTFE, UHMW-PE",
      "Kích thước": "129 x 47 x 60 mm",
      "Trọng lượng": "678 g",
      "Áp suất vật liệu tối đa": "250 bar",
      "Mức ồn tối đa": "82 dB(A)",
      "Kích thước đầu phun": "0.007-0.023 inch",
      "Nhiệt độ hoạt động": "5-40 °C"
    }, specConfidence: "verified"
  },
  {
    slug: "aquacoat-5010-manual", name: "AquaCoat 5010 Manual", brand: "Wagner",
    subCategory: "Sơn tĩnh điện ướt",
    industries: ["construction", "wood"],
    shortDesc: "Buồng cách điện hoàn toàn cho phun tĩnh điện sơn/chất tách khuôn gốc nước bằng súng cầm tay, tích điện nội bộ cho vật liệu, dùng cho cả airspray và AirCoat; có thể tuỳ chỉnh bộ súng/bơm theo yêu cầu.",
    img: "https://cdn.wagner-group.com/fileadmin/pim/1200x1200/PIC_EQU_AquaCoat_5010-5020_68034.jpg",
    specs: {
      "Lĩnh vực ứng dụng": "Sơn kim loại, Sơn gỗ, tháo khuôn/chất tách khuôn",
      "Kỹ thuật phun": "Airspray, AirCoat, tĩnh điện gốc nước",
      "Vật liệu xử lý được": "Gốc nước, Vật liệu mài mòn, dễ đứt gãy cấu trúc, nhạy ẩm"
    }, specConfidence: "partial"
  },
  {
    slug: "aquacoat-5010-automatic", name: "AquaCoat 5010 Automatic", brand: "Wagner",
    subCategory: "Sơn tĩnh điện ướt",
    industries: ["construction", "wood"],
    shortDesc: "Phiên bản tự động của buồng cách điện AquaCoat cho phun tĩnh điện sơn/chất tách khuôn gốc nước, tích điện nội bộ, dùng cho cả airspray và AirCoat.",
    img: "https://cdn.wagner-group.com/fileadmin/pim/1200x1200/PIC_EQU_AquaCoat_Auto_68339.jpg",
    specs: {
      "Lĩnh vực ứng dụng": "Sơn kim loại, Sơn gỗ, tháo khuôn/chất tách khuôn",
      "Kỹ thuật phun": "Airspray, AirCoat, tĩnh điện gốc nước"
    }, specConfidence: "partial"
  }
];
