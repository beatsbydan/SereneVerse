import './App.css';
import Routes from './Components/Routing/Routes';
import Navbar from './UI/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <header>
        <Navbar/>
      </header>
      <main>
        <Routes/>
      </main>
    </div>
  );
}

export default App;
