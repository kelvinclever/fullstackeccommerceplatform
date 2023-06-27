import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { CartProvider } from './context/cart.jsx'
import { ContextProvider } from './context/customercontext/customer.context.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CartProvider>
      <ContextProvider>
      <App />
      </ContextProvider>
    </CartProvider>
  </React.StrictMode>,
)