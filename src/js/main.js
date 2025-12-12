import { Navbar, initNavbar } from "../components/navbar/navbar.js";
import { Hero } from "../components/herosection/hero.js";
import { Gallery, loadGalleryImages } from "../components/gallery/gallery.js";
// import { Footer } from "../components/footer/footer.js";

// Renderiza Navbar
document.querySelector("#navbar").innerHTML = Navbar();
initNavbar();

//Renderiza Hero Section
document.getElementById("hero").innerHTML = Hero();

// Renderiza Gallery dentro da MAIN
document.querySelector(".intro").insertAdjacentHTML("afterend", Gallery());
loadGalleryImages();


// document.querySelector("#footer").innerHTML = Footer();
