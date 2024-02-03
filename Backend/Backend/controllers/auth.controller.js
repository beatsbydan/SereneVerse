// import dependencies
const AsyncHandler = require("express-async-handler");
const status = require("http-status");
const ForbiddenRequestError = require("../exceptions/forbidden.exception");
const UnauthorizedRequestError = require("../exceptions/badRequest.exception");
const { User } = require("../models/user.model");
const { hashPassword, comparePassword } = require("../utils/hashing.utils");
const { signToken, signRefreshToken } = require("../utils/token.utils");

// controller to register a user
const register = AsyncHandler(async (req, res, next) => {
  // wrap all logic in a try-catch block for error handling
  try {
    // destructure the values needed from the request body
    const { fullName, password, phone, email, dateOfBirth } = req.body;

    // checks if any of the users essentials exist in the db
    const findUser = await User.findOne({ email });
    const findPhone = await User.findOne({ phone });
    if (findUser || findPhone) {
      throw new ForbiddenRequestError(
        "User with email or phone already exists"
      );
    }
    // hashing the user password for data security(even I can't access it)
    const hash = await hashPassword(password);

    // create a sanitized user object
    const sanitizedUser = {
      fullName,
      hash,
      phone,
      email,
      dateOfBirth,
    };
    // save the user details as a new entry in the db
    const user = await User.create(sanitizedUser);

    return res.status(status.CREATED).json({
      status: "success",
      statusCode: status.CREATED,
      data: {
        ...sanitizedUser,
        hash: undefined,
        password,
      },
    });
  } catch (error) {
    next(error);
  }
});

// controller to log a user into their dashboard
const login = AsyncHandler(async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const findUser = await User.findOne({ email });
    if (!findUser) {
      throw new UnauthorizedRequestError("User not Found");
    }
    // compare the input password with the hash in the db
    const compare = await comparePassword(findUser.hash, password);
    if (!compare) {
      throw new UnauthorizedRequestError("Incorrect Password");
    }
    // sign access and refresh token to keep a user logged in
    const accessToken = signToken(findUser._id);
    const refreshToken = signRefreshToken(findUser._id);

    // store refresh token on the users browser and in the db
    res.cookie("refresh_token", refreshToken, {
      httpOnly: true,
      secure: true,
      maxAge: 96 * 60 * 60 * 1000,
      sameSite: "none",
    });

    findUser.refreshToken = refreshToken;
    await findUser.save();

    const user = {
      ...findUser,
      refreshToken: undefined,
      hash: undefined,
      password,
      _v: undefined,
    };
    return res.status(status.CREATED).json({
      status: "success",
      statusCode: status.CREATED,
      token : accessToken,
      data: user,
    });
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

const logOut = AsyncHandler(async (req, res, next) => {
  try {

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
  logOut
};
