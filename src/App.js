import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import Footer from './components/footer';
import HeroSection from './components/HeroSection';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          react Lab 1
        </p>
       <Header/>
       <Footer/>
       <HeroSection/>
      </header>
    </div>
  );
}

export default App;
