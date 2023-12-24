import './App.css';
import {Routes, Route} from 'react-router-dom'
import WelcomePage from './Components/App/Introduction/WelcomePage/WelcomePage';
import SplashScreen from './Components/App/Introduction/SplashScreen/SplashScreen';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={'/'} element={<WelcomePage/>}/>
        <Route path={'/welcome'} element={<SplashScreen/>}/>
        {/* <Route path={"start"} element={<Start/>}/> */}
      </Routes>
    </div>
  );
}

export default App;
