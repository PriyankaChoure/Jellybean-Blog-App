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

const updateUpLike = async (id) => {
  console.log("service up like- ", id);
  const blog = await Blog.findOneAndUpdate(
    { _id: id },
    { $inc: { "like.up": 1 } },
    { new: true }
  );
  return blog;
};
const updateDownLike = async (id) => {
  console.log("service down like- ", id);
  const blog = await Blog.findOneAndUpdate(
    { _id: id },
    { $inc: { "like.down": 1 } },
    { new: true }
  );
  return blog;
};
module.exports = {
  createBlog,
  getBlogs,
  updateUpLike,
  updateDownLike,
};
