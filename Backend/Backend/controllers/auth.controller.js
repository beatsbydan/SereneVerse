const AsyncHandler = require("express-async-handler");

const register = AsyncHandler(async(req,res,next)=>{
    try {
        
    } catch (error) {
        next(error)
    }
})

const login = AsyncHandler(async(req,res,next)=>{
    try {
        
    } catch (error) {
        next(error)
    }
})

const forgotPassword = AsyncHandler(async(req,res,next)=>{
    try {
        
    } catch (error) {
        next(error)
    }
})

const resetPassword = AsyncHandler(async(req,res,next)=>{
    try {
        
    } catch (error) {
        next(error)
    }
})

const confirmOtp = AsyncHandler(async(req,res,next)=>{
    try {
        
    } catch (error) {
        next(error)
    }
})

module.exports = {
    register,
    login,
    forgotPassword,
    resetPassword,
    confirmOtp
}