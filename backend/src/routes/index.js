const routes = require("express").Router();

const authRoute = require("./auth.route");
routes.use("/auth", authRoute);

module.exports = routes;
