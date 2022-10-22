"use strict";

// Homework
const counter = {
  counterValue: 0,
  htmlObject: document.querySelector("#value"),
  updateCounter() {
    this.htmlObject.textContent = this.counterValue;
  },
  increaseCounter() {
    this.counterValue++;
    this.updateCounter();
  },
  decreaseCounter() {
    this.counterValue--;
    this.updateCounter();
  },
};

document
  .querySelector('button[data-action ="increment"]')
  .addEventListener("mouseup", counter.increaseCounter.bind(counter));

document
  .querySelector('button[data-action ="decrement"]')
  .addEventListener("mouseup", counter.decreaseCounter.bind(counter));
