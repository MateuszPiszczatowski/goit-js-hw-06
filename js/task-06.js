"use strict";

// Homework
const input = document.querySelector("#validation-input");
input.addEventListener("blur", (event) => {
  const validLength = event.currentTarget.getAttribute("data-length");
  const currentInput = event.currentTarget.value;
  let toSet;
  let toUnset;
  if (validLength == currentInput.length) {
    toSet = "valid";
    toUnset = "invalid";
  } else {
    toSet = "invalid";
    toUnset = "valid";
  }
  if (!event.currentTarget.classList.contains(toSet)) event.currentTarget.classList.add(toSet);
  if (event.currentTarget.classList.contains(toUnset))
    event.currentTarget.classList.remove(toUnset);
});
