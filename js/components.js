/* =========================================================
   HELLMET — Header y footer compartidos
   Este archivo se incluye en TODAS las páginas del sitio.
   Así el header y el footer quedan idénticos en cualquier
   página nueva que agregues: solo pon los contenedores
   <div id="site-header"></div> y <div id="site-footer"></div>
   e incluye este script.
   ========================================================= */

function renderHeader() {
  return `
    <div class="header-inner">
      <a class="brand" href="index.html">
        <span class="brand-name">HELLMET</span>
      </a>
      <div class="header-title">
        <span class="header-title-line"></span>
        <h1>Catálogo</h1>
        <span class="header-title-line"></span>
      </div>
      <div class="header-spacer" aria-hidden="true"></div>
    </div>
    <a href="index.html" class="header-logo-badge" aria-label="Ir al inicio">
      <img src="assets/file_000000004598720ea3542ff2cbdaad59.png" alt="HELLMET">
    </a>
  `;
}

function renderFooter() {
  return `
    <div class="footer-inner">
      <div class="footer-col">
        <h3>Compañía</h3>
        <p><b>HELLMET</b> Diseña y fabrica soluciones de cocción de alta calidad, desarrolladas para satisfacer las necesidades de panaderías, pastelerías, restaurantes, emprendimientos gastronómicos e industrias alimentarias, acompañando cada etapa de la producción con equipos confiables, eficientes y duraderos.</p>
      </div>
      <div class="footer-col">
        <h3>Contactos</h3>
        <p><a href="https://www.facebook.com/marketplace/profile/100088720868308/?ref=permalink&mibextid=dXMIcH">HELLMET (facebook)</a></p>
        <p><a href="https://vt.tiktok.com/ZSQbwM9An/">HELLMET (TikTok)</a></p>
        <p>60107222</p>
        <p>Av. Ejemplo 123, Ciudad</p>
      </div>
      <div class="footer-col">
        <h3>Legal</h3>
        
        <p>© <span id="footer-year"></span> HELLMET. Todos los derechos reservados.</p>
      </div>
    </div>
  `;
}

document.addEventListener("DOMContentLoaded", () => {
  const headerEl = document.getElementById("site-header");
  const footerEl = document.getElementById("site-footer");
  if (headerEl) headerEl.innerHTML = renderHeader();
  if (footerEl) {
    footerEl.innerHTML = renderFooter();
    const yearEl = document.getElementById("footer-year");
    if (yearEl) yearEl.textContent = new Date().getFullYear();
  }
});