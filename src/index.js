import loadAboutPage from "./loadAboutPage";
import loadHomePage from "./loadHomePage";
import loadMenuPage from "./loadMenuPage";

const homeButton = document.getElementById("nav-home");
const menuButton = document.getElementById("nav-menu");
const aboutButton = document.getElementById("nav-about");
homeButton.addEventListener("click", loadHomePage);
menuButton.addEventListener("click", loadMenuPage);
aboutButton.addEventListener("click", loadAboutPage);
loadHomePage();
