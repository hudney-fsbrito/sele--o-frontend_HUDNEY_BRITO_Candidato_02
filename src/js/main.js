import { Navbar, initNavbar } from "../components/navbar/navbar.js";
import { Hero } from "../components/herosection/hero.js";
// import { Footer } from "../components/footer/footer.js";

// Renderiza Navbar
document.querySelector("#navbar").innerHTML = Navbar();
initNavbar();

//Renderiza Hero Section
document.getElementById("hero").innerHTML = Hero();

// document.querySelector("#footer").innerHTML = Footer();
