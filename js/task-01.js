"use strict";

// Homework
const listOfLi = document.querySelectorAll("li.item");
console.log(`${listOfLi.length}`);

listOfLi.forEach((li) => {
  console.log(li.querySelector("h2").textContent);
  console.log(li.querySelectorAll("li").length);
});
