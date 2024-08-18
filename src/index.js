import "./style.css";
import home from "./home.js";
import menu from "./menu.js";
import about from "./about.js";

function clearContent() {
  const content = document.getElementById("content");
  content.innerHTML = "";
}

function loadHome() {
  clearContent();
  home();
}

function loadMenu() {
  clearContent();
  menu();
}

function loadAbout() {
  clearContent();
  about();
}

loadHome();

const tabs = document.querySelectorAll(".tab");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const tabId = tab.id;
    switch (tabId) {
      case "home":
        loadHome();
        break;
      case "menu":
        loadMenu();
        break;
      case "about":
        loadAbout();
        break;
      default:
        break;
    }
  });
});
