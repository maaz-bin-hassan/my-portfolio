import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import HeroSection from './components/HeroSection';
import Contacts from './components/Contacts';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          react Lab 1
        </p>
       <Header/>
       
       <HeroSection/>
       <Contacts/>
      </header>
    </div>
  );
}

export default App;
