"use strict";

// Given code
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

// Homework
const changeColorButton = document.querySelector(".change-color");
changeColorButton.addEventListener("click", (event) => {
  const backgroundColor = getRandomHexColor();
  document.querySelector("body").style.backgroundColor = backgroundColor;
  document.querySelector(".color").textContent = backgroundColor;
});
