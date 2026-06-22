require("dotenv").config();  // Carga las variables ocultas del archivo .env
const express = require("express"); //El framework para crear el servidor
const mongoose = require("mongoose"); // La librería para conectarnos y hablar con MongoDB
const path = require("path") //para manejar y resolver rutas de carpetas de forma segura
const loginRouter = require("./controllers/login");
const usersRouter = require('./controllers/users')
const cors = require("cors")
const cookieParser = require("cookie-parser")
const morgan = require("morgan")

const app = express();

(async() => {

try {
    //Se conecta a la base de datos
await mongoose.connect(process.env.MONGO_URI_TEST)
console.log("Conectado a Mongo DB");

} catch (error) {
console.log(error);
}
})()

app.use(cors())
app.use(cookieParser())
app.use(express.json()) // Permite que el servidor entienda los datos que le llegan en formato JSON

//Rutas frontend
app.use("/", express.static(path.resolve("views", "home")))
app.use("/styles", express.static(path.resolve("views", "styles")));
app.use('/signup', express.static(path.resolve('views','signup')))
app.use('/components', express.static(path.resolve('views','components')));
app.use('/img', express.static(path.resolve('img')));
app.use('/login', express.static(path.resolve('views', 'login')));
app.use('/verify', express.static(path.resolve('views', 'verify')));
app.use('/verify/:id/:token', express.static(path.resolve('views', 'verify')));

//Morgan permite elegir qué tan detallada es la informacio en la consolaa
app.use(morgan("tiny"))

//Rutas backend
app.use("/api/users", usersRouter)
app.use("/api/login", loginRouter)

module.exports = app;