import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// APIs
const regApi = `${process.env.REACT_APP_LOCAL_URL}/auth/register`
const logInApi = `${process.env.REACT_APP_LOCAL_URL}/auth/login`
const logOutApi = `${process.env.REACT_APP_LOCAL_URL}/auth/sign-out`

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

export const register = createAsyncThunk('slices/register', async(formData) => {
    try{
        const response = await axios.post(regApi, {...formData}, {
            headers: {
                "Content-Type": "application/json"
            }
        })
        return response.data
    }
    catch(err){
        return err.message
    }
})

export const login = createAsyncThunk('Slices/login', async(formData) => {
    try{
        const response = await axios.post(logInApi, {...formData}, {
            headers: {
                "Content-Type": "application/json"
            }
        })
        return response.data
    }
    catch(err){
        return err.message
    }
})

export const findEmail = createAsyncThunk('Slices/findEmail', async(email) => {
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
    catch(err){
        return err.message
    }
})

export const verifyOtp = createAsyncThunk('Slices/VerifyOtp', async(otp) => {
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
    catch(err){
        return err.message
    }
})

export const resetPassword = createAsyncThunk('Slices/resetPassword', async(formData) => {
    
    try{
        const response = await axios.post('', {...formData}, {
            headers: {
                "Content-Type": "application/json"
            }
        })
        return response.data
    }
    catch(err){
        return err.message
    }
})

export const logOut = createAsyncThunk('Slices/logout', async(_, {getState}) => {
    const token = selectAccessToken(getState())
    try{
        const response = axios.get(logOutApi, {
            headers:{
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            },
            withCredentials: true
        })
        return (await response).data
    }
    catch(error){
        return error.message
    }
})

export const {setCredentials, setIsLoggedIn, setPrevLocation} = AuthSlice.actions
export const selectAccessToken = (state) => state.auth.accessToken

export default AuthSlice.reducer