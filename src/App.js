import FirstCard from "./components/FirstCard";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Reviews from "./components/Reviews";
import SecondCard from "./components/SecondCard";
import SignUp from "./components/SignUp";
import Footer from './components/Footer'


function App() {
  return (
    <div className="App">
      <Header/>
      <FirstCard/>
      <Hero/>     
      <SecondCard/>
      <Reviews/>
      <SignUp/>
      <Footer/>
    </div>
  );
}

export default App;
