import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ItemPage from './pages/ItemPage';
import CategoryPage from './pages/CategoryPage';
import NavBar from './components/NavBar';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage' 
import { CartProvider } from './context/CartContext';

function App() {
  return (
    <div>

      <BrowserRouter>
        <CartProvider>
          <NavBar/>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/category/:categoryId' element={<CategoryPage/>} />
            <Route path='/item/:itemId' element={<ItemPage/>} />
            <Route path='/cart' element={<CartPage/>} />
            <Route path='/checkout' element={<CheckoutPage/>} />
            <Route path='*' element={<h1 className='text-center mt-3'>404 NOT FOUND</h1>} />
          </Routes>
        </CartProvider>
      </BrowserRouter>
  
    </div>
  );
}

export default App;