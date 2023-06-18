import { useState, useEffect, useContext } from 'react'
import { CartContext } from '../context/cart.jsx'
import Cart from './Cart.jsx'
import './products.css'

export default function Products() {
  const [showModal, setshowModal] = useState(false);
  const [products, setProducts] = useState([])
  const { cartItems, addToCart } = useContext(CartContext)

  const toggle = () => {
    setshowModal(!showModal);
  };

  async function getProducts() {
    const response = await fetch('https://dummyjson.com/products')
    const data = await response.json()
    setProducts(data.products)
  }

  useEffect(() => {
    getProducts()
  }, [])

  return (
    <div className='products'>
      <div className='products-heading'>
        <h1 >Shop</h1>
       
            {!showModal && (
            <button className='phs' onClick={toggle}>
              Cart ({cartItems.length})
            </button>
            )}
                </div>
      <div className='products-container'>
        {
          products.map(product => (
            <div key={product.id} className='product-content'>
              <img src={product.thumbnail} alt={product.title} className='product-image' />
              <div className='product-description'>
                <h1 className='product-title'>{product.title}</h1>
                <p className='product-dec'>{product.description.slice(0, 40)}...</p>
                <p className='product-price'>${product.price}</p>
              </div>
              <div className='product-addbutton'>
                <button className='buttonadd'
                  onClick={() => {
                    addToCart(product)
                  }
                  }
                >Add to cart</button>
              </div>
            </div>
          ))
        }
      </div>
      <Cart showModal={showModal} toggle={toggle} />
    </div>
  )
}