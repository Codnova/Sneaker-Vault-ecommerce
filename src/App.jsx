import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/navBar';
import ItemListContainer from './components/itemListContainer';
import HeroSection from './components/heroSection';
import ItemDetailList from './components/itemDetailList';

function App() {
  return (
    <div>
      <header>
        <NavBar/>
      </header>
      <main>
        <HeroSection />
        <ItemListContainer greetings={"Welcome"}/>
        <ItemDetailList></ItemDetailList>
      </main>
      
    </div>
  );
}

export default App;
