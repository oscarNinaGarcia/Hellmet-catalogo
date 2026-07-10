/* =========================================================
   HELLMET — Páginas de categoría (secundarias)
   Cada página HTML de categoría define, ANTES de incluir este
   archivo, una línea como:
     const CURRENT_CATEGORY = "hornos";
   Este script lee esa variable y arma el resto solo.
   ========================================================= */

function renderCategoryPage() {
  const category = CATEGORIES.find((c) => c.slug === CURRENT_CATEGORY);
  if (!category) return;

  document.getElementById("category-name").textContent = category.name;
  document.getElementById("category-description").textContent = category.description;
  document.title = `HELLMET — ${category.name}`;

  const items = PRODUCTS.filter((p) => p.category === CURRENT_CATEGORY);
  const grid = document.getElementById("product-grid");

  grid.innerHTML = items.map((p) => `
    <a class="product-card" href="producto-${p.slug}.html">
      <span class="product-card-image">
        <img
          src="${p.images[0]}"
          alt="${p.name}"
          loading="lazy"
          onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';"
        >
        <span class="product-card-fallback">${p.name}</span>
      </span>
      <span class="product-card-name">${p.name}</span>
    </a>
  `).join("");
}

document.addEventListener("DOMContentLoaded", renderCategoryPage);
