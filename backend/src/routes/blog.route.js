const router = require("express").Router();

const blogController = require("../controllers/blog.controller");

router.post("/", blogController.createNewBlog);

router.get("/", blogController.getAllBlogs);

router.patch("/up/:id", blogController.updateLike);
router.patch("/down/:id", blogController.updateDisLike);

module.exports = router;
