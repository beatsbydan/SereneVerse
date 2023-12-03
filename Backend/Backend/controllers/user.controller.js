const AsyncHandler = require("express-async-handler");

const getAllUsers = AsyncHandler(async(req,res,next)=>{
    try {
        
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