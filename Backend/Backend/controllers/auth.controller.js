const AsyncHandler = require("express-async-handler");
const status = require("http-status");
const { User } = require("../models/user.model");
const { hashPassword } = require("../utils/hashing.utils");

const register = AsyncHandler(async (req, res, next) => {
  try {
    const { fullName, password, phone, email, dateOfBirth } = req.body;

    const findUser = await User.findOne({ email });
    const findPhone = await User.findOne({ phone });
    if (findUser || findPhone) {
      res.status(status.FORBIDDEN);
      throw new Error("User with email or phone already exists");
    }
    const hash = await hashPassword(password);
    const sanitizedUser = {
      fullName,
      hash,
      phone,
      email,
      dateOfBirth,
    };
    const user = await User.create(sanitizedUser);

    return res.status(status.CREATED).json({
      status: "success",
      statusCode: status.CREATED,
      user: {
        ...sanitizedUser,
        hash: undefined,
        password,
      },
    });
  } catch (error) {
    next(error);
  }
});

const login = AsyncHandler(async (req, res, next) => {
  try {
    const { email, password } = req.body;
  } catch (error) {
    next(error);
  }
});

const forgotPassword = AsyncHandler(async (req, res, next) => {
  try {
    const { email } = req.body;
  } catch (error) {
    next(error);
  }
});

const resetPassword = AsyncHandler(async (req, res, next) => {
  try {
    const { password } = req.body;
  } catch (error) {
    next(error);
  }
});

const confirmOtp = AsyncHandler(async (req, res, next) => {
  try {
    const { email, otp } = req.body;
  } catch (error) {
    next(error);
  }
});

module.exports = {
  register,
  login,
  forgotPassword,
  resetPassword,
  confirmOtp,
};
