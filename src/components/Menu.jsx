import React, { useState } from 'react';
import { BiMenu } from 'react-icons/bi';
import { ImCancelCircle } from 'react-icons/im';

import './menu.css';

const Menu = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className='navCont'>
         <li className="dropdown">
          <span>Categories</span>
          <div className="dropdown-content">
            <a href="/category/ELECTRONICS">Electronics</a>
            <a href="/category/furnitures">Furniture</a>
            <a href="/category/fashion">fashion</a>
            <a href="/category/cars">cars</a>
            <a href="/category/pets">pets</a>
            <a href="/category/gloceries">gloceries</a>
            <a href="/category/books">books</a>
            <a href="/category/homeapliances">home and garden</a>
          </div>
        </li>
    <nav className={menuOpen ? 'open' : ''}>
      <ul className={menuOpen ? 'show' : ''}>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/shop">Shop</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/user">User Account</a>
        </li>
        <li>
          <a href="/vendor">Vendor Account</a>
        </li>
        <li>
          <a href="/trackorder">Track My Order</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
       
      
      </ul>
      <span id="menu" onClick={toggleMenu}>
        {menuOpen ? <ImCancelCircle /> : <BiMenu />}
      </span>
    </nav>
    </div>
  );
};

export default Menu;
