import React from 'react';
import Navbar from './components/Navbar.jsx';
import Cart from './components/Cart.jsx'
import Head from './components/Head.jsx';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home.jsx';
import Furnitures from './components/Furnitures.jsx';

function App() {
  return (
    <div className="app">
      <BrowserRouter>
      <Head/>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/categories/furnitures"element={<Furnitures/>}/>,
        <Route path='/products/cart' element={<Cart/>}/>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
