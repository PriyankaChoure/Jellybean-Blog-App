const httpStatus = require("http-status");
const Blog = require("../models/blog.model");

const createBlog = async (blogData) => {
  const newBlog = new Blog({
    ownerid: blogData.ownerid,
    ownername: blogData.ownername,
    title: blogData.title,
    desc: blogData.desc,
  });
  const blog = await newBlog.save();
  return blog;
};

const getBlogs = async () => {
  const blogs = await Blog.find();
  return blogs;
};
module.exports = {
  createBlog,
  getBlogs,
};
