const PASSWORD_REGEX = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,16}$/;
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const NAME_REGEX =
  /^[A-Z\u00d1][a-zA-Z-ÿí\u00f1\u00d1]+(\s*[A-Z\u00d1][a-zA-Z-ÿí\u00f1\u00d1\s]*)$/;

const form = document.querySelector("#form");
const nameInput = document.querySelector("#name-input");
const emailInput = document.querySelector("#email-input");
const passwordInput = document.querySelector("#password-input");
const confirmPasswordInput = document.querySelector("#match-input");
const formBtn = document.querySelector("#form-btn");
const notification = document.querySelector("#notification")

import { createNotification } from "/components/notification.js";

let nameTest = false;
let emailTest = false;
let passwordTest = false;
let matchTest = false;

const validation = (element, validationTest) => {
  formBtn.disabled =
    nameTest && emailTest && passwordTest && matchTest ? false : true;

  element.classList.remove(
    "outline",
    "outline-2",
    "outline-green-700",
    "outline-red-700",
    "outline-indigo-700",
  );

  if (validationTest) {
    element.classList.remove("focus:outline-indigo-700");
    element.classList.add("outline-green-700", "outline-2", "outline");
  }
  if (!validationTest) {
    element.classList.remove("outline-green-700");
    element.classList.add("outline", "outline-2", "outline-red-700");
  }

  if (element.value == "") {
    element.classList.remove(
      "outline",
      "outline-2",
      "outline-green-700",
      "outline-red-700",
      "outline-indigo-700",
    );
  }
};

nameInput.addEventListener("input", (e) => {
  nameTest = NAME_REGEX.test(e.target.value);
  validation(nameInput, nameTest);
});

emailInput.addEventListener("input", (e) => {
  emailTest = EMAIL_REGEX.test(e.target.value);
  validation(emailInput, emailTest);
});

passwordInput.addEventListener("input", (e) => {
  passwordTest = PASSWORD_REGEX.test(e.target.value);
  matchTest = e.target.value === confirmPasswordInput.value;
  validation(passwordInput, passwordTest);
  validation(confirmPasswordInput, matchTest);
});

confirmPasswordInput.addEventListener("input", (e) => {
  matchTest = e.target.value === passwordInput.value;
  validation(confirmPasswordInput, matchTest);
});

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  try {
    const newUser = {
      name: nameInput.value,
      email: emailInput.value,
      password: passwordInput.value,
    };
    const {data} = await axios.post("/api/users", newUser);

     createNotification(false, data);
    setTimeout(() => {
 notification.classList.add("hidden")
    }, 5000);

   nameInput.value = ""
   emailInput.value = ""
 passwordInput.value = ""
confirmPasswordInput.value = ""

validation(nameInput, false)
validation(emailInput, false)
validation(passwordInput, false)
validation(confirmPasswordInput, false)

  } catch (error) {
     createNotification(true, error.response.data.error);
    setTimeout(() => {
 notification.classList.add("hidden")
    }, 5000);
  }
});
