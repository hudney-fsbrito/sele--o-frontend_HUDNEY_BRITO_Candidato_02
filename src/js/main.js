import { Navbar, initNavbar } from "../components/navbar/navbar.js";
import { Hero } from "../components/herosection/hero.js";
import { Gallery, loadGalleryImages } from "../components/gallery/gallery.js";
import { initScrollAnimation } from "../js/animations/scrollAnimations.js";


// import { Footer } from "../components/footer/footer.js";

// Renderiza Navbar
console.log("MAIN.JS CARREGOU");
document.querySelector("#navbar").innerHTML = Navbar();
initNavbar();

//Renderiza Hero Section
document.getElementById("hero").innerHTML = Hero();

// Renderiza Gallery dentro da MAIN
document.querySelector(".intro").insertAdjacentHTML("afterend", Gallery());
loadGalleryImages();

initScrollAnimation();

// document.querySelector("#footer").innerHTML = Footer();
