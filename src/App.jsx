import React, { useContext } from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { Context } from './context/customercontext/customer.context.jsx';
import Navbar from './components/Navbar.jsx';
import Head from './components/Head.jsx';
import Menu from './components/Menu.jsx';
import './App.css';
import Home from './components/Home.jsx';
import Furnitures from './components/Furnitures.jsx';
import Cart from './components/Cart.jsx';
import SignUp from './components/accountUser/SignUp.jsx';
import Login from './components/accountUser/Login.jsx';
import Footer from './components/Footer.jsx';
import AccountInfo from './components/accountUser/AccountInfo.jsx';
import LoginAdmin from './components/admin/LoginAdmin.jsx';
import Admin from './components/admin/Admin.jsx';

function App() {
  const { user } = useContext(Context);
  const isAdmin = user && user.username; // Check if user is authenticated as an admin

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
                <Footer />
              </>
            }
          />
          <Route path="/categories/furnitures" element={<Furnitures />} />
          <Route
            path="/products/cart"
            element={
              <>
                <Head />
                <Menu />
                <Cart />
                <Footer />
              </>
            }
          />
          <Route
            path="/signup"
            element={
              <>
                <SignUp />
              </>
            }
          />
          <Route
            path="/user"
            element={
              <>
                <Menu />
                <AccountInfo />
              </>
            }
          />
          <Route path="/admin/login" element={<LoginAdmin />} />
          <Route
            path="/admin/dashboard"
            element={isAdmin ? <Admin /> : <Navigate to="/admin/login" />} // Redirect to admin login if not authenticated as an admin
          />
          <Route path="/login" element={<Login />} />
        </Routes>
    
      </BrowserRouter>
    </div>
  );
}

export default App;
