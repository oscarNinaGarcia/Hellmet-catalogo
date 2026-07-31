/* =========================================================
   HELLMET — Datos del catálogo
   Aquí editas TODO el contenido: categorías, productos,
   textos, características, precios e imágenes.

   -----------------------------------------------------------
   CATEGORIES (página principal → tarjetas → páginas secundarias)
   -----------------------------------------------------------
   slug        → usado en la URL: categoria-<slug>.html
   name        → nombre mostrado
   image       → foto de la tarjeta en la página principal
   description → texto que aparece arriba en su página secundaria

   -----------------------------------------------------------
   PRODUCTS (páginas secundarias → tarjetas → páginas terciarias)
   -----------------------------------------------------------
   slug     → usado en la URL: producto-<slug>.html
   category → debe coincidir EXACTO con un slug de CATEGORIES
   images   → fotos del carrusel de su página terciaria
   ========================================================= */

const CATEGORIES = [
  {
    slug: "hornos",
    name: "Hornos",
    image: "assets/horno1.png",
    description:
      "Hornos industriales y domésticos para panadería, pastelería y repostería, pensados para producción constante.",
  },
  {
    slug: "parrillas",
    name: "Parrillas",
    image: "assets/file_00000000d078720e9261732cee3a26f4.png",
    description:
      "Parrillas a gas, carbón y eléctricas para uso doméstico, comercial e industrial.",
  },
  {
    slug: "broasteras",
    name: "Broasteras",
    image: "assets/images/productos/broastera/480489485_1131992545324579_2513737581702350546_n.jpg",
    description:
      "Hornos y equipos especializados para la elaboración de pizzas en volumen.",
  },
  {
    slug: "cocinas",
    name: "Cocinas",
    image: "assets/images/productos/cocina de un quemador/438077022_1530921217859373_9149212280705639111_n.jpg",
    description:
      "Cocinas industriales multi-hornilla para restaurantes, hoteles y comedores.",
  },
];

const PRODUCTS = [
  {
    id: 1,
    slug: "horno-6-latas",
    category: "hornos",
    name: "Horno de 6 Latas",
    tagline: "Horno industrial",
    description:
      "Medidas del horno: Largo=117cm, Ancho=76cm, Alto=148cm. \nMedidas de las latas: 71 × 32 cm",
    features: [
      "Calor envolvente ♨️",
      "Doble quemador arriba y abajo 🔥🔥🔥 ",
      "6 Quemadores abajo y 3 quemadores arriba 🙀",
      "Revestido de fibra de vidrio y ladrillo refractario",
      "Vidrio templado✨",
      "Controlador de temperatura ⏲️",
      "Llaves metálicas ✨",
      "Pintado al horno (pintura electroestática)",
      "Ruedas para fácil traslado 🛞 😉",
      "Manguera incluída ",
      "Garantía real de fábrica ",
    ],
    price: "2700",
    images: [
      "assets/images/productos/horno_6_latas/674609140_2048912072729357_5413840233703809262_n.jpg",
      "assets/images/productos/horno_6_latas/676144943_949692017708663_5494392867547573485_n.jpg",
      "assets/images/productos/horno_6_latas/672626422_1508208950668461_8405740606696242506_n.jpg",
      "assets/images/productos/horno_6_latas/676301855_1737380260956242_262251379753989292_n.jpg",
      "assets/images/productos/horno_6_latas/675923296_1612641083185658_5978944433063581556_n.jpg",
      "assets/images/productos/horno_6_latas/675930725_3239253146462352_8956978909896763253_n.jpg",
      "assets/images/productos/horno_6_latas/675974278_839010309218331_7734533097539786191_n.jpg",
      
    ],
  },
  {
    id: 2,
    slug: "horno-grande-4-latas",
    category: "hornos",
    name: "Horno Grande 4 Latas",
    tagline: "Horno industrial",
    description:
      "Medidas 90cm de largo 75cm de ancho 145cm de alto Medidas de las latas 71x35cm ",
    features: [
      "Calor envolvente ♨️",
      "Doble quemador arriba y abajo 🔥🔥",
      "Revestido de fibra de vidrio y ladrillo refractario 🙀 ",
      "Llaves metálicas ✨",
      "Vidrio templado ✅",
      "Controlador de temperatura ⏲️ ",
      "Ruedas para fácil traslado",
      "Manguera de gas incluida ✅ ",
      "Pintado al horno (pintura electroestática)",
      "Garantía real de fábrica ",
    ],
    price: "2000",
    images: [
      "assets/images/productos/horno grande 4 latas/665895199_1736493077698093_6371313686301882029_n.jpg",
      "assets/images/productos/horno grande 4 latas/664975017_1288949349846596_2159728888920862225_n.jpg",
      "assets/images/productos/horno grande 4 latas/666004106_1427289632035787_8834330712744156691_n.jpg",
      "assets/images/productos/horno grande 4 latas/665642481_1366713998828295_6833759400284849001_n.jpg",
      "assets/images/productos/horno grande 4 latas/665528844_970567265628408_6642420559928901236_n.jpg",
      "assets/images/productos/horno grande 4 latas/666750685_940996028686125_3646686556831270394_n.jpg",
    ],
  },
  {
    id: 3,
    slug: "horno-4-latas",
    category: "hornos",
    name: "Horno de 4 latas",
    tagline: "Horno industrial",
    description:
      "Medidas 78cm de largo 75cm de ancho 145cm de alto Medida de las latas 71x30cm ",
    features: [
      "Panel digital programablCalor envolvente ♨️",
      "Doble quemador arriba y abajo 🔥🔥",
      "Revestido de fibra de vidrio y ladrillo refractario 🙀 ",
      "Controlador de temperatura ⏲️",
      "Vidrio templado ✨ ",
      "Manguera de gas incluído ✅",
      "Llaves metálicas ✨ ",
      "Pintado al horno (pintura electroestática) ",
      "Ruedas para fácil traslado",
      "Garantía real de fábrica ",
    ],
    price: "1900",
    // Nota: este producto todavía no tiene página terciaria creada.
    // Cuando la crees (producto-horno-convector.html), agrega sus fotos aquí.
    images: [
      "assets/images/productos/horno de 4 latas/619467745_1638619254168821_2771870637232487143_n.jpg",
      "assets/images/productos/horno de 4 latas/620650971_4301288190198787_3889561184616720236_n.jpg",
      "assets/images/productos/horno de 4 latas/620678874_1081672670752047_1857223694475516890_n.jpg",
      "assets/images/productos/horno de 4 latas/621692414_857925790400630_4250743196667584107_n.jpg",
      "assets/images/productos/horno de 4 latas/622060702_1444063147365897_1526452401061318659_n.jpg",
      "assets/images/productos/horno de 4 latas/622278397_3201543720025848_82396381556163820_n.jpg",
      "assets/images/productos/horno de 4 latas/622732348_847063294820850_3950840767685915020_n.jpg",
    ],
  },
  {
    id: 4,
    slug: "horno-mediano-4-latas",
    category: "hornos",
    name: "Horno Mediano de 4 latas",
    tagline: "Horno Industrial",
    description:
      "Medidas 78cm de largo 64cm de ancho 145cm de alto Medida de las latas 60x30cm ",
    features: [
      "Calor envolvente 🔥 ",
      "Doble quemador arriba y abajo 🔥🔥",
      "BandeRevestido de fibra de vidrio y ladrillo refractario 🙀 ",
      "Controlador de temperatura ⏲️ ",
      "Vidrio templado ✨ ",
      "Manguera de gas incluído ✅",
      "Llaves metálicas ✨ ",
      "Pintado al horno (pintura electroestática)",
      "Ruedas para fácil traslado ",
      "Garantía real de fábrica ",
    ],
    price: "1750",
    // Nota: este producto todavía no tiene página terciaria creada.
    images: [
      "assets/images/productos/horno mediano 4 latas/615803117_1197235232520985_5946526778944019992_n.jpg",
      "assets/images/productos/horno mediano 4 latas/615735763_1388719832945461_1768730457678910763_n.jpg",
      "assets/images/productos/horno mediano 4 latas/613914717_770364128732683_8336539422528969099_n.jpg",
      "assets/images/productos/horno mediano 4 latas/614163878_917984890802995_3721422804780837594_n.jpg",
      "assets/images/productos/horno mediano 4 latas/614211756_1774573693237432_8176493045024100795_n.jpg",
      "assets/images/productos/horno mediano 4 latas/613302215_1796945514131970_656193184026531370_n.jpg",
      "assets/images/productos/horno mediano 4 latas/613246606_913817034414783_688035352577030957_n.jpg",
    ],
  },
  {
    id: 5,
    slug: "horno-pequeno-4-latas",
    category: "hornos",
    name: "Horno pequeño de 4 latas",
    tagline: "Horno industrial",
    description:
      "Medidas 78cm de largo 52cm de ancho 144cm de alto Medidas de las latas 45x28cm.",
    features: [
      "Calor envolvente ♨️",
      "Doble quemador arriba y abajo 🔥🔥",
      "Revestido de fibra de vidrio y ladrillo refractario 🙀 ",
      "Vidrio templado✨ ",
      "Controlador de temperatura ⏲️",
      "Llaves metálicas ✨ ",
      "Pintado al horno (pintura electroestática)",
      "Ruedas para fácil traslado",
      "Manguera de gas incluida ✅",
      "Garantía real de fábrica ",
    ],
    price: "1650",
    // Nota: este producto todavía no tiene página terciaria creada.
    images: [
      "assets/images/productos/horno pequeno de 4 latas/604673339_1632927371203657_7680774631355507464_n.jpg",
      "assets/images/productos/horno pequeno de 4 latas/606540815_793845380376125_2984524561753169789_n.jpg",
      "assets/images/productos/horno pequeno de 4 latas/602902107_1378761853894272_6838866945606086772_n.jpg",
      "assets/images/productos/horno pequeno de 4 latas/602872275_1165864449043347_3453924357587009260_n.jpg",
      "assets/images/productos/horno pequeno de 4 latas/603004937_1942880143104034_6205847921710287558_n.jpg",
      "assets/images/productos/horno pequeno de 4 latas/602902117_2081011762632462_6837099093571518768_n.jpg",
      "assets/images/productos/horno pequeno de 4 latas/605627023_1200035635601930_6036954448055772618_n.jpg",

    ],
  },
  {
    id: 6,
    slug: "horno-2-latas",
    category: "hornos",
    name: "horno de 2 latas",
    tagline: "horno industrial",
    description:
      "Medidas 63cm de largo 51cm de ancho 140cm de alto Medidas de las latas 47cm x 45 cm ",
    features: [
      "Calor envolvente ♨️ ",
      "Doble quemador arriba y abajo 🔥🔥",
      "Revestido de fibra de vidrio y ladrillo refractario 🙀",
      "Vidrio templado✨ ",
      "Controlador de temperatura ⏲️ ",
      "Llaves metálicas ✨ ",
      "Pintado al horno (pintura electroestática) ",
      "Ruedas para fácil traslado",
      "Manguera de gas incluida",
      "Garantía real de fábrica ",
    ],
    price: "1400",
    // Nota: este producto todavía no tiene página terciaria creada.
    images: [
      "assets/images/productos/horno 2 latas/664742418_1758592868450409_8340266750902680630_n.jpg",
      "assets/images/productos/horno 2 latas/666053662_945727017817590_2113068096322619476_n.jpg",
      "assets/images/productos/horno 2 latas/664109981_1523273565854312_5739357748026419300_n.jpg",
      "assets/images/productos/horno 2 latas/664726090_1872690943433387_8186269107816156020_n.jpg",
      "assets/images/productos/horno 2 latas/663363177_1473159684394535_2446442487017090323_n.jpg",
      "assets/images/productos/horno 2 latas/665706850_1336256671667789_8473312609916674317_n.jpg",
      "assets/images/productos/horno 2 latas/665822112_4249996241982393_5038552255412787523_n.jpg",
    ],
  },
  {
    id:7,
    slug: "horno-pizzero",
    category: "hornos",
    name: "Carrito Pizzero",
    tagline: "Horno",
    description:
      "Medidas 63cm de largo 51cm de ancho 142cm de alto ",
    features: 
      [
        "Calor envolvente ♨️",
        "4 quemadores internos 🔥 ",
        "Plancha reforzada revestida de fibra de vidrio 🙀 ",
        "Vidrio templado ✨ ",
        "Controlador de temperatura ⏲️ ",
        "Llaves metálicas ✨ ",
        "Espacio interno para garrafa ✅",
        "Mesa plegable de acero inoxidable ✨ ",
        "Pintado al horno (pintura electroestática)",
        "4 Ruedas fácil traslado",
        "Manguera de gas incluida ",
        "Garantía real de fábrica ",
      ],
    price: "2550",
    // Nota: este producto todavía no tiene página terciaria creada.
    images: [
      "assets/images/productos/carro pizzero/646890332_1246430797059133_4078979071473831209_n.jpg",
      "assets/images/productos/carro pizzero/644520025_1359478145948088_2325888282041151422_n.jpg",
      "assets/images/productos/carro pizzero/644516747_907156142054296_6831914229814528758_n.jpg",
      "assets/images/productos/carro pizzero/646981473_1550373182689266_1461277110396472342_n.jpg",
      "assets/images/productos/carro pizzero/647370277_955614200469325_3873228543488034694_n.jpg",
      "assets/images/productos/carro pizzero/648079989_949229934213763_97687958937169440_n.jpg",
      "assets/images/productos/carro pizzero/648153066_3689014657920910_6573409936075619054_n.jpg",
    ],
  },
  {
    id: 8,
    slug: "parrilla-grande",
    category: "parrillas",
    name: "Parrilla Grande",
    tagline: "Parrilla Industrial",
    description:
      "Excelente para negocios, restaurantes. Medidas 90 cm de largo 52 cm de ancho 190 cm de alto",
    features:
      [
        "Gas y carbón 🔥 ",
        "6 quemadores 🔥 ",
        "Llaves metálicas ✨",
        "Manguera incluida ",
        "Techo desmontable ",
        "Recipiente para aceite 🪔",
        "Ruedas para fácil traslado ",
        "Pintado al horno (pintura electroestática) ",
        "Garantía real de fábrica ",
      ],
    price: "1500",
    images:
      [
        "assets/images/productos/parrilla grande/667780178_1618899629316503_6006601304070381707_n.jpg",
        "assets/images/productos/parrilla grande/666520236_2819487945080950_4660638325909447366_n.jpg",
        "assets/images/productos/parrilla grande/668719740_1255215716766996_465034441752967055_n.jpg",
        "assets/images/productos/parrilla grande/670844015_1292000313024432_5538607332452741113_n.jpg",
        "assets/images/productos/parrilla grande/668128274_1291003809689026_8296571481355076795_n.jpg",
        "assets/images/productos/parrilla grande/667684646_959414866477451_2265824918589673442_n.jpg",
        "assets/images/productos/parrilla grande/668607916_1470702654503083_1269202688074866676_n.jpg",

      ]
  },
  {
    id: 9,
    slug: "parrilla-mediana",
    category: "parrillas",
    name: "Parrilla Mediana",
    tagline: "Parrilla Industrial",
    description:
      "Medidas: 80cm de largo 45cm de ancho 180cm de alto ",
    features:
      [
        "Gas y carbón 🔥 ",
        "Cenicero ✅",
        "Techo desmontable 🙀",
        "Llaves metálicas ✨",
        "Manguera incluida ✅  ",
        "Recipiente para grasa ✨ ",
        "Ruedas para fácil traslado ",
        "Pintado al horno (pintura electroestática) ",
        "Garantía real de fábrica ",
      ],
    price: "1200",
    images:
      [
        "assets/images/productos/parrilla mediana/679681245_1715613856547406_2213377643120591405_n.jpg",
        "assets/images/productos/parrilla mediana/676458821_1262801636009558_6508079338413930761_n.jpg",
        "assets/images/productos/parrilla mediana/668719740_1255215716766996_465034441752967055_n.jpg",
        "assets/images/productos/parrilla mediana/676556303_1694812884846866_1177091466431624834_n.jpg",
        "assets/images/productos/parrilla mediana/676577090_1465594068356778_9077105741231713972_n.jpg",
        "assets/images/productos/parrilla mediana/676043942_997292569408556_1724723481555790454_n.jpg",
        "assets/images/productos/parrilla mediana/676389425_2455574591555615_5558810871107499302_n.jpg",

      ]
  },
  {
    id: 10,
    slug: "parrilla-comun",
    category: "parrillas",
    name: "Parrilla Comun",
    tagline: "Parrilla Doméstica",
    description:
      "Medidas 80cm de largo 45cm de ancho 118cm de alto ",
    features:
      [
        "Gas y carbón 🔥 ",
        "4 quemadores 🔥 ",
        "Mesa de acero inoxidable ✨",
        "Lata acero galvanizado inoxidable ✨",
        "Recipiente para grasa ",
        "Ruedas para fácil traslado ",
        "Llaves metálicas ✨",
        "Manguera incluida ",
        "Pintado al horno (pintura electroestática)",
        "Garantía real de fabrica ✨ ",
      ],
    price: "750",
    images:
      [
        "assets/images/productos/parrilla/439867010_3697280200523667_716384838000407453_n.jpg",
        "assets/images/productos/parrilla/406835945_1174819253955136_6511507352172693024_n.jpg",
        "assets/images/productos/parrilla/435315818_2431069613949081_443361268600250728_n.jpg",
        "assets/images/productos/parrilla/439721254_1017873596403366_9189350283596942904_n.jpg",
        "assets/images/productos/parrilla/439727424_818232133564194_4347991564955886529_n.jpg",
        "assets/images/productos/parrilla/439762577_442939548484260_4723548020790282350_n.jpg",
        "assets/images/productos/parrilla/438120538_438662072249307_4093247741580710818_n.jpg",
      ]
  },
  {
    id: 11,
    slug: "parrilla-turril",
    category: "parrillas",
    name: "Parrilla Turril",
    tagline: "Parrilla Doméstica",
    description:
      "Medidas: 90cm de largo 60cm de ancho 135cm de alto",
    features:
      [
        "Gas y carbón 🔥 ",
        "Tapa corrediza 🙀 ",
        "Ruedas para fácil traslado ",
        "Pintado al horno (pintura electroestática)",
        "Parrilla y carbonera desmontable (fácil de limpiar)",
        "Llave metálica ",
        "Manguera incluída ",
        "Garantía real de fabrica "
      ],
    price: "1500",
    images:
      [
        "assets/images/productos/parrilla turril/667700022_960284396504513_5538179245874602683_n.jpg",
        "assets/images/productos/parrilla turril/669937491_1477899563949691_8095029608901686654_n.jpg",
        "assets/images/productos/parrilla turril/670042807_4518441238411321_6098596501596424045_n.jpg",
        "assets/images/productos/parrilla turril/668579911_1442873467049694_1653334843538202056_n.jpg",
        "assets/images/productos/parrilla turril/670517095_1381543507351730_454792587218816427_n.jpg",
        "assets/images/productos/parrilla turril/668909440_937126609167933_4140271324245645414_n.jpg",
        "assets/images/productos/parrilla turril/669910134_2041522066411538_8206915977469665612_n.jpg",

      ]
  },
  {
    id: 12,
    slug: "parrilla-tipo-maletin",
    category: "parrillas",
    name: "Parrilla tipo Maletín",
    tagline: "Parrilla doméstica",
    description:
      "Excelente para negocios, restaurantes. Medidas 90 cm de largo 52 cm de ancho 190 cm de alto",
    features:
      [
        "Gas y carbón 🔥 ",
        "6 quemadores 🔥 ",
        "Llaves metálicas ✨",
        "Manguera incluida ",
        "Techo desmontable ",
        "Recipiente para aceite 🪔",
        "Ruedas para fácil traslado ",
        "Pintado al horno (pintura electroestática) ",
        "Garantía real de fábrica ",
      ],
    price: "1500",
    images:
      [
        "assets/images/productos/parrilla tipo maletin/WhatsApp Image 2026-07-27 at 17.50.29.jpeg",
        "assets/images/productos/parrilla tipo maletin/WhatsApp Image 2026-07-27 at 17.50.28.jpeg",

      ]
  },
  {
    id: 13,
    slug: "parrilla-portatil",
    category: "parrillas",
    name: "Parrilla Portátil",
    tagline: "Parrilla doméstica",
    description:
      "Excelente para negocios, restaurantes. Medidas 90 cm de largo 52 cm de ancho 190 cm de alto",
    features:
      [
        "Gas y carbón 🔥 ",
        "6 quemadores 🔥 ",
        "Llaves metálicas ✨",
        "Manguera incluida ",
        "Techo desmontable ",
        "Recipiente para aceite 🪔",
        "Ruedas para fácil traslado ",
        "Pintado al horno (pintura electroestática) ",
        "Garantía real de fábrica ",
      ],
    price: "1500",
    images:
      [
        "assets/images/productos/parrilla portatil/WhatsApp Image 2026-07-27 at 17.52.11.jpeg",
        "assets/images/productos/parrilla portatil/WhatsApp Image 2026-07-27 at 17.52.10 (1).jpeg",
        "assets/images/productos/parrilla portatil/WhatsApp Image 2026-07-27 at 17.52.09.jpeg",
        "assets/images/productos/parrilla portatil/WhatsApp Image 2026-07-27 at 17.52.10.jpeg",
        
      ]
  },
  {
    id: 14,
    slug: "parrilla-manija",
    category: "parrillas",
    name: "Parrilla con Manija",
    tagline: "Parrilla Industrial",
    description:
      "Excelente para negocios, restaurantes. Medidas 90 cm de largo 52 cm de ancho 190 cm de alto",
    features:
      [
        "Gas y carbón 🔥 ",
        "6 quemadores 🔥 ",
        "Llaves metálicas ✨",
        "Manguera incluida ",
        "Techo desmontable ",
        "Recipiente para aceite 🪔",
        "Ruedas para fácil traslado ",
        "Pintado al horno (pintura electroestática) ",
        "Garantía real de fábrica ",
      ],
    price: "1500",
    images:
      [
        "assets/images/productos/parrilla con manija/WhatsApp Image 2026-07-27 at 17.57.45.jpeg",
        
      ]
  },
  {
    id: 15,
    slug: "broastera-comun",
    category: "broasteras",
    name: "Brostera de dos ollas y bandeja",
    tagline: "Broastera Industrial",
    description:
      "Medidas 107cm de largo 50cm de ancho 84cm de alto ",
    features:
      [
        "Freidora de papas 🍟 y pollo 🍗 ",
        "Garantía real de fábrica ",
        "Ollas N° 30 🫕 de 12 litros 🪔 ",
        "Canastas de acero galvanizado ✨",
        "Bandeja de acero inoxidable 🧑‍🍳🍳 ",
        "Mesa de acero inoxidable ✨",
        "Llaves metálicas",
        "Mangos cromados ✨ ",
        "Manguera de gas incluida ✅",
        "Ruedas para fácil traslado",
        "Garantía real de fábrica ",
      ],
    price: "970",
    images:
      [
        "assets/images/productos/broastera/480489485_1131992545324579_2513737581702350546_n.jpg",
        "assets/images/productos/broastera/480034230_505775025553473_154764202765139959_n.jpg",
        "assets/images/productos/broastera/480540330_1134614561240542_5780943342564621698_n.jpg",
        "assets/images/productos/broastera/480753696_988540676484039_3108202503304330452_n.jpg",

      ]
  },
  {
    id: 16,
    slug: "cocina-industrial",
    category: "cocinas",
    name: "Cocina Industrial",
    tagline: "Cocina Industrial",
    description:
      "Excelente para negocios, restaurantes, etc. Medidas 50cm de largo 50cm de ancho 60cm de alto",
    features:
      [
        "Quemador fundido tipo turbina 🔥🔥",
        "Llave metálica ✨",
        "Estructura angular reforzado 1½ plg",
        "Parrilla desmontable",
        "Bandeja de acero galvanizado inoxidable ✨ ",
        "Pintado al horno (pintura electroestática)",
      ],
    price: "350",
    images:
      [
        "assets/images/productos/cocina de un quemador/438077022_1530921217859373_9149212280705639111_n.jpg",
        "assets/images/productos/cocina de un quemador/415946653_422105280645531_5233142929289666474_n.jpg",
        "assets/images/productos/cocina de un quemador/438077260_1000062158531252_4694532240960868789_n.jpg",
        "assets/images/productos/cocina de un quemador/438079718_840750514774190_881255071790373870_n.jpg",
        "assets/images/productos/cocina de un quemador/438080069_1588020408738460_6199832191262273057_n.jpg",
      ]
  },
  {
    id: 17,
    slug: "cocina-grande",
    category: "cocinas",
    name: "Cocina grande de 2 quemadores",
    tagline: "cocina Industrial",
    description:
      "Medidas 107cm de largo 50cm de ancho 84cm de alto ",
    features:
      [
        "Freidora de papas 🍟 y pollo 🍗 ",
        "Garantía real de fábrica ",
        "Ollas N° 30 🫕 de 12 litros 🪔 ",
        "Canastas de acero galvanizado ✨",
        "Bandeja de acero inoxidable 🧑‍🍳🍳 ",
        "Mesa de acero inoxidable ✨",
        "Llaves metálicas",
        "Mangos cromados ✨ ",
        "Manguera de gas incluida ✅",
        "Ruedas para fácil traslado",
        "Garantía real de fábrica ",
      ],
    price: "970",
    images:
      [
        "assets/images/productos/cocina grande de 2 quemadores/WhatsApp Image 2026-07-27 at 18.08.04 (1).jpeg",
        "assets/images/productos/cocina grande de 2 quemadores/WhatsApp Image 2026-07-27 at 18.08.04.jpeg",
      ]
  },
];
