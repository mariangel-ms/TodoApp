const app = require("./app.js");
const PUERTO = 3000;
require("dotenv").config();

app.listen(PUERTO, () => {
  console.log("Esuchando en el puerto 3000");
});
