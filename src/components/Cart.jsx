import React, { useContext } from 'react';
import { CartContext } from '../context/cart.jsx';
import { ToastContainer, toast } from 'react-toastify'
import './cart.css';

export default function Cart() {
  const { cartItems, addToCart, removeFromCart, clearCart, getCartTotal } = useContext(CartContext);

  const handleIncrement = (item) => {
    addToCart(item);
  };

  const handleDecrement = (item) => {
    removeFromCart(item);
  };


  return (
    <div className="cart-page">
      <h1>Cart</h1>
      {cartItems.length > 0 ? (
        <>
          {cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <div className="item-details">
                <img src={item.thumbnail} alt={item.title} className="item-thumbnail" />
                <div>
                  <h2>{item.title}</h2>
                  <p>{item.price}</p>
                  <p>{item.description}</p>
                </div>
              </div>
              <div className="item-controls">
                <button onClick={() => handleDecrement(item)}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => handleIncrement(item)}>+</button>
              </div>
            </div>
          ))}
          <h3 className="total">Total: {getCartTotal()}</h3>
          <button className="clear-cart" onClick={clearCart}>Clear Cart</button>
        </>
      ) : (
        <p>Your cart is empty.</p>
      )}
    </div>
  );
}
