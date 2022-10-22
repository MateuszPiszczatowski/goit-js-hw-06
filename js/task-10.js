"use strict";

// Given code
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

// Homework
function getNumberOfBoxes() {
  const value = document.querySelector('* [type="number"]').value;
  const max = Number(document.querySelector('* [type="number"]').getAttribute("max"));
  const min = Number(document.querySelector('* [type="number"]').getAttribute("min"));
  if (value < min) return min;
  if (value > max) return max;
  return value;
}

function createBoxes() {
  destroyBoxes();
  const target = document.querySelector("#boxes");
  const boxes = [];
  for (let i = 0; i < getNumberOfBoxes(); i++) {
    const box = document.createElement("div");
    box.style.width = 30 + i * 10 + "px";
    box.style.height = 30 + i * 10 + "px";
    box.style.backgroundColor = getRandomHexColor();
    boxes.push(box);
  }
  target.append(...boxes);
}

function destroyBoxes() {
  document.querySelector("#boxes").innerHTML = "";
}

document.querySelector("[data-create]").addEventListener("click", createBoxes);
document.querySelector("[data-destroy]").addEventListener("click", destroyBoxes);
