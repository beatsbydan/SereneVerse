import './App.css';
import {Routes, Route} from 'react-router-dom'
import WelcomePage from './Components/App/Introduction/WelcomePage/WelcomePage';
import SplashScreen from './Components/App/Introduction/SplashScreen/SplashScreen';
import Start from './Components/Auth/Pages/Start/Start';
import Register from './Components/Auth/Pages/Register/Register';
import Login from './Components/Auth/Pages/Login/Login';
import TermsAndConditions from './Components/Auth/TermsAndConditions/TermsAndConditions';

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
        {/* <Route path={"/forgot"} element={<ForgotPassword/>}/> */}
      </Routes>
    </div>
  );
}

export default App;
