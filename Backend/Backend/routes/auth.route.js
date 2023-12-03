const {Router} = require("express")
const { register, login, forgotPassword, resetPassword, confirmOtp } = require("../controllers/auth.controller")

const authRouter = Router()

authRouter.route("/register").post(register)

authRouter.route("/login").post(login)

authRouter.route("/forgot").post(forgotPassword)

authRouter.route("/reset").post(resetPassword)

authRouter.route("/confirm").post(confirmOtp)

module.exports = authRouter