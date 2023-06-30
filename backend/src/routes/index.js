const routes = require("express").Router();

// routes for authentication
const authRoute = require("./auth.route");
routes.use("/auth", authRoute);

// routes for blog
const blogRoute = require("./blog.route");
routes.use("/blog", blogRoute);

module.exports = routes;
