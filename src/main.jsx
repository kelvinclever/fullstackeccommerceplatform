import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { CartProvider } from './context/cart.jsx'
import { ContextProvider } from './context/customercontext/customer.context.jsx'
import { UIContextProvider } from './context/admincontext/Context.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CartProvider>
      <ContextProvider>
        <UIContextProvider>
          <App />
        </UIContextProvider>
      </ContextProvider>
    </CartProvider>
  </React.StrictMode>,
)