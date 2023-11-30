const express = require("express")
const morgan = require("morgan")
const cors = require("cors")

const notFound = require("../middleware/notfound.middleware")
const errHandler = require("../middleware/errhandler.middleware")
const router = require("../routes/app.route")

const app = express()

app.use(cors({
    origin : "*"
}))
app.use(morgan("dev"))

app.use(router)

app.use(notFound)
app.use(errHandler)

module.exports = app