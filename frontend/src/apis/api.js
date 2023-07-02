import axios from "axios";
const BACKEND_URL = "http://localhost:8082/backend/";

// api call to register new user
export const register = async (userData) => {
  const { username, email, password } = userData;
  const URL = `${BACKEND_URL}auth/register`;
  try {
    const responseData = await axios.post(URL, {
      username,
      email,
      password,
    });
    return responseData;
  } catch (err) {
    console.log(err);
  }
};

// api call for Login-
export const login = async (userData) => {
  const { email, password } = userData;
  const URL = `${BACKEND_URL}auth/login`;
  try {
    const responseData = await axios.post(URL, { email, password });
    return responseData;
  } catch (err) {
    console.log(err);
  }
};

// api call to create new blog
export const createNewBlog = async (blog) => {
  const { title, desc, ownerid, ownername } = blog;
  const URL = `${BACKEND_URL}blog`;
  try {
    const responseData = await axios.post(URL, {
      ownerid,
      ownername,
      title,
      desc,
    });
    return responseData;
  } catch (err) {
    console.log(err);
  }
};

// api call to get all Blogs
export const fetchAllBlogs = async () => {
  const URL = `${BACKEND_URL}blog`;
  try {
    const responseData = await axios.get(URL);
    return responseData;
  } catch (err) {
    console.log(err);
  }
};

// api call to update like
export const updateLike = async (id) => {
  const URL = `${BACKEND_URL}blog/up/${id}`;
  try {
    console.log("in api call url- ", URL);
    const responseData = await axios.patch(URL);
    return responseData;
  } catch (err) {
    console.log(err);
  }
};

// api call to update like
export const updateDisLike = async (id) => {
  const URL = `${BACKEND_URL}blog/down/${id}`;
  try {
    const responseData = await axios.patch(URL);
    return responseData;
  } catch (err) {
    console.log(err);
  }
};

// api call to create new comment
export const createNewComment = async (newComment) => {
  const { blogid, userid, username, comment } = newComment;
  const URL = `${BACKEND_URL}comment`;
  try {
    const responseData = await axios.post(URL, {
      blogid,
      userid,
      username,
      comment,
    });
    return responseData;
  } catch (err) {
    console.log(err);
  }
};

// api call to get all comment of any blog
export const fetchAllcomment = async (id) => {
  const URL = `${BACKEND_URL}comment/${id}`;
  try {
    const responseData = await axios.get(URL);
    return responseData;
  } catch (err) {
    console.log(err);
  }
};
