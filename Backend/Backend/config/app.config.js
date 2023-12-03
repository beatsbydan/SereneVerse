const express = require("express")
const morgan = require("morgan")
const cors = require("cors")
const cookieParser = require("cookie-parser")

const notFound = require("../middlewares/notfound.middleware")
const errHandler = require("../middlewares/errhandler.middleware")
const router = require("../routes/app.route")
const authRouter = require("../routes/auth.route")
const userRouter = require("../routes/user.route")

const app = express()

app.use(cors({
    origin : "*"
}))
app.use(cookieParser())
app.use(morgan("dev"))

app.use(router)
app.use("/auth", authRouter)
app.use("/users", userRouter)

app.use(notFound)
app.use(errHandler)

module.exports = app