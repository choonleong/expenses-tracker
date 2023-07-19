const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter your name."],
  },
  email: {
    type: String,
    required: [true, "Please enter your email."],
  },
  password: {
    type: String,
    required: [true, "Please enter your password"],
  },
});

export default mongoose.model("User", userSchema);
