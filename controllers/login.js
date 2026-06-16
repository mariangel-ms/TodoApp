const loginRouter = require("express").Router();
const User = require("../models/user");

loginRouter.post("/", async (request, response) => {
  const { email, password } = request.body;
  console.log(email, password)
})

module.exports = loginRouter;