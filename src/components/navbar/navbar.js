export function Navbar() {
  return `
    <nav class="navbar" data-test="navbar-test">
        <div class="navbar-logo">
            <img src="/src/assets/img/hotel-logo.png" alt="Logo" />
        </div>

        <button class="navbar-toggle" id="navbar-toggle" aria-label="Abrir menu">
            <img src="/src/assets/icons/menu.svg" alt="Menu" />
        </button>

    </nav>
    <ul class="navbar-menu" id="navbar-menu">
        <li><a href="index.html">Home</a></li>
        <li><a href="sobre.html">Sobre</a></li>
        <li><a href="depoimentos.html">Depoimentos</a></li>
        <li><a href="contato.html">Contato</a></li>
    </ul>
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
