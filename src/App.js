import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import {BrowserRouter as Router , Route , Routes} from 'react-router-dom'
import Shopping_cards from './Components/Product_Section/Shopping_cards';
import Products from './Components/Product_Section/Products';
import Orders from './Components/Product_Section/Orders';
import Cart from './Components/Cart';
import Login from './Components/Login'
import Signup from './Components/Signup'
import ProductForm from './Components/Seller/Posting-form'
import Product_Details from './Components/Product_Section/Product_Details';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">'
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Shopping_cards/>} />
          <Route path="/carts" element={<Cart />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/post-products" element={<ProductForm />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/products/:id" element={<Shopping_cards />} />
          <Route path="/products/details" element={<Product_Details />} />
        </Routes>
      </Router>
      
      {/* <Shopping_cards/> */}
      {/* <h1>Jai shree ram</h1> */}
      
    </div>
  );
}

export default App;

