import React, { createContext, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import Categories from './components/Categories/Categories';
import Dashboard from './components/Dashboard/Dashboard.jsx';
import Navbar from './components/Navbar/Navbar';
import Orders from './components/Orders/Orders';
import Cart from './components/Cart/Cart';
import SearchResults from './components/SearchResults/SearchResults';

function App() {
  const CartContext = createContext([]);
  const [cartItems, setCartItems] = useState([])
  return (

    <div>
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
    </div>
  )
}

export default App
