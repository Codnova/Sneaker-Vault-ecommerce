import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import HeroSection from "./components/HeroSection";

function App() {
  return (
    <div>
      <header>
        <NavBar/>
        <HeroSection />
        <ItemListContainer greetings={"Welcome"}/>
        
      </header>
    </div>
  );
}

export default App;
