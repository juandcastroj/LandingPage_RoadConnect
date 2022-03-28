import FirstCard from "./components/FirstCard";
import PageFooter from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Reviews from "./components/Reviews";
import SecondCard from "./components/SecondCard";
import SignUp from "./components/SignUp";


function App() {
  return (
    <div className="App">
      <Header/>
      <Hero/>
      <FirstCard/>
      <SecondCard/>
      <Reviews/>
      <SignUp/>
      <PageFooter/>
    </div>
  );
}

export default App;
