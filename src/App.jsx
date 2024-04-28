import React, { createContext, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Categories from './components/Categories/Categories';
import Dashboard from './components/Dashboard/Dashboard.jsx';
import Navbar from './components/Navbar/Navbar';
import Orders from './components/Orders/Orders';
import Cart from './components/Cart/Cart';
<<<<<<< HEAD
import SearchResults from './components/SearchResults/SearchResults';

function App() {
  const CartContext = createContext([]);
  const [cartItems, setCartItems] = useState([])
=======
import Checkout from './components/Checkout/Checkout';  // Import the Checkout component
import ThankYou from './components/ThankYou/ThankYou';  // Import the Thank You component

function App() {
>>>>>>> a755835cbc48b352583e4eaf45051bad074c5063
  return (
    <div>
<<<<<<< HEAD
      <CartContext.Provider value={cartItems}>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/search-results" element={<SearchResults />} />
          </Routes>
        </BrowserRouter>
      </CartContext.Provider>
=======
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/thank-you" element={<ThankYou />} />  {/* New route for Thank You page */}
        </Routes>
      </BrowserRouter>
>>>>>>> a755835cbc48b352583e4eaf45051bad074c5063
    </div>
  );
}

export default App;
