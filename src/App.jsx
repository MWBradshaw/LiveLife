import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Categories from './components/Categories/Categories';
import Dashboard from './components/Dashboard/Dashboard.jsx';
import Navbar from './components/Navbar/Navbar';
import Orders from './components/Orders/Orders';
import Cart from './components/Cart/Cart';
import Checkout from './components/Checkout/Checkout';  // Import the Checkout component
import ThankYou from './components/ThankYou/ThankYou';  // Import the Thank You component

function App() {
  return (
    <div>
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
    </div>
  );
}

export default App;
