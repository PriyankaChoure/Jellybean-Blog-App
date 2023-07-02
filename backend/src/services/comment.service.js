const httpStatus = require("http-status");
const Comment = require("../models/comment.model");

const createComment = async (commentData) => {
  const newComment = new Comment({
    blogid: commentData.blogid,
    userid: commentData.userid,
    username: commentData.username,
    comment: commentData.comment,
  });
  const comment = await newComment.save();
  return comment;
};

const getCommnet = async (id) => {
  const commentList = await Comment.find({ blogid: id });
  return commentList;
};

module.exports = {
  createComment,
  getCommnet,
};
