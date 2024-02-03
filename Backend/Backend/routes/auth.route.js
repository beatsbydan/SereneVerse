const { Router } = require("express");
const {
  register,
  login,
  forgotPassword,
  resetPassword,
  confirmOtp,
  logOut,
} = require("../controllers/auth.controller");
const validator = require("../middlewares/validator.middleware");
const { loginSchema } = require("../validators/login.validator");
const { createUserSchema } = require("../validators/signup.validator");
const authMiddleware = require("../middlewares/auth.middleware")

const authRouter = Router();

authRouter.route("/register").post(validator(createUserSchema), register);

authRouter.route("/login").post(validator(loginSchema), login);

authRouter.route("/forgot").post(forgotPassword);

authRouter.route("/reset").patch(resetPassword);

authRouter.route("/confirm").post(confirmOtp);

authRouter.route("/sign-out").post(authMiddleware, logOut);


module.exports = authRouter;
