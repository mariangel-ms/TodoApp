const emailImput = document.getElementById("#email-input");
const passwordInput = document.getElementById("#password-input");
const form = document.getElementById("#form");
const errorText = document.getElementById("#error-text");

form.addEventListener("submit", async e => {
  e.preventDefault();
  try {
    const user = {
    email: emailImput.value,
    password: passwordInput.value
    }
    await axios.post("/api/login", user);
    window.location.pathname = `/todos/`;
  } catch (error) {
    console.log(error)
    errorText.textContent = error.response.data.error;
  }
});