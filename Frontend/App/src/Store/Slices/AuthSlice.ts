import { createSlice } from "@reduxjs/toolkit";

const initialState = {
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
    }
})

export const {setCredentials, setIsLoggedIn, setPrevLocation} = AuthSlice.actions
// export const selectToken = (state) => state.auth.accessToken

export default AuthSlice.reducer