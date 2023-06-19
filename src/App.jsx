import React from 'react';
import Navbar from './components/Navbar.jsx';
import Head from './components/Head.jsx';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home.jsx';
import Furnitures from './components/Furnitures.jsx';
import Cart from './components/Cart.jsx';
import SignUp from './components/accountUser/SignUp.jsx';
import Login from './components/accountUser/Login.jsx';

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Head />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/categories/furnitures" element={<Furnitures />} />
          <Route path="/products/cart" element={<Cart />} />
          <Route path='/signup' element={<SignUp/>}/>
          <Route path='/login' element={<Login/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
