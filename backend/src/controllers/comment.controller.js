const httpStatus = require("http-status");
const CommnetService = require("../services/comment.service");

const createNewCommnet = async (req, res) => {
  const commentDetail = req.body;
  console.log("comment details - ", commentDetail);
  try {
    const newComment = await CommnetService.createComment(commentDetail);
    console.log("new blog", newComment);
    if (newComment) {
      res.status(httpStatus.CREATED).json(newComment);
    } else {
      res.status(httpStatus.BAD_REQUEST).json("Error while creating Comment");
    }
  } catch (err) {
    console.log("error to create new comment -", err);
    res.status(httpStatus.INTERNAL_SERVER_ERROR).json(err);
  }
};

const getBlogComments = async (req, res) => {
  try {
    const blogid = req.params.id;
    const comments = await CommnetService.getCommnet(blogid);
    console.log("blog data list", comments);
    if (comments) {
      res.status(httpStatus.OK).json(comments);
    } else {
      res.status(httpStatus.BAD_REQUEST).json("no comment found");
    }
  } catch (err) {
    console.log("error to get comment list -", err);
    res.status(httpStatus.INTERNAL_SERVER_ERROR).json(err);
  }
};

module.exports = {
  createNewCommnet,
  getBlogComments,
};
