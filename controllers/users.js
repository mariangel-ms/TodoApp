const usersRouter = require("express").Router()
const User = require("../models/user")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const nodemailer = require("nodemailer")


const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
}); 

usersRouter.post("/", async (request, response) => {
    const { name, email, password } = request.body;
    
    if (!name || !email || !password) {
        return response.status(400).json({error: "Todos los espacios son requeridos."})
    }

    const saltRounds = 10
    const passwordHash = await bcrypt.hash(password, saltRounds);

    const newUser = new User({
        name,
        email,
        passwordHash,
    })
    
    const savedUser = await newUser.save()
    const token = jwt.sign({id: savedUser.id}, process.env.ACCESS_TOKEN_SECRET)

    await transporter.sendMail({
        from: process.env.EMAIL_USER, 
        to: savedUser.email, 
        subject: "Verificacion de usuario", 
        html: `<a href="${process.env.PAGE_URL}/${token}">Verificar correo</a>`, 
    });

    return response.status(201).json("Usuario creado. Por favor verifica tu correo");
})

module.exports = usersRouter;