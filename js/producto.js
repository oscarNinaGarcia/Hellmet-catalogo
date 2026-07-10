/* =========================================================
   HELLMET — Página de producto (terciaria)
   Cada página HTML de producto define, ANTES de incluir este
   archivo, una línea como:
     const CURRENT_PRODUCT = "horno-4-latas";
   Este script lee esa variable y arma el resto solo.
   ========================================================= */

const state = {
  product: null,
  slideIndex: 0,
  dragging: false,
  dragStartX: 0,
  viewportWidth: 0,
};

const SLIDE_PALETTES = [
  ["#2A2E34", "#1B1D21"],
  ["#33261D", "#1B1D21"],
  ["#1D2A28", "#1B1D21"],
];

function money(price) {
  return `$${price}`;
}

function renderProductPage() {
  const product = PRODUCTS.find((p) => p.slug === CURRENT_PRODUCT);
  if (!product) return;
  state.product = product;
  state.slideIndex = 0;

  document.title = `HELLMET — ${product.name}`;
  document.getElementById("detail-eyebrow").textContent = product.tagline;
  document.getElementById("detail-name").textContent = product.name;
  document.getElementById("detail-description").textContent = product.description;

  document.getElementById("detail-features").innerHTML = product.features
    .map((f) => `<li>${f}</li>`)
    .join("");

  document.getElementById("detail-price").textContent = money(product.price);

  const linkInput = document.getElementById("product-link");
  linkInput.value = location.origin + location.pathname;
  document.getElementById("copy-feedback").textContent = "";

  renderCarousel();
}

/* ---------- Carrusel deslizable ---------- */

function renderCarousel() {
  const p = state.product;
  const track = document.getElementById("carousel-track");
  const dots = document.getElementById("carousel-dots");
  const total = p.images.length;

  track.innerHTML = p.images.map((src, i) => {
    const [c1, c2] = SLIDE_PALETTES[(p.id + i) % SLIDE_PALETTES.length];
    return `
      <div class="carousel-slide">
        <img
          src="${src}"
          alt="${p.name} — foto ${i + 1} de ${total}"
          loading="${i === 0 ? "eager" : "lazy"}"
          draggable="false"
          onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';"
        >
        <div class="carousel-slide-fallback" style="background: linear-gradient(150deg, ${c1}, ${c2});">
          <span class="carousel-slide-label">${p.name}</span>
          <span class="carousel-slide-count">Foto ${i + 1} / ${total}</span>
        </div>
      </div>
    `;
  }).join("");

  dots.innerHTML = p.images.map((_, i) => `
    <button class="carousel-dot${i === state.slideIndex ? " is-active" : ""}" data-index="${i}" aria-label="Ir a la foto ${i + 1}"></button>
  `).join("");

  dots.querySelectorAll(".carousel-dot").forEach((dot) => {
    dot.addEventListener("click", () => {
      state.slideIndex = Number(dot.dataset.index);
      updateCarouselPosition();
    });
  });

  updateCarouselPosition();
}

function updateCarouselPosition() {
  const track = document.getElementById("carousel-track");
  track.style.transform = `translateX(-${state.slideIndex * 100}%)`;
  document.querySelectorAll(".carousel-dot").forEach((dot, i) => {
    dot.classList.toggle("is-active", i === state.slideIndex);
  });
}

function stepCarousel(delta) {
  const total = state.product.images.length;
  state.slideIndex = (state.slideIndex + delta + total) % total;
  updateCarouselPosition();
}

/* -- Arrastre con dedo o mouse (sin botones) -- */

function getPointerX(e) {
  return e.touches ? e.touches[0].clientX : e.clientX;
}

function initDrag() {
  const viewport = document.getElementById("carousel-viewport");
  const track = document.getElementById("carousel-track");

  function onDown(e) {
    state.dragging = true;
    state.dragStartX = getPointerX(e);
    state.viewportWidth = viewport.clientWidth;
    track.style.transition = "none";
    viewport.classList.add("is-dragging");
  }

  function onMove(e) {
    if (!state.dragging) return;
    const dx = getPointerX(e) - state.dragStartX;
    const basePx = -state.slideIndex * state.viewportWidth;
    track.style.transform = `translateX(${basePx + dx}px)`;
  }

  function onUp(e) {
    if (!state.dragging) return;
    state.dragging = false;
    viewport.classList.remove("is-dragging");
    track.style.transition = "";

    const dx = (e.changedTouches ? e.changedTouches[0].clientX : e.clientX) - state.dragStartX;
    const threshold = state.viewportWidth * 0.18;

    if (dx < -threshold) stepCarousel(1);
    else if (dx > threshold) stepCarousel(-1);
    else updateCarouselPosition();
  }

  // Mouse
  viewport.addEventListener("mousedown", onDown);
  window.addEventListener("mousemove", onMove);
  window.addEventListener("mouseup", onUp);

  // Touch (dedo)
  viewport.addEventListener("touchstart", onDown, { passive: true });
  viewport.addEventListener("touchmove", onMove, { passive: true });
  viewport.addEventListener("touchend", onUp);

  // Evita que el navegador arrastre las imágenes como si fueran un archivo
  viewport.addEventListener("dragstart", (e) => e.preventDefault());
}

/* ---------- Copiar enlace ---------- */

async function copyProductLink() {
  const input = document.getElementById("product-link");
  const feedback = document.getElementById("copy-feedback");
  try {
    await navigator.clipboard.writeText(input.value);
  } catch (err) {
    input.select();
    document.execCommand("copy");
  }
  feedback.textContent = "¡Enlace copiado!";
  window.clearTimeout(copyProductLink._t);
  copyProductLink._t = window.setTimeout(() => {
    feedback.textContent = "";
  }, 2000);
}

/* ---------- Inicio ---------- */

document.addEventListener("DOMContentLoaded", () => {
  renderProductPage();
  initDrag();
  document.getElementById("copy-link-btn").addEventListener("click", copyProductLink);
});
