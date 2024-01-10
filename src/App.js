import './App.css';
import About from './component/About';
import HeroSection from './component/HeroSection';
import Navbar from "./component/Navbar"

function App() {
  return (
    <div className="App">
      <Navbar/>
      <HeroSection/>
      <About/>
    </div>
  );
}

export default App;
