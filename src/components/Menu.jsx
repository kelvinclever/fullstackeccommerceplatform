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
      <li className="dropdown ">
        <span >Categories</span>
        <div className="dropdown-content ">
          <a href="/category/ELECTRONICS">Electronics</a>
          <a href="/category/furnitures">Furniture</a>
          <a href="/category/fashion">Fashion</a>
          <a href="/category/cars">Cars</a>
          <a href="/category/pets">Pets</a>
          <a href="/category/gloceries">Groceries</a>
          <a href="/category/books">Books</a>
          <a href="/category/homeapliances">Home and Garden</a>
        </div>
      </li>
      <nav className={menuOpen ? 'open' : ''}>
        <ul className={menuOpen ? 'show' : ''}>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/shop">new products</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/user">Account</a>
          </li>
          <li>
            <a href="/vendor">sell</a>
          </li>
          <li>
            <a href="/contact">Contact us</a>
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
