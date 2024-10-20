require("dotenv").config();
const User = require("../models/user");

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const ApiError = require("../utils/ApiError");
const asyncErrorHandler = require("../utils/asyncErrorHandler");

exports.login = asyncErrorHandler(async (req, res) => {
  const { email, password } = req.body;
  if (email === "" || password === "")
    throw new ApiError("invalid inputs", 400);
  const user = await User.findOne({ email });
  if (!user) throw new ApiError("invalid credentials", 400);
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) throw new ApiError("invalid credentials", 400);
  res.status(201).json({ token: genrateAccessToken(user.name, user._id) });
});

exports.signup = asyncErrorHandler(async (req, res) => {
  const { name, email, password } = req.body;
  if (name === "" || email === "" || password === "")
    throw new ApiError("invalid inputs", 400);
  const user = await User.findOne({ email });
  if (user) throw new ApiError("email already exist", 400);
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);
  await User.create({ name, email, password: hash });
  res.status(201).json({ message: "user successfully signup!" });
});

const genrateAccessToken = (name, _id) => {
  return jwt.sign({ name: name, _id: _id }, process.env.TOKEN_KEY);
};
