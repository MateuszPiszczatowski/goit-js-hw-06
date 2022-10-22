"use strict";

// Homework
function changeFontSize(object, size) {
  object.style.fontSize = size + "px";
}

const input = document.querySelector("#font-size-control");
input.addEventListener("change", (event) => {
  const target = document.querySelector("#text");
  changeFontSize(target, event.currentTarget.value);
});
