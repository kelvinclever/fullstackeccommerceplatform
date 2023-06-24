import React, { useContext } from 'react';
import { CartContext } from '../context/cart';
import axios from 'axios'
import './Cart.css'
const Cart = () => {
  const { cartItems, removeFromCart, clearCart, getCartTotal,addToCart} = useContext(
    CartContext
  );

  const handleRemoveItem = (item) => {
    removeFromCart(item);
  };

  const handleClearCart = () => {
    clearCart();
  };

  const handleIncrement = (item) => {
    addToCart(item);
  };

  const handleDecrement = (item) => {
    removeFromCart(item);
  };

  const handleCheckout = async () => {
    try {
      const response = await axios.post('/checkout', {
        amount: getCartTotal(),
        currency: 'USD',
        description: 'Payment for products',
        source: '<Stripe token or payment method ID>',
      });

      if (response.data.success) {
        // Payment succeeded
        console.log('Payment succeeded');
      } else {
        // Payment failed
        console.log('Payment failed');
      }
    } catch (error) {
      console.error('Error processing payment:', error);
    }
  };


  return (
    <div className="cart">
      <h2>Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          <table className="cart-items">
            <thead>
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Remove</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => (
                <tr key={item.product_id}>
                  <td>
                    <img src={item.image_path} alt={item.name} className="cart-item-image" />
                    <div className="cart-item-description">
                      <h3>{item.name}</h3>
                    </div>
                  </td>
                  <td>${item.price}</td>
                  <td>
                    <div className="quantity-control">
                    <button onClick={() => handleDecrement(item)}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => handleIncrement(item )}>+</button>
                    </div>
                  </td>
                  <td>
                    <button className="remove-button" onClick={() => handleRemoveItem(item)}>
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="cart-total">
            <p>Total: ${getCartTotal()}</p>
            <div>
              <button className="checkout-button" onClick={handleCheckout}>
                Checkout
              </button>
              <button className="clear-cart-button" onClick={handleClearCart}>
                Clear Cart
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
