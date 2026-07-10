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
    image: "assets/images/categorias/parrillas.jpg",
    description:
      "Parrillas a gas, carbón y eléctricas para uso doméstico, comercial e industrial.",
  },
  {
    slug: "pizzeros",
    name: "Pizzeros",
    image: "assets/pizzero1.png",
    description:
      "Hornos y equipos especializados para la elaboración de pizzas en volumen.",
  },
  {
    slug: "cocinas",
    name: "Cocinas",
    image: "assets/images/categorias/cocinas.jpg",
    description:
      "Cocinas industriales multi-hornilla para restaurantes, hoteles y comedores.",
  },
];

const PRODUCTS = [
  {
    id: 1,
    slug: "horno-4-latas",
    category: "hornos",
    name: "Horno de 4 Latas",
    tagline: "Horno industrial",
    description:
      "Horno de piso ideal para panaderías pequeñas y emprendimientos. Cámara de cocción uniforme con control independiente de temperatura superior e inferior.",
    features: [
      "Capacidad para 4 latas estándar",
      "Control de temperatura independiente por cámara",
      "Puerta con doble vidrio térmico",
      "Estructura en acero inoxidable",
      "Sistema de inyección de vapor",
    ],
    price: "890",
    images: [
      "assets/horno1.png",
      "assets/horno2.png",
      "assets/horno3.png",
      "assets/horno4.png",
      "assets/horno5.png",
      "assets/horno6.png",
      "assets/horno7.png",
      "assets/horno8.png",
      
    ],
  },
  {
    id: 2,
    slug: "horno-8-latas",
    category: "hornos",
    name: "Horno de 8 Latas",
    tagline: "Horno industrial",
    description:
      "Versión de mayor capacidad para producción media. Mantiene la cocción uniforme en toda la cámara gracias a su sistema de convección de aire.",
    features: [
      "Capacidad para 8 latas estándar",
      "Sistema de convección de aire caliente",
      "Panel de control digital",
      "Aislamiento térmico reforzado",
      "Ruedas industriales con freno",
    ],
    price: "1450",
    images: [
      "assets/images/productos/horno-8-latas/1.jpg",
      "assets/images/productos/horno-8-latas/2.jpg",
      "assets/images/productos/horno-8-latas/3.jpg",
    ],
  },
  {
    id: 3,
    slug: "horno-convector",
    category: "hornos",
    name: "Horno Convector Digital",
    tagline: "Horno convector",
    description:
      "Horno convector de alta gama con panel digital programable, pensado para pastelerías que buscan precisión en cada horneada.",
    features: [
      "Panel digital programable",
      "10 programas de cocción preestablecidos",
      "Ventilador de convección de doble velocidad",
      "Iluminación interior LED",
      "Capacidad para 6 bandejas GN",
    ],
    price: "1980",
    // Nota: este producto todavía no tiene página terciaria creada.
    // Cuando la crees (producto-horno-convector.html), agrega sus fotos aquí.
    images: [
      "assets/images/productos/horno-convector/1.jpg",
      "assets/images/productos/horno-convector/2.jpg",
      "assets/images/productos/horno-convector/3.jpg",
    ],
  },
  {
    id: 4,
    slug: "parrilla-a-gas",
    category: "parrillas",
    name: "Parrilla a Gas Doble",
    tagline: "Parrilla a gas",
    description:
      "Parrilla de dos quemadores a gas para uso comercial, con parrilla de hierro fundido y sistema de recolección de grasa.",
    features: [
      "Dos quemadores independientes",
      "Parrilla de hierro fundido",
      "Bandeja recolectora de grasa extraíble",
      "Encendido electrónico",
      "Estructura en acero inoxidable",
    ],
    price: "540",
    // Nota: este producto todavía no tiene página terciaria creada.
    images: [
      "assets/images/productos/parrilla-a-gas/1.jpg",
      "assets/images/productos/parrilla-a-gas/2.jpg",
      "assets/images/productos/parrilla-a-gas/3.jpg",
    ],
  },
  {
    id: 5,
    slug: "parrilla-carbon",
    category: "parrillas",
    name: "Parrilla a Carbón Industrial",
    tagline: "Parrilla a carbón",
    description:
      "Parrilla de carbón de gran formato para restaurantes y eventos, con altura de brasas ajustable para un control preciso de la cocción.",
    features: [
      "Altura de brasas ajustable",
      "Rejilla cromada de gran superficie",
      "Cajón para cenizas removible",
      "Estructura reforzada para uso intensivo",
      "Ruedas de traslado",
    ],
    price: "720",
    // Nota: este producto todavía no tiene página terciaria creada.
    images: [
      "assets/images/productos/parrilla-carbon/1.jpg",
      "assets/images/productos/parrilla-carbon/2.jpg",
      "assets/images/productos/parrilla-carbon/3.jpg",
    ],
  },
  {
    id: 6,
    slug: "parrilla-electrica",
    category: "parrillas",
    name: "Parrilla Eléctrica Compacta",
    tagline: "Parrilla eléctrica",
    description:
      "Parrilla eléctrica de sobremesa, ideal para espacios reducidos donde no se puede instalar gas o carbón.",
    features: [
      "Control de temperatura por termostato",
      "Superficie antiadherente",
      "Bandeja de grasa desmontable",
      "Bajo consumo eléctrico",
      "Fácil limpieza",
    ],
    price: "310",
    // Nota: este producto todavía no tiene página terciaria creada.
    images: [
      "assets/images/productos/parrilla-electrica/1.jpg",
      "assets/images/productos/parrilla-electrica/2.jpg",
      "assets/images/productos/parrilla-electrica/3.jpg",
    ],
  },
];
