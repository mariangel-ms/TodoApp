const express = require("express");
const mongoose = require("mongoose");
const path = require("path")
require("dotenv").config();

const app = express();

(async() => {

try {
await mongoose.connect(process.env.MONGO_URI_TEST)
console.log("Conectado a Mongo DB");

} catch (error) {
console.log(error);
}
})()

//Rutas frontend
app.use("/", express.static(path.resolve("views", "home")))
app.use("/styles", express.static(path.resolve("views", "styles")));
app.use('/signup', express.static(path.resolve('views','signup'))); //ruta del signup
app.use('/components', express.static(path.resolve('views','components'))); 

module.exports = app;