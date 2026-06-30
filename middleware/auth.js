const jwt = require("jsonwebtoken");

const userExtractor = async (request, response, next) => {
    console.log("Middleware userExtractor ejecutado");
};

module.exports = { userExtractor };