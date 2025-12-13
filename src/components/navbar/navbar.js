export function Navbar() {
  return `
    <nav class="navbar" data-test="navbar-test" role="navigation">
       <div class="navbar-top">
        <div class="navbar-logo">
            <img src="/src/assets/img/hotel-logo.png" alt="Logo" />
        </div>

        <button class="navbar-toggle" id="navbar-toggle" aria-label="Abrir menu">
            <img src="/src/assets/icons/menu.svg" alt="Menu" />
        </button>
      </div>
      <ul class="navbar-menu" id="navbar-menu">
          <li><a href="/src/index.html">Home</a></li>
          <li><a href="/src/pages/sobre/sobre.html">Sobre</a></li>
          <li><a href="/src/pages/depoimentos/depoimentos.html">Depoimentos</a></li>
          <li><a href="/src/pages/contato/contato.html">Contato</a></li>
      </ul>
    </nav>
  `;
}

export function initNavbar() {
  const toggle = document.getElementById("navbar-toggle");
  const menu = document.getElementById("navbar-menu");

  if (!toggle || !menu) return;

  toggle.addEventListener("click", () => {
    menu.classList.toggle("active");
  });
}
