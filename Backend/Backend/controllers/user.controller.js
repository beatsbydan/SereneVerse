const AsyncHandler = require("express-async-handler");
const status = require("http-status");
const ForbiddenRequestError = require("../exceptions/forbidden.exception");
const UnauthorizedRequestError = require("../exceptions/badRequest.exception");
const { hashPassword, comparePassword } = require("../utils/hashing.utils");
const { User } = require("../models/user.model");

const getAllUsers = AsyncHandler(async (req, res, next) => {
  try {
    const users = await User.find({});

    const sanitizedUsers = users.map((user) => {
      user.hash = undefined;
      user._v = undefined;
      user.refreshToken = undefined;
    });
    return res.status(status.OK).json({
      status: "success",
      statusCode: status.OK,
      data: sanitizedUsers,
    });
  } catch (error) {
    next(error);
  }
});

const updatePassword = AsyncHandler(async (req, res, next) => {
  try {
    const id = req.userId;
    const { newPass, currPass } = req.body;

    const user = await User.findById(id);
    if (!user) throw new ForbiddenRequestError("User not found");

    const validate = await comparePassword(user.hash, currPass);
    if (!validate) throw new UnauthorizedRequestError("Password mismatch");

    const hash = await hashPassword(newPass);
    user.hash = hash;
    await user.save();

    const sanitizedUser = {
      ...user,
      hash: undefined,
      password: newPass,
      _v: undefined,
      refreshToken: undefined,
    };
    return res.status(status.CREATED).json({
      status: "success",
      statusCode: status.CREATED,
      data: sanitizedUser,
    });
  } catch (error) {
    next(error);
  }
});

module.exports = {
  getAllUsers,
  updatePassword,
};
