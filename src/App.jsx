import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ItemPage from './pages/ItemPage';
import CategoryPage from './pages/CategoryPage';

function App() {
  return (
    <div>

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/category/:categoryId' element={<CategoryPage/>} />
          <Route path='/item/:itemId' element={<ItemPage/>} />
          <Route path='*' element={<h1 className='text-center'>404 NOT FOUND</h1>} />
        </Routes>
      </BrowserRouter>
  
    </div>
  );
}

export default App;


//  <HeroSection />
//<ItemListContainer greetings={"Welcome"}/>
//<ItemDetailList id={1} />