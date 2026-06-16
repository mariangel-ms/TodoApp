const express = require("express");
const mongoose = require("mongoose");
const path = require("path")
require("dotenv").config();
const usersRouter = require('./controllers/users')
const loginRouter = require('./controllers/login')
const cors = require("cors")
const cookieParser = require("cookie-parser")
const morgan = require("morgan")

const app = express();

(async() => {

try {
await mongoose.connect(process.env.MONGO_URI_TEST)
console.log("Conectado a Mongo DB");

} catch (error) {
console.log(error);
}
})()

app.use(cors())
app.use(cookieParser())
app.use(express.json())

//Rutas frontend
app.use("/", express.static(path.resolve("views", "home")))
app.use("/styles", express.static(path.resolve("views", "styles")));
app.use('/signup', express.static(path.resolve('views','signup'))) //ruta del signup
app.use('/login', express.static(path.resolve('views','login')));
app.use('/components', express.static(path.resolve('views','components')));


app.use(morgan("tiny"))

//Rutas backend
app.use("/api/users", usersRouter)
app.use("/api/login", loginRouter)

module.exports = app;