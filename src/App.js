import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Home page/Navbar';
import Home from './Components/Home page/Home';
import {BrowserRouter as Router , Route , Routes} from 'react-router-dom'
import Shopping_cards from './Components/Product_Section/Shopping_cards';
import Admin from './Components/Admin/Admin'
import Cart from './Components/Product_Section/Cart';
import Login from './Components/Home page/Login'
import Signup from './Components/Home page/Signup'
import ProductForm from './Components/Seller/Posting-form'
import Product_Details from './Components/Product_Section/Product_Details';
import Footer from './Components/Home page/Footer';
import Product_showcase from './Components/Product_Section/Products';
import Sliders from './Components/Home page/Sliders';
import Grid_structures from './Components/Grid_structures';
import { Provider } from 'react-redux';
import store from './Components/Cart/Store';
import OrdersList from './Components/Product_Section/OrdersList';

function App() {
  return (
    <div className="App">'
       <Provider store={store}>
      <div className="App">
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Shopping_cards />} />
            <Route path="/carts" element={<Cart />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/post-products" element={<ProductForm />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/products/:id" element={<Shopping_cards />} />
            <Route path="/product/details/:id" element={<Product_Details />} />
            <Route path="/allproducts" element={<Product_showcase />} />
            <Route path="/slider" element={<Sliders />} />
            <Route path="/grid" element={<Grid_structures />} />
            <Route path="/orders" element={<OrdersList />} />
          </Routes>
        </Router>
        <Footer />
      </div>
    </Provider>
      
    </div>
  );
}

export default App;

