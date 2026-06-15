const emailImput = document.getElementById("#email-input");
const passwordInput = document.getElementById("#password-input");
const form = document.getElementById("#form");

form.addEventListener("submit", async e => {
  e.preventDefault();
  try {
    const user = {
    email: emailImput.value,
    password: passwordInput.value
    }
    await axios.post("/api/login", user);
  } catch (error) {
    console.log(error)
  }
});