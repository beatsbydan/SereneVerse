import React from 'react'
import { Route, Routes as MyRoutes } from 'react-router-dom'
import loadable from '@loadable/component'
import Fallback from '../../UI/Fallback/Fallback';

const WelcomePage = loadable(()=> import('../App/Introduction/WelcomePage/WelcomePage'),{
    fallback: <Fallback/>
})
const SplashScreen = loadable(()=> import('../App/Introduction/SplashScreen/SplashScreen'),{
    fallback: <Fallback/>
})
const Start = loadable(()=> import('../Auth/UserAuth/Pages/Start/Start'),{
    fallback: <Fallback/>
})
const Register = loadable(()=> import('../Auth/UserAuth/Pages/Register/Register'),{
    fallback: <Fallback/>
})
const Login = loadable(()=> import('../Auth/UserAuth/Pages/Login/Login'),{
    fallback: <Fallback/>
})
const TermsAndConditions = loadable(()=> import('../Auth/TermsAndConditions/TermsAndConditions'),{
    fallback: <Fallback/>
})
const ForgotPassword = loadable(()=> import('../Auth/UserAuth/Pages/ForgotPassword/ForgotPassword'),{
    fallback: <Fallback/>
})
const VerifyWithOtp = loadable(()=> import('../Auth/UserAuth/Pages/VerifyWithOtp/VerifyWithOtp'),{
    fallback: <Fallback/>
})
const ResetPassword = loadable(()=> import('../Auth/UserAuth/Pages/ResetPassword/ResetPassword'),{
    fallback: <Fallback/>
})

// APP ROUTES
const Home = loadable(()=> import('../App/Dashboard/Home/Home'),{
    fallback: <Fallback/>
})
const Tracker = loadable(()=> import( '../App/Dashboard/Tracker/Tracker'),{
    fallback: <Fallback/>
})
// const Resources = loadable(()=> import('../App/Introduction/WelcomePage/WelcomePage'),{
//     fallback: <Fallback/>
// })
// const Tracker = loadable(()=> import('../App/Introduction/WelcomePage/WelcomePage'),{
//     fallback: <Fallback/>
// })

const Routes = () => {
    return (
        <MyRoutes>
            <Route path={'/'} element={<WelcomePage/>}/>
            <Route path={'/welcome'} element={<SplashScreen/>}/>
            <Route path={"/start"} element={<Start/>}/>
            <Route path={"/register"} element={<Register/>}/>
            <Route path={"/policy"} element={<TermsAndConditions/>}/>
            <Route path={"/login"} element={<Login/>}/>
            <Route path={"/forgot"} element={<ForgotPassword/>}/>
            <Route path={"/verify"} element={<VerifyWithOtp/>}/>
            <Route path={"/reset"} element={<ResetPassword/>}/>
            <Route path={'/home'} element={<Home/>}/>
            <Route path={'/tracker'} element={<Tracker/>}/>
        </MyRoutes>
    )
}

export default Routes