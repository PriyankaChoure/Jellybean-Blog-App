const httpStatus = require("http-status");
const User = require("../models/user.model");
const bcrypt = require("bcryptjs");

const createUser = async (userData) => {
  const hashedPassword = await bcrypt.hash(userData.password, 10);
  const newUser = new User({
    username: userData.username,
    email: userData.email,
    password: hashedPassword,
  });
  console.log("in service ", newUser);
  newUser.markModified();
  const user = await newUser.save();
  console.log("service - ", user);
  const { password, ...others } = user._doc;
  return others;
};

const loginUser = async (email, password) => {
  const user = await User.findOne({ email: email });

  const isPasswordMatch = await bcrypt.compare(password, user.password);
  if (isPasswordMatch) {
    const { password, ...others } = user._doc;
    return others;
  } else {
    throw new Error("Incorrect email or password");
  }
};
module.exports = {
  createUser,
  loginUser,
};
