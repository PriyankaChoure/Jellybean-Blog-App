const router = require("express").Router();

const commentController = require("../controllers/comment.controller");

router.post("/", commentController.createNewCommnet);

router.get("/:id", commentController.getBlogComments);

module.exports = router;
