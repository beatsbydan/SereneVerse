const express = require("express")
const morgan = require("morgan")
const cors = require("cors")

const app = express()

app.use(cors({
    origin : "*"
}))
app.use(morgan("dev"))

module.exports = app