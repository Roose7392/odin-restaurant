import burgerSrc from "./images/burger.jpg";
import noodleSrc from "./images/noodles.jpg";
import pancakesSrc from "./images/pancakes.jpg";
import pastaSrc from "./images/pasta.jpg";
import pizzaSrc from "./images/pizza.jpg";
import steakSrc from "./images/steak.jpg";

export default function loadMenuPage() {
  const menu = [
    {
      name: "Burger",
      ingredients: [
        "patty",
        "lettuce",
        "tomatoes",
        "onions",
        "salad",
        "pickles",
      ],
      img: burgerSrc,
    },
    {
      name: "Noodles",
      ingredients: ["soy sauce", "dough", "red pepper", "onions", "chicken"],
      img: noodleSrc,
    },
    {
      name: "Pancakes",
      ingredients: ["walnut", "maple syrup", "butter"],
      img: pancakesSrc,
    },
    {
      name: "Pasta",
      ingredients: ["fettuccine", "mushrooms", "parmesan", "onions", "chicken"],
      img: pastaSrc,
    },
    {
      name: "Pizza",
      ingredients: ["pepperoni", "paprika", "chile"],
      img: pizzaSrc,
    },
    {
      name: "Steak",
      ingredients: ["beef", "steak sauce", "fries"],
      img: steakSrc,
    },
  ];
  const contentDiv = document.getElementById("content");
  while (contentDiv.firstChild) {
    contentDiv.removeChild(contentDiv.firstChild);
  }
  const container = document.createElement("div");
  container.classList.add("container");
  container.classList.add("flex");
  menu.forEach((item) => {
    const itemDiv = document.createElement("div");
    itemDiv.classList.add("menu-item");
    const heading = document.createElement("h3");
    const ingredients = document.createElement("p");
    const img = new Image();
    img.classList.add("menu-image");
    ingredients.textContent = item.ingredients.join(", ");
    heading.textContent = item.name;
    img.src = item.img;
    [heading, img, ingredients].forEach((i) => itemDiv.appendChild(i));

    container.appendChild(itemDiv);
  });

  contentDiv.appendChild(container);
}
