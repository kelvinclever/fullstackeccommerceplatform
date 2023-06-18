import { useState, useEffect } from 'react'

import './products.css'

export default function Products() {
  const [products, setProducts] = useState([])

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
        <h1 >new in the market </h1>
      </div>
      <div className='products-container'>
        {
          products.map(product => (
            <div key={product.id} className='product-content'>
              <img src={product.thumbnail} alt={product.title} className='product-image' />
              <div className='product-description'>
                <h1 className='product-title'>{product.title}</h1>
                <p className='product-dec'>{product.description.slice(0, 20)}...</p>
                <p className='product-price'>${product.price}</p>
              </div>
              <div className='product-addbutton'>
                <button className='buttonadd'>Add to cart</button>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}