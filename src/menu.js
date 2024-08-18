import garlicParmesanWings from "./assets/Garlic Parmesan Wings.svg";
import bruschetta from "./assets/Bruschetta.svg";
import spinachArchitokeDip from "./assets/Spinach Artichoke Dip.svg";
import caesarSalad from "./assets/Caesar Salad.svg";
import greekSalad from "./assets/Greek Salad.svg";
import capreseSalad from "./assets/Caprese Salad.svg";
import grilledRibeyeSteak from "./assets/Grilled Ribeye Steak.svg";
import panSearedSalmon from "./assets/Pan-Seared Salmon.svg";
import pastaPrimavera from "./assets/Pasta Primavera.svg";
import chickenAlfredo from "./assets/Chicken Alfredo.svg";
import chocolateLavaCake from "./assets/Chocolate Lava Cake.svg";
import tiramisu from "./assets/Tiramisu.svg";
import cheesecake from "./assets/Cheesecake.svg";
import softDrinks from "./assets/Soft Drinks.svg";
import icedTea from "./assets/Iced Tea.svg";
import coffee from "./assets/Coffee.svg";
import wineByTheGlass from "./assets/Wine by the Glass.svg";
import craftBeers from "./assets/Craft Beers.svg";

export default () => {
  const content = document.querySelector("#content");

  const menuContainer = document.createElement("div");
  menuContainer.setAttribute("id", "menu-container");

  const menuTitle = document.createElement("h1");
  menuTitle.setAttribute("id", "menu-title");
  menuTitle.textContent = "We Serve";

  menuContainer.appendChild(menuTitle);

  const menuItemContainer = document.createElement("div");
  menuItemContainer.setAttribute("id", "menu-card");

  let menu = [
    {
      category: "Appetizers",
      img: garlicParmesanWings,
      name: "Garlic Parmesan Wings",
      price: "$8.99",
      description:
        "Crispy chicken wings tossed in a rich garlic parmesan sauce, served with a side of ranch.",
    },
    {
      category: "Appetizers",
      img: bruschetta,
      name: "Bruschetta",
      price: "$6.99",
      description:
        "Freshly toasted baguette slices topped with a mix of diced tomatoes, basil, garlic, and balsamic glaze.",
    },
    {
      category: "Appetizers",
      img: spinachArchitokeDip,
      name: "Spinach Artichoke Dip",
      price: "$7.99",
      description:
        "Creamy blend of spinach, artichokes, and cheese, served with tortilla chips.",
    },
    {
      category: "Salads",
      img: caesarSalad,
      name: "Caesar Salad",
      price: "$9.99",
      description:
        "Crisp romaine lettuce tossed with Caesar dressing, croutons, and Parmesan cheese.",
    },
    {
      category: "Salads",
      img: greekSalad,
      name: "Greek Salad",
      price: "$10.99",
      description:
        "Mixed greens with feta cheese, olives, cucumbers, tomatoes, and a tangy Greek dressing.",
    },
    {
      category: "Salads",
      img: capreseSalad,
      name: "Caprese Salad",
      price: "$11.99",
      description:
        "Slices of fresh mozzarella, tomatoes, and basil, drizzled with olive oil and balsamic reduction.",
    },
    {
      category: "Main Courses",
      img: grilledRibeyeSteak,
      name: "Grilled Ribeye Steak",
      price: "$24.99",
      description:
        "12 oz. ribeye steak grilled to perfection, served with garlic mashed potatoes and seasonal vegetables.",
    },
    {
      category: "Main Courses",
      img: panSearedSalmon,
      name: "Pan-Seared Salmon ",
      price: "$19.99",
      description:
        "Fresh salmon fillet, pan-seared and served with quinoa and roasted asparagus.",
    },
    {
      category: "Main Courses",
      img: pastaPrimavera,
      name: "Pasta Primavera",
      price: "$15.99",
      description:
        "A mix of fresh vegetables sautéed with garlic and olive oil, tossed with penne pasta.",
    },
    {
      category: "Main Courses",
      img: chickenAlfredo,
      name: "Chicken Alfredo",
      price: "$17.99",
      description:
        "Grilled chicken breast served over fettuccine in a creamy Alfredo sauce.",
    },
    {
      category: "Desserts",
      img: chocolateLavaCake,
      name: "Chocolate Lava Cake",
      price: "$6.99",
      description:
        "Warm chocolate cake with a molten chocolate center, served with vanilla ice cream.",
    },
    {
      category: "Desserts",
      img: tiramisu,
      name: "Tiramisu",
      price: "$5.99",
      description:
        "Classic Italian dessert with layers of espresso-soaked ladyfingers, mascarpone cheese, and cocoa powder.",
    },
    {
      category: "Desserts",
      img: cheesecake,
      name: "Cheesecake",
      price: "$5.99",
      description:
        "Creamy New York-style cheesecake with a graham cracker crust, served with a berry compote.",
    },
    {
      category: "Beverages",
      img: softDrinks,
      name: "Soft Drinks",
      price: "$2.99",
      description: "Cola, Diet Cola, Root Beer.",
    },
    {
      category: "Beverages",
      img: icedTea,
      name: "Iced Tea - $2.99",
      price: "$2.99",
      description: "Freshly brewed and served with a lemon wedge.",
    },
    {
      category: "Beverages",
      img: coffee,
      name: "Coffee",
      price: "$2.99",
      description: "Freshly brewed coffee, regular or decaf.",
    },
    {
      category: "Beverages",
      img: wineByTheGlass,
      name: "Wine by the Glass",
      price: "$7.99",
      description: "Red or white wine selections.",
    },
    {
      category: "Beverages",
      img: craftBeers,
      name: "Craft Beers",
      price: "$5.99",
      description: "A rotating selection of local craft beers.",
    },
  ];

  const groupedCategory = menu.reduce((acc, item) => {
    if (!acc[item.category]) {
      acc[item.category] = [];
    }
    acc[item.category].push(item);
    return acc;
  }, {});

  for (const category in groupedCategory) {
    const menuCategory = document.createElement("h2");
    menuCategory.textContent = category;
    menuCategory.setAttribute(
      "id",
      `${category.toLowerCase().replace(/\s+/g, "-")}`
    );
    menuItemContainer.appendChild(menuCategory);

    const menuCategoryContainer = document.createElement("div");
    menuCategoryContainer.setAttribute(
      "class",
      `${category.toLowerCase().replace(/\s+/g, "-")}`
    );

    groupedCategory[category].forEach((item) => {
      const menuItemCard = document.createElement("div");
      menuItemCard.setAttribute("class", "menu-item");

      const menuItemImg = document.createElement("img");
      menuItemImg.setAttribute("class", "menu-item-img");
      menuItemImg.src = item.img;

      const menuItemName = document.createElement("h3");
      menuItemName.textContent = item.name;

      const menuItemPrice = document.createElement("p");
      menuItemPrice.textContent = item.price;

      const menuItemDescription = document.createElement("p");
      menuItemDescription.textContent = item.description;

      menuItemCard.appendChild(menuItemImg);
      menuItemCard.appendChild(menuItemName);
      menuItemCard.appendChild(menuItemPrice);
      menuItemCard.appendChild(menuItemDescription);

      menuCategoryContainer.appendChild(menuItemCard);
      menuItemContainer.appendChild(menuCategoryContainer);
      menuContainer.appendChild(menuItemContainer);
      content.appendChild(menuContainer);
    });
  }
};
