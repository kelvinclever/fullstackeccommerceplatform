import React, { useContext, useEffect, useState } from 'react';
import logo from '../images/logo.png';
import { BiSearch } from 'react-icons/bi';
import { BsCart4 } from 'react-icons/bs';
import { BiLogIn } from 'react-icons/bi';
import { SiGnuprivacyguard } from 'react-icons/si';
import { CartContext } from '../context/cart.jsx';
import './search.css';

const Search = () => {
  const { cartItems } = useContext(CartContext);
  const [cartItemCount, setCartItemCount] = useState(0);

  useEffect(() => {
    let count = 0;
    cartItems.forEach((item) => {
      count += item.quantity;
    });
    setCartItemCount(count);
  }, [cartItems]);

  return (
    <div className="logo">
      <img src={logo} alt="logo" />
      <div className="container">
        <input type="text" name="text" className="input" placeholder="Search here..." />
        <span className="search__btn">
          <BiSearch />
        </span>
      </div>
      <ul>
        <li>
          <a href="/login" className="menu-item">
            login <BiLogIn />
          </a>
        </li>
        <li>
          <a href="/signup" className="menu-item">
            signup <SiGnuprivacyguard />
          </a>
        </li>
        <li>
          <a href="/products/cart">
            <span className="cart">
              <BsCart4 id="icon-search" />
            </span>
          </a>
          <span id="cart-add">{cartItemCount}</span>
          <span>toggle Dark</span>
        </li>
      </ul>
    </div>
  );
};

export default Search;
