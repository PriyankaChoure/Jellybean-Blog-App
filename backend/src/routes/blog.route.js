const router = require("express").Router();

const blogController = require("../controllers/blog.controller");

router.post("/", blogController.createNewBlog);

router.get("/", blogController.getAllBlogs);

module.exports = router;
