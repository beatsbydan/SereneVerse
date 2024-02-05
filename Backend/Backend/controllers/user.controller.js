const AsyncHandler = require("express-async-handler");
const status = require("http-status");
const {User} = require("../models/user.model")

const getAllUsers = AsyncHandler(async(req,res,next)=>{
    try {
        const users = await User.find({})

        return res.status(status.OK).json({
            status : "success",
            statusCode : status.OK,
            data : users
        })
    } catch (error) {
        next(error)
    }
})

const updatePassword = AsyncHandler(async(req,res,next)=>{
    try {
    } catch (error) {
        next(error)
    }
})

module.exports = {
    getAllUsers,
    updatePassword
}