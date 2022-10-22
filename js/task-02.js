"use strict";

// Given code
const ingredients = ["Potatoes", "Mushrooms", "Garlic", "Tomatos", "Herbs", "Condiments"];

// Homework
const listItems = [];
ingredients.forEach((ingredient) => {
  const listItem = document.createElement("li");
  listItem.textContent = ingredient;
  listItems.push(listItem);
});

document.querySelector("#ingredients").append(...listItems);
