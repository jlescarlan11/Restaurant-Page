function createHomePage() {
  const content = document.getElementById("content");

  const headline = document.createElement("h1");
  headline.textContent = "Welcome to Our Restaurant";

  const image = document.createElement("img");
  image.src = "your-image-path.jpg";
  image.alt = "Restaurant Image";

  const description = document.createElement("p");
  description.textContent = "Enjoy our delicious meals in a cozy environment.";

  content.appendChild(headline);
  content.appendChild(image);
  content.appendChild(description);
}

createHomePage();
