"use strict";

// Homework
function changeFontSize(object, size) {
  object.style.fontSize = size + "px";
}

const input = document.querySelector("#font-size-control");
input.value = 16;

input.addEventListener("input", (event) => {
  const target = document.querySelector("#text");
  changeFontSize(target, event.currentTarget.value);
});
