import React from 'react';
import Navbar from './components/Navbar.jsx';
import Head from './components/Head.jsx';
import Menu from './components/Menu.jsx';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home.jsx';
import Furnitures from './components/Furnitures.jsx';
import Cart from './components/Cart.jsx';
import SignUp from './components/accountUser/SignUp.jsx';
import Login from './components/accountUser/Login.jsx';
import Footer from './components/Footer.jsx';
import AccountInfo from './components/accountUser/AccountInfo.jsx';
import Admin from './components/admin/Admin.jsx';

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Head />
                <Navbar />
                <Home />
              </>
            }
          />
          <Route path="/categories/furnitures" element={<Furnitures />} />
          <Route path="/products/cart" element={
        <>
        <Head/>
        <Menu/>
        <Cart/>
        
        
        </>
        
        } />
          <Route path="/signup" element={
            <>
             <Menu/>
            <SignUp/>
           
            </>
          
          
          } />
          <Route path="/user" element={
            <>
             <Menu/>
            <AccountInfo/>
           
            </>
          
          
          } />
           <Route path="/admin" element={
            <>
         <Admin/>
           
            </>
          
          
          } />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
