import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import Categories from './components/Categories/Categories';
import Dashboard from './components/Dashboard/Dashboard.jsx';
import Navbar from './components/Navbar/Navbar';
import Orders from './components/Orders/Orders';


function App() {

  return (

    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/orders" element={<Orders />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
