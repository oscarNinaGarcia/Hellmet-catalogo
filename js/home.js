/* =========================================================
   HELLMET — Página principal
   ========================================================= */

// Imágenes del carrusel automático de portada.
// Coloca tus fotos en la carpeta assets/ (o assets/images/) y pon
// la ruta en "src". El "label" queda como texto de respaldo por si
// esa imagen no se encuentra (no rompe la página).
const HERO_SLIDES = [
  { src: "assets/horno3.png", label: "Planta de producción HELLMET" },
  { src: "assets/pizzero1.png", label: "Línea de hornos industriales" },
  { src: "assets/file_00000000d078720e9261732cee3a26f4.png", label: "Parrillas para uso comercial" },
  /*{ src: "assets/images/hero/4.jpg", label: "Equipos de cocina profesional" },
  { src: "assets/images/hero/5.jpg", label: "Showroom HELLMET" },*/
];

const HERO_PALETTES = [
  ["#2A2E34", "#1B1D21"],
  ["#33261D", "#1B1D21"],
  ["#1D2A28", "#1B1D21"],
  ["#2A2420", "#1B1D21"],
  ["#20242A", "#1B1D21"],
];

const HERO_INTERVAL_MS = 4000;

const heroState = {
  index: 0,
  dragging: false,
  dragStartX: 0,
  viewportWidth: 0,
};

function renderHeroCarousel() {
  const track = document.getElementById("hero-track");
  track.innerHTML = HERO_SLIDES.map((slide, i) => {
    const [c1, c2] = HERO_PALETTES[i % HERO_PALETTES.length];
    return `
      <div class="carousel-slide">
        <img
          src="${slide.src}"
          alt="${slide.label}"
          loading="${i === 0 ? "eager" : "lazy"}"
          draggable="false"
          onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';"
        >
        <div class="carousel-slide-fallback" style="background: linear-gradient(150deg, ${c1}, ${c2});">
          <span class="carousel-slide-label">${slide.label}</span>
        </div>
      </div>
    `;
  }).join("");

  window.setInterval(() => {
    if (heroState.dragging) return;
    heroState.index = (heroState.index + 1) % HERO_SLIDES.length;
    updateHeroPosition();
  }, HERO_INTERVAL_MS);

  initHeroDrag();
}

function updateHeroPosition() {
  const track = document.getElementById("hero-track");
  track.style.transform = `translateX(-${heroState.index * 100}%)`;
}

function stepHero(delta) {
  const total = HERO_SLIDES.length;
  heroState.index = (heroState.index + delta + total) % total;
  updateHeroPosition();
}

function getHeroPointerX(e) {
  return e.touches ? e.touches[0].clientX : e.clientX;
}

function initHeroDrag() {
  const viewport = document.getElementById("hero-viewport");
  const track = document.getElementById("hero-track");

  function onDown(e) {
    heroState.dragging = true;
    heroState.dragStartX = getHeroPointerX(e);
    heroState.viewportWidth = viewport.clientWidth;
    track.style.transition = "none";
    viewport.classList.add("is-dragging");
  }

  function onMove(e) {
    if (!heroState.dragging) return;
    const dx = getHeroPointerX(e) - heroState.dragStartX;
    const basePx = -heroState.index * heroState.viewportWidth;
    track.style.transform = `translateX(${basePx + dx}px)`;
  }

  function onUp(e) {
    if (!heroState.dragging) return;
    heroState.dragging = false;
    viewport.classList.remove("is-dragging");
    track.style.transition = "";

    const endX = e.changedTouches ? e.changedTouches[0].clientX : e.clientX;
    const dx = endX - heroState.dragStartX;
    const threshold = heroState.viewportWidth * 0.18;

    if (dx < -threshold) stepHero(1);
    else if (dx > threshold) stepHero(-1);
    else updateHeroPosition();
  }

  viewport.addEventListener("mousedown", onDown);
  window.addEventListener("mousemove", onMove);
  window.addEventListener("mouseup", onUp);

  viewport.addEventListener("touchstart", onDown, { passive: true });
  viewport.addEventListener("touchmove", onMove, { passive: true });
  viewport.addEventListener("touchend", onUp);

  viewport.addEventListener("dragstart", (e) => e.preventDefault());
}

function renderCategoryGrid() {
  const grid = document.getElementById("category-grid");
  grid.innerHTML = CATEGORIES.map((cat) => `
    <a class="category-card" href="categoria-${cat.slug}.html">
      <span class="category-card-image">
        <img
          src="${cat.image}"
          alt="${cat.name}"
          onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';"
        >
        <span class="category-card-fallback">${cat.name}</span>
      </span>
      <span class="category-card-label">${cat.name}</span>
    </a>
  `).join("");
}

document.addEventListener("DOMContentLoaded", () => {
  renderHeroCarousel();
  renderCategoryGrid();
});