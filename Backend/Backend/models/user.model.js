const mongoose = require("mongoose"); // Erase if already required

// Declare the Schema of the Mongo model
const userSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  phone: {
    type: String,
    required: true,
    unique: true,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
  dateOfBirth: {
    type: Date,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

//Export the model
const User = mongoose.model("User", userSchema);
module.exports = User;
