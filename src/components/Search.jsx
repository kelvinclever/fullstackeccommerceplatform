import React, { useContext, useEffect, useState } from 'react';
import logo from '../images/logo.png';
import { BiSearch } from 'react-icons/bi';
import { BsCart4 } from 'react-icons/bs';
import { BiLogIn } from 'react-icons/bi';
import { SiGnuprivacyguard } from 'react-icons/si';
import { CartContext } from '../context/cart.jsx';
import { Context } from '../context/customercontext/customer.context.jsx';
import { useNavigate } from 'react-router-dom';
import './search.css';

const Search = () => {
  const { user, dispatch } = useContext(Context);
  const { cartItems } = useContext(CartContext);
  const [cartItemCount, setCartItemCount] = useState(0);
  const [isSearchFixed, setIsSearchFixed] = useState(false);
  const navigate = useNavigate();

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    const isFixed = scrollTop > window.innerHeight * 0.12;
    setIsSearchFixed(isFixed);
  };

  useEffect(() => {
    let count = 0;
    cartItems.forEach((item) => {
      count += item.quantity;
    });
    setCartItemCount(count);
  }, [cartItems]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleLogout = () => {
    dispatch({ type: 'LOGOUT' });
    navigate('/');
  };

  return (
    <section className={`Search ${isSearchFixed ? 'fixed' : ''}`}>
      <div className="logo">
        <img src={logo} alt="logo" />
        <div className="container">
          <input type="text" name="text" className="input" placeholder="Search here..." />
          <button className="search__btn">
            <BiSearch id="search-icon" />
          </button>
        </div>
        <ul>
          <li>
            <a href="/login" className="menu-item" onClick={user ? handleLogout : null}>
              {user ? 'logout' : 'login'} <BiLogIn />
            </a>
          </li>
          <li> <a href="/admin/login">Admin</a></li>
          <li>
  <a href="/signup" className="menu-item">
    {!user ? (
      <span>
        Signup <SiGnuprivacyguard />
      </span>
    ) : (
      ''
    )}
  </a>
</li>

          <li>
            <a href="/products/cart">
              <span className="cart">
                <BsCart4 id="icon-search" />
              </span>
            </a>
            <span id="cart-add">{cartItemCount}</span>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Search;
