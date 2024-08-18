export default () => {
  const content = document.querySelector("#content");

  const aboutContainer = document.createElement("div");
  aboutContainer.setAttribute("id", "about-container");

  const aboutTitle = document.createElement("h1");
  aboutTitle.textContent = "About Sutta's Resto";

  const aboutDetails = document.createElement("p");
  aboutDetails.innerHTML =
    "Welcome to Sutta's Resto, where culinary tradition meets modern dining! Nestled in the heart of Cebu City, Sutta's Resto is more than just a place to eat—it's a destination for food lovers seeking an exceptional dining experience.<br>Founded in 2024, Sutta's Resto was born out of a passion for bringing people together over great food. Our menu is a carefully crafted selection of dishes that celebrate the best of Italian, American, and Fusion flavors. From classic favorites to innovative creations, each plate is designed to excite your palate and leave you craving more. <br>At Sutta's Resto, we believe in using only the freshest ingredients, sourced locally whenever possible. Our chefs take pride in every dish they prepare, ensuring that every bite is a perfect balance of taste and texture. Whether you're here for a casual meal with friends, a special occasion, or a quiet dinner for two, you'll find a warm and inviting atmosphere that makes you feel right at home.<br> But it's not just about the food—it's about the experience. Our team is dedicated to providing top-notch service, ensuring that your visit to Sutta's Resto is nothing short of memorable. From the moment you walk through our doors to your last bite of dessert, we strive to make every moment special. <br>Thank you for choosing Sutta's Resto. We look forward to serving you soon!";

  aboutContainer.appendChild(aboutTitle);
  aboutContainer.appendChild(aboutDetails);

  content.appendChild(aboutContainer);
};
