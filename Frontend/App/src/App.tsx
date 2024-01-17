import './App.css';
import {Routes, Route} from 'react-router-dom'
import loadable from '@loadable/component'

const WelcomePage = loadable(()=> import('./Components/App/Introduction/WelcomePage/WelcomePage'),{
  fallback: <div>Hi</div>
})
const SplashScreen = loadable(()=> import('./Components/App/Introduction/SplashScreen/SplashScreen'),{
  fallback: <div>Hi</div>
})
const Start = loadable(()=> import('./Components/Auth/UserAuth/Pages/Start/Start'),{
  fallback: <div>Hi</div>
})
const Register = loadable(()=> import('./Components/Auth/UserAuth/Pages/Register/Register'),{
  fallback: <div>Hi</div>
})
const Login = loadable(()=> import('./Components/Auth/UserAuth/Pages/Login/Login'),{
  fallback: <div>Hi</div>
})
const TermsAndConditions = loadable(()=> import('./Components/Auth/TermsAndConditions/TermsAndConditions'),{
  fallback: <div>Hi</div>
})
const ForgotPassword = loadable(()=> import('./Components/Auth/UserAuth/Pages/ForgotPassword/ForgotPassword'),{
  fallback: <div>Hi</div>
})
const VerifyWithOtp = loadable(()=> import('./Components/Auth/UserAuth/Pages/VerifyWithOtp/VerifyWithOtp'),{
  fallback: <div>Hi</div>
})
const ResetPassword = loadable(()=> import('./Components/Auth/UserAuth/Pages/ResetPassword/ResetPassword'),{
  fallback: <div>Hi</div>
})
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={'/'} element={<WelcomePage/>}/>
        <Route path={'/welcome'} element={<SplashScreen/>}/>
        <Route path={"/start"} element={<Start/>}/>
        <Route path={"/register"} element={<Register/>}/>
        <Route path={"/policy"} element={<TermsAndConditions/>}/>
        <Route path={"/login"} element={<Login/>}/>
        <Route path={"/forgot"} element={<ForgotPassword/>}/>
        <Route path={"/verify"} element={<VerifyWithOtp/>}/>
        <Route path={"/reset"} element={<ResetPassword/>}/>

      </Routes>
    </div>
  );
}

export default App;
