/* =========================================================
   HELLMET — Datos de productos
   Reemplaza estos datos por el catálogo real cuando lo tengas.
   Cada producto necesita: id, slug, name, tagline, description,
   features (lista), price y la cantidad de fotos del carrusel.
   ========================================================= */

const PRODUCTS = [
  {
    id: 1,
    slug: "raptor-x1",
    name: "Raptor X1",
    tagline: "Integral deportivo",
    description:
      "Casco integral pensado para uso urbano y ruta. Carcasa en policarbonato inyectado con doble densidad de EPS para una absorción de impacto progresiva.",
    features: [
      "Carcasa en policarbonato ABS",
      "Visor antirrayas con tratamiento UV",
      "Ventilación frontal y de extracción trasera",
      "Interior desmontable y lavable",
      "Homologación ECE 22.06",
    ],
    price: "450",
    images: [
      "assets/file_00000000d078720e9261732cee3a26f4.png"
      ,"assets/Screenshot_20260630-155927.png"
    ],
  },
  {
    id: 2,
    slug: "sentinel-modular",
    name: "Sentinel Modular",
    tagline: "Modular abatible",
    description:
      "Modelo modular con mentonera abatible, ideal para quienes alternan entre conducción deportiva y uso diario. Doble homologación integral y jet.",
    features: [
      "Mentonera abatible con doble cierre de seguridad",
      "Sistema Pinlock incluido",
      "Visor solar interno",
      "Reducción de ruido aerodinámico",
      "Homologación ECE 22.06",
    ],
    price: "620",
    photos: 3,
  },
  {
    id: 3,
    slug: "trailblazer-off",
    name: "Trailblazer Off",
    tagline: "Cross / off-road",
    description:
      "Diseñado para terrenos exigentes. Visera larga ajustable, mentonera ventilada y ajuste ergonómico para uso prolongado en pie sobre la moto.",
    features: [
      "Visera ajustable en 3 posiciones",
      "Mentonera con ventilación extendida",
      "Compatible con gafas de motocross",
      "Espuma interior de secado rápido",
      "Peso reducido en fibra de vidrio",
    ],
    price: "380",
    images: [
      "assets/ChatGPT Image 18 jun 2026, 04_59_46 p.m..png"
      ,"assets/Screenshot_20260630-155927.png"
    ],
  },
  {
    id: 4,
    slug: "urban-jet",
    name: "Urban Jet",
    tagline: "Jet urbano",
    description:
      "Casco jet ligero para trayectos cortos en ciudad. Diseño minimalista con visor abatible integrado y ajuste rápido de correa.",
    features: [
      "Visor abatible integrado",
      "Hebilla de ajuste rápido",
      "Carcasa ligera en ABS",
      "Interior antialérgico",
      "Disponible en 5 colores",
    ],
    price: "210",
    photos: 3,
  },
  {
    id: 5,
    slug: "apex-carbon",
    name: "Apex Carbon",
    tagline: "Integral de competición",
    description:
      "Gama alta en fibra de carbono para pista y competición. Aerodinámica optimizada en túnel de viento y sistema de ventilación de alto flujo.",
    features: [
      "Carcasa en fibra de carbono 3K",
      "Sistema de ventilación de alto flujo",
      "Interior extraíble con emergency release",
      "Anclajes para sistema de comunicación",
      "Homologación ECE 22.06 y FIM",
    ],
    price: "980",
    photos: 3,
  },
  {
    id: 6,
    slug: "scout-kids",
    name: "Scout Kids",
    tagline: "Infantil",
    description:
      "Casco infantil con los mismos estándares de seguridad de la línea adulta, en un formato liviano y con cierres simplificados.",
    features: [
      "Peso reducido para uso infantil",
      "Cierre magnético de fácil manejo",
      "Interior hipoalergénico",
      "Colores y gráficos llamativos",
      "Homologación ECE 22.06",
    ],
    price: "150",
    photos: 3,
  },
];
