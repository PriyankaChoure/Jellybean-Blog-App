const routes = require("express").Router();

// routes for authentication
const authRoute = require("./auth.route");
routes.use("/auth", authRoute);

// routes for blog
const blogRoute = require("./blog.route");
routes.use("/blog", blogRoute);

// routes for comment
const commentRoute = require("./comment.route");
routes.use("/comment", commentRoute);

module.exports = routes;
