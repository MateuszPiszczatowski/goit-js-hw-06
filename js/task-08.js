"use strict";

// Homework
const form = document.querySelector(".login-form");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const user_input = {
    email: event.currentTarget.elements["email"].value,
    password: event.currentTarget.elements["password"].value,
  };

  if (user_input.email.length === 0 || user_input.password.length === 0) {
    alert("Every field is required");
    return;
  }
  console.log(user_input);
  event.currentTarget.reset();
});
