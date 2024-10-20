const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  email: { type: String, required: true, unique: true, trim: true },
  password: { type: String, required: true, minLength: 7 },
  about: { type: String, required: true, default: "I am Chatter😁" },
});

module.exports = mongoose.model("User", userSchema);
