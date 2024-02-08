const mongoose = require("mongoose"); // Erase if already required

// Declare the Schema of the Mongo model
const userSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    phone: {
      type: String,
      required: true,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    dateOfBirth: {
      type: Date,
      required: true,
    },
    hash: {
      type: String,
      required: true,
    },
    refreshToken : {
      type : String
    },
    otp: {
      type: Number,
    },
    otpCreatedAt: {
      type: Number,
    },
    otpExpiresIn: {
      type: Number,
    },
  },
  {
    timestamps: true,
  }
);

//Export the model
module.exports.User = mongoose.model("User", userSchema);
