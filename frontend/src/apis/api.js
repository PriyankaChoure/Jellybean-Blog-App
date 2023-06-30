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
