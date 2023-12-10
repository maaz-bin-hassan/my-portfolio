import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import HeroSection from './components/HeroSection';
import Contacts from './components/Contacts';
import Projects from './components/Projects';
import Reviews from './components/Reviews';
function App() {
  return (
    <div className="app-container">
      
       <Header/>
       <HeroSection/>
       <Projects/>
       <Reviews/>
       <Contacts/>
     
    </div>
  );
}

export default App;
