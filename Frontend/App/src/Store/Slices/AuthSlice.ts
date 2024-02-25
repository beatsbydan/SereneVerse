import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    register: {
        status: "idle",
        response: null,
        error: null
    },
    login: {
        status: "idle",
        response: null,
        error: null
    },
    findEmail: {
        status: "idle",
        response: null,
        error: null
    },
    otp: {
        status: "idle",
        response: null,
        error: null
    },
    reset: {
        status: "idle",
        response: null,
        error: null
    },
    logOut:{
        status: "idle",
        response: null,
        error: null
    },
    isLoggedIn: false,
    accessToken: null,
    prevLocation: null,
    user: null
}

type regDataType = {
    fullName: string,
    email: string,
    password: string,
    phoneNumber: string,
    dateOfBirth: string
}

type loginDataType = {
    email: string,
    password: string
}

type resetPasswordType ={
    newPassword: string,
    confirmNewPassword: string
}

const AuthSlice = createSlice({
    name: 'auth',
    initialState: initialState,
    reducers:{
        setCredentials: (state, action) => {
            const {token, user} = action.payload
            state.accessToken = token
            state.user = user
        },
        setIsLoggedIn(state, action){
            state.isLoggedIn = action.payload
        },
        logOut: (state, action) => {
            state.accessToken = null
            state.user = null
        },
        setPrevLocation: (state, action) => {
            state.prevLocation = action.payload
        }
    },
    extraReducers(builder){

    }
})

export const register = createAsyncThunk('slices/register', async(formData: regDataType) => {
    try{
        const response = await axios.post('', {...formData}, {
            headers: {
                "Content-Type": "application/json"
            }
        })
        return response.data
    }
    catch(err: any){
        return err.message
    }
})

export const login = createAsyncThunk('Slices/login', async(formData: loginDataType) => {
    try{
        const response = await axios.post('', {...formData}, {
            headers: {
                "Content-Type": "application/json"
            }
        })
        return response.data
    }
    catch(err: any){
        return err.message
    }
})

export const findEmail = createAsyncThunk('Slices/findEmail', async(email: string) => {
    const data = {
        email: email
    }
    try{
        const response = await axios.post('', {...data}, {
            headers: {
                "Content-Type": "application/json"
            }
        })
        return response.data
    }
    catch(err: any){
        return err.message
    }
})

export const verifyOtp = createAsyncThunk('Slices/VerifyOtp', async(otp: string) => {
    const data = {
        otp: otp
    }
    try{
        const response = await axios.post('', {...data}, {
            headers: {
                "Content-Type": "application/json"
            }
        })
        return response.data
    }
    catch(err: any){
        return err.message
    }
})

export const resetPassword = createAsyncThunk('Slices/resetPassword', async(formData: resetPasswordType) => {
    
    try{
        const response = await axios.post('', {...formData}, {
            headers: {
                "Content-Type": "application/json"
            }
        })
        return response.data
    }
    catch(err: any){
        return err.message
    }
})

export const logOut = createAsyncThunk('Slices/logout', async() => {
    try{
        const response = axios.get('', {
            headers:{
                "Content-Type": "application/json",
            },
            withCredentials: true
        })
        return (await response).data
    }
    catch(error: any){
        return error.message
    }
})

export const {setCredentials, setIsLoggedIn, setPrevLocation} = AuthSlice.actions
// export const selectToken = (state) => state.auth.accessToken

export default AuthSlice.reducer