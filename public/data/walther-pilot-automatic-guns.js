(function () {
  var list = [
  {
    "slug": "walther-ga-1030-extrusion",
    "name": "GA 1030 Extrusion — Súng phun tự động Walther Pilot",
    "model": "GA 1030 Extrusion",
    "subCategory": "Súng phun tự động",
    "industries": [],
    "shortDesc": "GA 1030 Extrusion",
    "img": "img/walther/walther-ga-1030-extrusion.jpg",
    "specs": {
      "Material pressure": "max. 8 bar",
      "Processable materials": "Solvent-based, water-based",
      "Nozzle sizes": "1.5 - 2.5mm",
      "Operating temperature": "43 °C",
      "Product dimensions [LxWxH]": "144x40x40mm (100mm extension)",
      "Weight [net/gross]": "643g / 794g"
    },
    "specConfidence": "verified"
  },
  {
    "slug": "walther-wa21",
    "name": "WA21 — Súng phun tự động Walther Pilot",
    "model": "WA21",
    "subCategory": "Súng phun tự động",
    "industries": [],
    "shortDesc": ">Benefits",
    "img": "img/walther/walther-wa21.jpg",
    "specs": {
      "Material pressure": "max. 120bar",
      "Processable materials": "Solvent-based, water-based",
      "Operating temperature": "max. 80°C",
      "Product dimensions [LxWxH]": "50x26x26mm",
      "Weight [net/gross]": "181g / 267g"
    },
    "specConfidence": "verified"
  },
  {
    "slug": "walther-wa51",
    "name": "WA51 — Súng phun tự động Walther Pilot",
    "model": "WA51",
    "subCategory": "Súng phun tự động",
    "industries": [],
    "shortDesc": "WA51",
    "img": "img/walther/walther-wa51.jpg",
    "specs": {
      "Material pressure": "max. 6 bar",
      "Sound level": "83 dB(A)",
      "Nozzle sizes": "0.3mm - 1.5mm",
      "Operating temperature": "max. 80°C",
      "Product dimensions [LxWxH]": "69x21x48mm",
      "Weight [net/gross]": "112g / 212g"
    },
    "specConfidence": "verified"
  },
  {
    "slug": "walther-wa560-2k",
    "name": "WA560-2K — Súng phun tự động Walther Pilot",
    "model": "WA560-2K",
    "subCategory": "Súng phun tự động",
    "industries": [],
    "shortDesc": ">Benefits",
    "img": "img/walther/walther-wa560-2k.jpg",
    "specs": {
      "Material pressure A-Component": "max. 10 bar",
      "Material pressure B-Component": "max. 6 bar",
      "Sound level": "86 dB(A)",
      "Processable materials": "Water-based",
      "Nozzle sizes": "0.5mm - 2.0mm",
      "Operating temperature": "80 °C",
      "Product dimensions [LxWxH]": "185x64x80mm",
      "Weight [net/gross]": "1737g / 1886g"
    },
    "specConfidence": "verified"
  },
  {
    "slug": "walther-ga-1020-1030",
    "name": "GA 1020/1030 — Súng phun tự động Walther Pilot",
    "model": "GA 1020/1030",
    "subCategory": "Súng phun tự động",
    "industries": [],
    "shortDesc": ">Benefits",
    "img": "img/walther/walther-ga-1020-1030.jpg",
    "specs": {
      "Material pressure": "max. 8 bar",
      "Sound level": "85 dB (A)",
      "Nozzle sizes": "0.3mm - 3.5mm",
      "Operating temperature": "max. 43°C",
      "Product dimensions [LxWxH]": "144x40x40mm",
      "Weight [net/gross]": "629g / 780g",
      "Material input": "G 1/4\""
    },
    "specConfidence": "verified"
  },
  {
    "slug": "walther-ga9010",
    "name": "GA9010 — Súng phun tự động Walther Pilot",
    "model": "GA9010",
    "subCategory": "Súng phun tự động",
    "industries": [
      "pharma-food"
    ],
    "shortDesc": ">Benefits",
    "img": "img/walther/walther-ga9010.jpg",
    "specs": {
      "Material pressure": "max. 6 bar",
      "Sound level": "87 dB(A)",
      "Nozzle sizes": "0.5mm - 1.5mm",
      "Product dimension [LxWxH]": "120x23x50mm",
      "Weight [net/gross]": "295g / 394g"
    },
    "specConfidence": "verified"
  },
  {
    "slug": "walther-misch-n-automatik",
    "name": "Misch-N Automatik — Súng phun tự động Walther Pilot",
    "model": "Misch-N Automatik",
    "subCategory": "Súng phun tự động",
    "industries": [],
    "shortDesc": ">Benefits",
    "img": "img/walther/walther-misch-n-automatik.jpg",
    "specs": {
      "Material pressure": "max. 8bar",
      "Sound level": "86 dB(A)",
      "Processable materials": "Solvent-based, water-based",
      "Nozzle sizes": "0.5mm - 1.2mm",
      "Product dimensions [LxWxH]": "196x58x124.5mm",
      "Weight [net/gross]": "795g / 944g"
    },
    "specConfidence": "verified"
  },
  {
    "slug": "walther-wa-100",
    "name": "WA 100 - Spritzpistolen — Súng phun tự động Walther Pilot",
    "model": "WA 100 - Spritzpistolen",
    "subCategory": "Súng phun tự động",
    "industries": [
      "pharma-food"
    ],
    "shortDesc": "WA 100 - Spritzpistolen",
    "img": "img/walther/walther-wa-100.jpg",
    "specs": {
      "Material pressure": "max. 8 bar",
      "Sound level": "83 dB(A)",
      "Processable materials": "Solvent-based, water-based",
      "Nozzle sizes": "0.3mm - 2.2mm",
      "Operating temperature": "max. 80 °C",
      "Product dimensions [LxWxH]": "50x67x50 mm",
      "Weight VA [net / gross]": "265g / 365g",
      "Weight AL [net / gross]": "159g / 259g"
    },
    "specConfidence": "verified"
  },
  {
    "slug": "walther-wa-110",
    "name": "WA 110 — Súng phun tự động Walther Pilot",
    "model": "WA 110",
    "subCategory": "Súng phun tự động",
    "industries": [
      "pharma-food"
    ],
    "shortDesc": "WA 110",
    "img": "img/walther/walther-wa-110.jpg",
    "specs": {
      "Material pressure": "max. 8 bar",
      "Sound level": "83 dB(A)",
      "Processable materials": "Solvent-based, water-based",
      "Nozzle sizes": "0.3mm - 0.5mm",
      "Operating temperature": "max. 80°C",
      "Product dimensions [LxWxH]": "50x67x50mm",
      "Weight [net/gross]": "197,5g / 297,5g"
    },
    "specConfidence": "verified"
  },
  {
    "slug": "walther-wa-81",
    "name": "WA 81 — Súng phun tự động Walther Pilot",
    "model": "WA 81",
    "subCategory": "Súng phun tự động",
    "industries": [],
    "shortDesc": ">Benefits",
    "img": "img/walther/walther-wa-81.jpg",
    "specs": {
      "Material pressure": "max. 6 bar",
      "Sound level": "83 dB(A)",
      "Processable materials": "Solvent-based, water-based",
      "Nozzle sizes": "0.5mm - 1.5mm",
      "Operating temperature": "max. 80°C",
      "Product dimensions [LxWxH]": "120x20x46mm",
      "Weight [net/gross]": "112g / 247g"
    },
    "specConfidence": "verified"
  },
  {
    "slug": "walther-wa-xv",
    "name": "WAXV — Súng phun tự động Walther Pilot",
    "model": "WAXV",
    "subCategory": "Súng phun tự động",
    "industries": [
      "pharma-food"
    ],
    "shortDesc": ">Benefits",
    "img": "img/walther/walther-wa-xv.jpg",
    "specs": {
      "Material pressure": "max. 10 bar",
      "Sound level": "86 dB(A)",
      "Processable materials": "Solvent-based, Water-based, UV/moisture sensitive",
      "Nozzle sizes": "0.5mm - 3.5mm",
      "Operating temperature": "max. 80°C",
      "Product dimensions [LxWxH]": "218x40x94 mm",
      "Weight [net / gross]": "973g / 1122g"
    },
    "specConfidence": "verified"
  },
  {
    "slug": "walther-wa30",
    "name": "WA30 — Súng phun tự động Walther Pilot",
    "model": "WA30",
    "subCategory": "Súng phun tự động",
    "industries": [],
    "shortDesc": ">Benefits",
    "img": "img/walther/walther-wa30.jpg",
    "specs": {
      "Material pressure": "max. 350bar",
      "Sound level": "82 dB(A)",
      "Processable materials": "Solvent-based, water-based",
      "Operating temperature": "max. 200 °C",
      "Product dimensions [LxWxH]": "87x60x60mm",
      "Weight VA [net/gross]": "667g / 767g",
      "Weight AL [net/gross]": "293g / 393g"
    },
    "specConfidence": "verified"
  },
  {
    "slug": "walther-wa600",
    "name": "WA600 — Súng phun tự động Walther Pilot",
    "model": "WA600",
    "subCategory": "Súng phun tự động",
    "industries": [
      "pharma-food"
    ],
    "shortDesc": ">Benefits",
    "img": "img/walther/walther-wa600.jpg",
    "specs": {
      "Material pressure": "max. 8bar",
      "Sound level": "83 dB(A)",
      "Processable materials": "Solvent-based, Water-based",
      "Nozzle sizes": "0.3mm - 2.2mm",
      "Product dimensions [LxWxH]": "120x54x82mm",
      "Weight [net/gross]": "353g / 502g"
    },
    "specConfidence": "verified"
  }
];
  window.WALTHER_PRODUCTS = (window.WALTHER_PRODUCTS || []).concat(list);
})();
