import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './components/navbar/Navbar';
import ShopCategory from './pages/ShopCategory';
import Shop from './pages/Shop';
import Product from './pages/Product';
import Login from './pages/Login';
import Cart from './pages/Cart';
import Footer from './components/footer/Footer'
import men_banner from './components/assets/Ecommerce_Frontend_Assets/Assets/banner_mens.png';
import women_banner from './components/assets/Ecommerce_Frontend_Assets/Assets/banner_women.png';
import kid_banner from './components/assets/Ecommerce_Frontend_Assets/Assets/banner_kids.png';

function App() {
  return (
    <>

      <Router>
      <Nav />

        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/men" element={<ShopCategory banner={men_banner} category="men" />} />
          <Route path="/women" element={<ShopCategory banner={women_banner} category="women" />} />
          <Route path="/kid" element={<ShopCategory banner={kid_banner} category="kid" />} />
          <Route path='/product' element={<Product/>}/>
          <Route path='/product/:productId' element={<Product/>} />

          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer/>
      </Router>
    </>
  );
}

export default App;