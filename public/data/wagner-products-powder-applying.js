// Wagner - Sơn tĩnh điện bột / Application equipment for powder coating (19 sản phẩm)
// Nguồn: https://www.wagner-group.com/en/industry/products/powder-coating/applying/
(function () {
  var list = [
    {
      slug: "wagner-sprint-2-aps",
      name: "Sprint 2 APS — Bộ bơm bột tự động",
      brand: "Wagner",
      subCategory: "Sơn tĩnh điện bột",
      industries: [],
      shortDesc: "Bộ bơm bột tự động gồm súng phun tự động PEA-X1, bộ điều khiển WACON Sprint 2 X và injector PI-F1 — thế hệ mới của dòng thiết bị sơn tĩnh điện bột Wagner.",
      img: "https://cdn.wagner-group.com/fileadmin/pim/1200x1200/WAGNER_Sprint2-APS_powder-set_WA24013INTPIC01_101423.jpg",
      specs: {},
      specConfidence: "partial"
    },
    {
      slug: "wagner-sprint-2-expert-t",
      name: "Sprint 2 Expert T — Bộ bàn rung",
      brand: "Wagner",
      subCategory: "Sơn tĩnh điện bột",
      industries: [],
      shortDesc: "Bộ thủ công Sprint 2 Expert T gồm bộ điều khiển, súng phun tay, bàn rung phễu 3 lít, injector Hi-Coat và ống 9mm; có tính năng DSO (Digital Surface Optimizer) hỗ trợ tối ưu bề mặt.",
      img: "https://cdn.wagner-group.com/fileadmin/pim/1200x1200/WAGNER_Sprint2Expert-T_3l-table-set_WA24013INTPIC01_102579.jpg",
      specs: {},
      specConfidence: "partial"
    },
    {
      slug: "wagner-sprint-2-expert-mps",
      name: "Sprint 2 Expert MPS — Bộ bơm bột thủ công",
      brand: "Wagner",
      subCategory: "Sơn tĩnh điện bột",
      industries: [],
      shortDesc: "Bộ thủ công gồm súng phun tay PEM-X1, bộ điều khiển WACON Sprint 2 Expert và injector — có WAGNER wizard và DSO hỗ trợ người dùng đạt kết quả chuyên nghiệp nhanh chóng.",
      img: "https://cdn.wagner-group.com/fileadmin/pim/1200x1200/WAGNER_Sprint2Expert-MPS_powder-set_WA24013INTPIC01_101417.jpg",
      specs: {},
      specConfidence: "partial"
    },
    {
      slug: "wagner-sprint-2-expert-h",
      name: "Sprint 2 Expert H — Máy phun bột thủ công",
      brand: "Wagner",
      subCategory: "Sơn tĩnh điện bột",
      industries: [],
      shortDesc: "Cấp bột từ thùng chứa 60 lít (hoặc trực tiếp từ hộp gốc); tích hợp WAGNER wizard và DSO (Digital Surface Optimizer) giúp tối ưu chất lượng bề mặt sơn.",
      img: "https://cdn.wagner-group.com/fileadmin/pim/1200x1200/WAGNER_SPRINT2Expert-hopper_dynL_ID1025_WA24013INTPIC01_101409.jpg",
      specs: {},
      specConfidence: "partial"
    },
    {
      slug: "wagner-sprint-2-expert-cg",
      name: "Sprint 2 Expert CG — Bộ vali súng cốc",
      brand: "Wagner",
      subCategory: "Sơn tĩnh điện bột",
      industries: [],
      shortDesc: "Bộ vali gọn nhẹ phù hợp sơn chi tiết đơn lẻ, số lượng nhỏ, hoặc dùng trong phòng thí nghiệm/phát triển sản phẩm — lắp đặt nhanh nhờ nguyên lý cắm-chạy, vận hành ngay từ vali.",
      img: "https://cdn.wagner-group.com/fileadmin/pim/1200x1200/WAGNER_Sprint2Expert-CG_dynL_ID0966_WA24013USPIC01_101430.jpg",
      specs: {},
      specConfidence: "partial"
    },
    {
      slug: "wagner-sprint-2-expert-b",
      name: "Sprint 2 Expert B — Máy phun bột thủ công",
      brand: "Wagner",
      subCategory: "Sơn tĩnh điện bột",
      industries: [],
      shortDesc: "Cấp bột trực tiếp từ hộp gốc (hoặc thùng chứa 60 lít); tích hợp WAGNER wizard và DSO (Digital Surface Optimizer) giúp tối ưu chất lượng bề mặt sơn.",
      img: "https://cdn.wagner-group.com/fileadmin/pim/1200x1200/WAGNER_Sprint2Expert_dynL_Product-Group_ID0648_WA24013INTPIC02_98129.jpg",
      specs: {},
      specConfidence: "partial"
    },
    {
      slug: "wagner-sprint-2-expert-aps",
      name: "Sprint 2 Expert APS — Bộ bơm bột tự động",
      brand: "Wagner",
      subCategory: "Sơn tĩnh điện bột",
      industries: [],
      shortDesc: "Bộ bơm bột tự động gồm súng phun tự động PEA-X1, bộ điều khiển WACON Sprint 2 Expert và injector PI-F1 — có WAGNER wizard và DSO hỗ trợ vận hành.",
      img: "https://cdn.wagner-group.com/fileadmin/pim/1200x1200/WAGNER_Sprint2Expert-APS_powder-set_WA24013INTPIC01_101418.jpg",
      specs: {},
      specConfidence: "partial"
    },
    {
      slug: "wagner-sprint-2-t",
      name: "Sprint 2 T — Bộ bàn rung",
      brand: "Wagner",
      subCategory: "Sơn tĩnh điện bột",
      industries: [],
      shortDesc: "Bộ thủ công gồm bộ điều khiển, súng phun tay, bàn rung phễu 3 lít, injector Hi-Coat và ống 9mm — thế hệ mới của dòng thiết bị sơn tĩnh điện bột thủ công Wagner.",
      img: "https://cdn.wagner-group.com/fileadmin/pim/1200x1200/WAGNER_Sprint2-T_3L-Set_CC2024_WA24013INTPIC01_99908.jpg",
      specs: {},
      specConfidence: "partial"
    },
    {
      slug: "wagner-sprint-2-h",
      name: "Sprint 2 H — Máy phun bột thủ công",
      brand: "Wagner",
      subCategory: "Sơn tĩnh điện bột",
      industries: [],
      shortDesc: "Cấp bột từ thùng chứa inox 60 lít (hoặc trực tiếp từ hộp gốc) — thế hệ mới của dòng thiết bị sơn tĩnh điện bột thủ công Wagner, dùng với súng PEM-X1.",
      img: "https://cdn.wagner-group.com/fileadmin/pim/1200x1200/WAGNER_Sprint2-Hopper_dynL_ID0430_WA24013INTPIC01_98146.jpg",
      specs: {
        "Kỹ thuật phun": "Corona, Tribo, phun thủ công",
        "Kích thước": "720 x 493 x 1.147 mm",
        "Trọng lượng": "27.3 kg",
        "Áp suất khí vào": "6-8 bar",
        "Cấp bảo vệ": "IP 64",
        "Lưu lượng bột tối đa/súng": "450 g/phút"
      },
      specConfidence: "verified"
    },
    {
      slug: "wagner-sprint-2-b",
      name: "Sprint 2 B — Máy phun bột thủ công",
      brand: "Wagner",
      subCategory: "Sơn tĩnh điện bột",
      industries: [],
      shortDesc: "Cấp bột trực tiếp từ hộp gốc (hoặc thùng chứa 60 lít) — thế hệ mới của dòng thiết bị sơn tĩnh điện bột thủ công Wagner, dùng với súng PEM-X1.",
      img: "https://cdn.wagner-group.com/fileadmin/pim/1200x1200/WAGNER_Sprint2_Box_dynR_ProductGroup_98038.jpg",
      specs: {
        "Kỹ thuật phun": "Corona, Tribo, phun thủ công",
        "Vật liệu sơn tương thích": "Bột sơn hữu cơ, bột sơn Tribo hữu cơ, sơn bột metallic, sơn bột acrylic",
        "Kích thước": "738 x 493 x 1.147 mm",
        "Trọng lượng": "40 kg",
        "Áp suất khí vào": "6-8 bar",
        "Cấp bảo vệ": "IP 64",
        "Lưu lượng bột tối đa/súng": "450 g/phút"
      },
      specConfidence: "verified"
    },
    {
      slug: "wagner-sprint-2-cg",
      name: "Sprint 2 CG — Bộ vali súng cốc",
      brand: "Wagner",
      subCategory: "Sơn tĩnh điện bột",
      industries: [],
      shortDesc: "Bộ vali gọn nhẹ dùng súng cốc PEM-X1 CG, phù hợp sơn chi tiết đơn lẻ, số lượng nhỏ hoặc phòng thí nghiệm/phát triển sản phẩm — lắp đặt nhanh, vận hành ngay từ vali.",
      img: "https://cdn.wagner-group.com/fileadmin/pim/1200x1200/WAGNER_Sprint2-CG_dyn_ID0966_WA24013INTPIC01_99898.jpg",
      specs: {},
      specConfidence: "partial"
    },
    {
      slug: "wagner-sprint-2-mps",
      name: "Sprint 2 MPS — Bộ bơm bột thủ công",
      brand: "Wagner",
      subCategory: "Sơn tĩnh điện bột",
      industries: [],
      shortDesc: "Bộ thủ công gồm súng phun tay PEM-X1, bộ điều khiển WACON Sprint 2 X và injector — thế hệ mới của dòng thiết bị sơn tĩnh điện bột thủ công Wagner.",
      img: "https://cdn.wagner-group.com/fileadmin/pim/1200x1200/WAGNER_Sprint2-MPS_powder-set_WA24013INTPIC01_101422.jpg",
      specs: {},
      specConfidence: "partial"
    },
    {
      slug: "wagner-pea-t3-tribo-spraypack-automatic",
      name: "PEA-T3 Tribo Spraypack tự động",
      brand: "Wagner",
      subCategory: "Sơn tĩnh điện bột",
      industries: [],
      shortDesc: "Bộ súng phun bột tự động dùng công nghệ tích điện Tribo, cho hiệu suất truyền bột cao nhờ kênh dẫn khí/bột đặc biệt bên trong súng.",
      img: "https://cdn.wagner-group.com/fileadmin/pim/1200x1200/PIC_EQU_SprayPack_PEA-T3_Tribo_Automatik_87968.jpg",
      specs: {
        "Vật liệu sơn tương thích": "Sơn bột hiệu ứng, sơn bột hybrid, sơn bột metallic, sơn bột polyester, sơn bột UDS, sơn bột acrylic",
        "Trọng lượng": "550 g",
        "Cấp bảo vệ": "IP 64",
        "Cực tính": "âm",
        "Lưu lượng bột tối đa/súng": "450 g/phút",
        "Nhiệt độ vận hành": "5-45 °C"
      },
      specConfidence: "verified"
    },
    {
      slug: "wagner-pea-x1-corona-automatic-guns",
      name: "Súng phun tự động Corona PEA-X1",
      brand: "Wagner",
      subCategory: "Sơn tĩnh điện bột",
      industries: [],
      shortDesc: "Dòng súng phun tự động Corona, thiết kế module cùng nhiều phụ kiện đi kèm cho phạm vi ứng dụng rất rộng, hiệu suất phủ cao trong hệ thống sơn tự động.",
      img: "https://cdn.wagner-group.com/fileadmin/pim/1200x1200/PIC_EQU_PEA_X1_mit_RedDot-Logo_90021.jpg",
      specs: {
        "Phạm vi ứng dụng": "Sơn kim loại, sơn gỗ, sơn mâm/bánh xe",
        "Kỹ thuật phun": "Corona, phun tự động",
        "Vật liệu sơn tương thích": "Bột sơn hữu cơ",
        "Kích thước": "440 x 48 x 66 mm",
        "Trọng lượng": "545 g",
        "Cấp bảo vệ": "IP 54",
        "Cực tính": "âm hoặc dương",
        "Lưu lượng bột tối đa/súng": "450 g/phút"
      },
      specConfidence: "verified"
    },
    {
      slug: "wagner-per-x1-corona-robot-guns",
      name: "Súng phun robot Corona PER-X1",
      brand: "Wagner",
      subCategory: "Sơn tĩnh điện bột",
      industries: [],
      shortDesc: "Dòng súng phun tự động Corona chuyên dùng cho dây chuyền gắn robot, thiết kế module cùng nhiều phụ kiện cho phạm vi ứng dụng rất rộng.",
      img: "https://cdn.wagner-group.com/fileadmin/pim/1200x1200/PIC_EQU_PER-X1_Corona_left_mit_RedDot-Logo_90020.jpg",
      specs: {
        "Phạm vi ứng dụng": "Sơn kim loại, sơn gỗ, sơn mâm/bánh xe",
        "Kỹ thuật phun": "Corona, phun tự động",
        "Vật liệu sơn tương thích": "Bột sơn hữu cơ",
        "Kích thước": "325 x 54 x 269 mm",
        "Trọng lượng": "645 g",
        "Cấp bảo vệ": "IP 54",
        "Cực tính": "âm hoặc dương",
        "Lưu lượng bột tối đa/súng": "450 g/phút"
      },
      specConfidence: "verified"
    },
    {
      slug: "wagner-cup-gun-pem-x1-cg",
      name: "Súng cốc PEM-X1 CG",
      brand: "Wagner",
      subCategory: "Sơn tĩnh điện bột",
      industries: [],
      shortDesc: "Súng cốc dễ thao tác, phù hợp cho phòng thí nghiệm/phát triển sản phẩm và sơn chi tiết đơn lẻ, số lượng nhỏ — đổi màu chỉ trong khoảng 20 giây nhờ nguyên lý cắm-chạy, hình dạng phễu đặc biệt giúp bột chảy tốt.",
      img: "https://cdn.wagner-group.com/fileadmin/pim/1200x1200/PIC_EQU_PEMX1-Becher-Flachstrahl-left_31599.jpg",
      specs: {
        "Vật liệu sơn tương thích": "Bột sơn hữu cơ",
        "Trọng lượng": "600 g",
        "Cấp bảo vệ": "IP 64",
        "Cực tính": "âm",
        "Lưu lượng bột tối đa/súng": "200 g/phút",
        "Nhiệt độ vận hành": "5-45 °C"
      },
      specConfidence: "verified"
    },
    {
      slug: "wagner-pem-x1-corona-manual-gun",
      name: "Súng phun tay Corona PEM-X1",
      brand: "Wagner",
      subCategory: "Sơn tĩnh điện bột",
      industries: [],
      shortDesc: "Thiết kế cân bằng, bền bỉ, dễ thao tác, công thái học giúp thao tác linh hoạt và giảm mỏi tay; khớp nối nhanh cho ống bột giúp đổi màu dễ và nhanh hơn.",
      img: "https://cdn.wagner-group.com/fileadmin/pim/1200x1200/PIC_EQU_PEMX1-Flachstrahl-left_31603.jpg",
      specs: {
        "Vật liệu sơn tương thích": "Bột sơn hữu cơ",
        "Trọng lượng": "490 g",
        "Cấp bảo vệ": "IP 64",
        "Cực tính": "âm",
        "Lưu lượng bột tối đa/súng": "450 g/phút",
        "Nhiệt độ vận hành": "5-45 °C"
      },
      specConfidence: "verified"
    },
    {
      slug: "wagner-pem-t3-tribo-manual-guns",
      name: "Súng phun tay Tribo PEM-T3",
      brand: "Wagner",
      subCategory: "Sơn tĩnh điện bột",
      industries: [],
      shortDesc: "Súng phun tay dùng công nghệ tích điện Tribo, hệ thống tích điện hiệu quả, công thái học tốt và trọng lượng nhẹ; đầu tích điện có thể tháo rời giúp giảm chi phí hao mòn.",
      img: "https://cdn.wagner-group.com/fileadmin/pim/1200x1200/PIC_EQU_0351019_PEM_T3_66820.jpg",
      specs: {
        "Vật liệu sơn tương thích": "Bột sơn Tribo hữu cơ",
        "Cấp bảo vệ": "IP 54",
        "Cực tính": "dương",
        "Lưu lượng bột tối đa/súng": "300 g/phút"
      },
      specConfidence: "verified"
    },
    {
      slug: "wagner-pea-t3-tribo-automatic-guns",
      name: "Súng phun tự động Tribo PEA-T3",
      brand: "Wagner",
      subCategory: "Sơn tĩnh điện bột",
      industries: [],
      shortDesc: "Súng phun tự động dùng trong buồng phun bột, công nghệ tích điện Tribo với kênh dẫn khí/bột đặc biệt bên trong súng cho hiệu suất truyền bột cao.",
      img: "https://cdn.wagner-group.com/fileadmin/pim/1200x1200/PIC_EQU_0351031_PEA_T3XL_neu_66819.jpg",
      specs: {
        "Vật liệu sơn tương thích": "Bột sơn Tribo hữu cơ",
        "Cấp bảo vệ": "IP 54",
        "Cực tính": "dương",
        "Lưu lượng bột tối đa/súng": "300 g/phút"
      },
      specConfidence: "verified"
    }
  ];
  window.WAGNER_POWDER_APPLYING_PRODUCTS = list;
})();
