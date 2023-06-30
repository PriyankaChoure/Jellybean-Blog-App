const httpStatus = require("http-status");
const BlogService = require("../services/blog.service");

const createNewBlog = async (req, res) => {
  const blogDetail = req.body;
  console.log("blog details - ", blogDetail);
  try {
    const newBlog = await BlogService.createBlog(blogDetail);
    console.log("new blog", newBlog);
    if (newBlog) {
      res.status(httpStatus.CREATED).json(newBlog);
    } else {
      res.status(httpStatus.BAD_REQUEST).json("Error while creating blog");
    }
  } catch (err) {
    console.log("error to create new blog -", err);
    res.status(httpStatus.INTERNAL_SERVER_ERROR).json(err);
  }
};

const getAllBlogs = async (req, res) => {
  try {
    const blogs = await BlogService.getBlogs();
    console.log("blog data list", blogs);
    if (blogs) {
      res.status(httpStatus.OK).json(blogs);
    } else {
      res.status(httpStatus.BAD_REQUEST).json("no blog found");
    }
  } catch (err) {
    console.log("error to get blog list -", err);
    res.status(httpStatus.INTERNAL_SERVER_ERROR).json(err);
  }
};
module.exports = {
  createNewBlog,
  getAllBlogs,
};
