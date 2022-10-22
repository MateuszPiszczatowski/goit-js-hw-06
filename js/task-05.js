"use strict";

// Homework
const input = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

input.addEventListener("input", (event) => {
  const currentText = event.currentTarget.value;
  output.textContent = currentText.length > 0 ? currentText : "Anonymous";
});
