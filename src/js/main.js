import { Navbar, initNavbar } from "../components/navbar/navbar.js";
import { Hero } from "../components/herosection/hero.js";
import { Gallery, loadGalleryImages } from "../components/gallery/gallery.js";
import { initScrollAnimation } from "../js/animations/scrollAnimations.js";


// import { Footer } from "../components/footer/footer.js";

// Renderiza Navbar
console.log("MAIN.JS CARREGOU");
// Navbar
const navbarEl = document.querySelector("#navbar");
if (navbarEl) {
  navbarEl.innerHTML = Navbar();
  initNavbar();
}

//Renderiza Hero Section
const heroEl = document.getElementById("hero");
if (heroEl) {
  heroEl.innerHTML = Hero();
}


// Renderiza Gallery dentro da MAIN
const introEl = document.querySelector(".intro");
if (introEl) {
  introEl.insertAdjacentHTML("afterend", Gallery());
  loadGalleryImages();
}

initScrollAnimation();

// document.querySelector("#footer").innerHTML = Footer();
