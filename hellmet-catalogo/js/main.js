/* =========================================================
   HELLMET — Lógica del catálogo
   ========================================================= */

const state = {
  currentProduct: null,
  slideIndex: 0,
};

// Paletas para las diapositivas del carrusel (placeholders).
// Cuando tengas fotos reales, reemplaza renderSlide() por un <img>.
const SLIDE_PALETTES = [
  ["#2A2E34", "#1B1D21"],
  ["#33261D", "#1B1D21"],
  ["#1D2A28", "#1B1D21"],
];

function money(price) {
  return `$${price}`;
}

/* ---------- Lista de productos (parte superior) ---------- */

function renderProductList() {
  const list = document.getElementById("product-list");
  list.innerHTML = PRODUCTS.map((p) => `
    <button
      class="product-chip${state.currentProduct.id === p.id ? " is-active" : ""}"
      data-id="${p.id}"
      aria-pressed="${state.currentProduct.id === p.id}"
    >
      <span class="product-chip-thumb">${initials(p.name)}</span>
      <span class="product-chip-text">
        <span class="product-chip-name">${p.name}</span>
        <span class="product-chip-tagline">${p.tagline}</span>
      </span>
    </button>
  `).join("");

  list.querySelectorAll(".product-chip").forEach((btn) => {
    btn.addEventListener("click", () => {
      const id = Number(btn.dataset.id);
      selectProduct(id);
    });
  });
}

function initials(name) {
  return name
    .split(" ")
    .map((w) => w[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

/* ---------- Selección de producto ---------- */

function selectProduct(id) {
  const product = PRODUCTS.find((p) => p.id === id);
  if (!product) return;
  state.currentProduct = product;
  state.slideIndex = 0;
  history.replaceState(null, "", `#producto=${product.slug}`);
  renderProductList();
  renderDetail();
}

/* ---------- Detalle del producto (centro) ---------- */

function renderDetail() {
  const p = state.currentProduct;

  renderCarousel();

  document.getElementById("detail-eyebrow").textContent = p.tagline;
  document.getElementById("detail-name").textContent = p.name;
  document.getElementById("detail-description").textContent = p.description;

  const featuresEl = document.getElementById("detail-features");
  featuresEl.innerHTML = p.features
    .map((f) => `<li>${f}</li>`)
    .join("");

  document.getElementById("detail-price").textContent = money(p.price);

  const link = buildProductLink(p);
  const linkInput = document.getElementById("product-link");
  linkInput.value = link;
  document.getElementById("copy-feedback").textContent = "";
}

function buildProductLink(product) {
  const base = location.origin + location.pathname;
  return `${base}#producto=${product.slug}`;
}

/* ---------- Carrusel (izquierda) ---------- */

function renderCarousel() {
  const p = state.currentProduct;
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
  const total = state.currentProduct.images.length;
  state.slideIndex = (state.slideIndex + delta + total) % total;
  updateCarouselPosition();
}

/* ---------- Copiar enlace ---------- */

async function copyProductLink() {
  const input = document.getElementById("product-link");
  const feedback = document.getElementById("copy-feedback");
  try {
    await navigator.clipboard.writeText(input.value);
  } catch (err) {
    // Alternativa si el navegador bloquea el portapapeles.
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

function getProductFromHash() {
  const match = location.hash.match(/producto=([\w-]+)/);
  if (!match) return null;
  return PRODUCTS.find((p) => p.slug === match[1]) || null;
}

function initCatalog() {
  state.currentProduct = getProductFromHash() || PRODUCTS[0];

  renderProductList();
  renderDetail();

  document.getElementById("carousel-prev").addEventListener("click", () => stepCarousel(-1));
  document.getElementById("carousel-next").addEventListener("click", () => stepCarousel(1));
  document.getElementById("copy-link-btn").addEventListener("click", copyProductLink);

  window.addEventListener("hashchange", () => {
    const p = getProductFromHash();
    if (p && p.id !== state.currentProduct.id) {
      state.currentProduct = p;
      state.slideIndex = 0;
      renderProductList();
      renderDetail();
    }
  });
}

document.addEventListener("DOMContentLoaded", initCatalog);