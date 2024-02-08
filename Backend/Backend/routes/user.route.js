const { Router } = require("express");

const {
  getAllUsers,
  updatePassword,
} = require("../controllers/user.controller");
const authMiddleware = require("../middlewares/auth.middleware");

const userRouter = Router();

userRouter.route("/update").post(authMiddleware, updatePassword);

userRouter.route("/").get(authMiddleware, getAllUsers);

module.exports = userRouter;
