import restoLogoImg from "./assets/restologo.svg";

export default () => {
  const content = document.querySelector("#content");

  const homeContainer = document.createElement("div");
  homeContainer.setAttribute("id", "home-container");

  const restoName = document.createElement("h1");
  restoName.textContent = "Sutta's Resto";

  const restoLogo = document.createElement("img");
  restoLogo.setAttribute("id", "resto-logo");
  restoLogo.src = restoLogoImg;

  const contactButton = document.createElement("button");
  contactButton.textContent = "Contact Us";

  const restoAddress = document.createElement("p");
  restoAddress.textContent =
    "1234 Elm Street, Apt 5B, Springfield, IL 62701, USA";

  const restoContact = document.createElement("p");
  restoContact.textContent = "(555) 123-4567";

  homeContainer.appendChild(restoLogo);
  homeContainer.appendChild(restoName);
  homeContainer.appendChild(contactButton);
  homeContainer.appendChild(restoAddress);
  homeContainer.appendChild(restoContact);

  content.appendChild(homeContainer);
};
