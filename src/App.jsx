import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar.jsx';
import Dashboard from './components/Dashboard/Dashboard';
import Categories from './components/Categories/Categories';
import Orders from './components/Orders/Orders';
import Cart from './components/Cart/Cart';
import CheckoutForm from './components/CheckoutForm/CheckoutForm.jsx';  // Ensure this path is correct
import ThankYou from './components/ThankYou/ThankYou';
import FormComponent from './components/FormComponent/FormComponent.jsx';  // Added FormComponent import
import Checkout from './components/Checkout/Checkout.jsx';
import Users from './components/Users/Users.jsx'; // Import the Users component

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/users" element={<Users />} /> {/* Add a route for Users */}
          <Route path="/categories" element={<Categories />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<CheckoutForm />} />  // Checkout now includes CreditCardForm
          <Route path="/thank-you" element={<ThankYou />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
