import { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './productsadmin.css';

export default function Products() {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [newProduct, setNewProduct] = useState({
    product_id: null,
    name: '',
    description: '',
    price: '',
    quantity_available: '',
    category_name: '',
    brand: '',
    image_path: '',
  });
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  async function getProducts() {
    try {
      const response = await fetch('https://eccommerceapiqcs.azurewebsites.net/products');
      const data = await response.json();
      setProducts(data.products);

    } catch (error) {
      console.error('Error fetching products:', error);
    }
  }

  const deleteProduct = async (productId) => {
    try {
      await fetch(`https://eccommerceapiqcs.azurewebsites.net/products/${productId}/delete`, {
        method: 'DELETE',
      });
      setProducts((prevProducts) => prevProducts.filter((product) => product.product_id !== productId));
      toast.success('Product deleted successfully!');
      getProducts();
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };

  const editProduct = (productId) => {
    const productToEdit = products.find((product) => product.product_id === productId);
    setNewProduct(productToEdit);
  };

  const searchProducts = (searchTerm) => {
    setSearchTerm(searchTerm);
    const filteredProducts = products.filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProducts(filteredProducts);
  };

  const addProduct = async () => {
    try {
      let response;
      if (newProduct.product_id) {
        // If product_id exists, update the existing product
        response = await fetch(`https://eccommerceapiqcs.azurewebsites.net/products/${newProduct.product_id}/update`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(newProduct),
        });
      } else {
        // Otherwise, add a new product
        response = await fetch('https://eccommerceapiqcs.azurewebsites.net/products/new', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(newProduct),
        });
      }

      if (response.ok) {
        const data = await response.json();
        if (newProduct.product_id) {
          // If product was updated, update the products array with the updated product
          setProducts((prevProducts) =>
            prevProducts.map((product) =>
              product.product_id === newProduct.product_id ? data.product : product
            )
          );
          toast.success('Product updated successfully!');
        } else {
          // If new product was added, add it to the products array
          setProducts((prevProducts) => [...prevProducts, data.product]);
          toast.success('Product added successfully!');
        }
        setNewProduct({
          product_id: null,
          name: '',
          description: '',
          price: '',
          quantity_available: '',
          category_name: '',
          brand: '',
          image_path: '',
        });
      } else {
        toast.error('Failed to add/update product');
      }
    } catch (error) {
      console.error('Error adding/updating product:', error);
    }
  };

  const handleNewProductChange = (e) => {
    setNewProduct((prevProduct) => ({
      ...prevProduct,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className='products'>
      <div className='products-nav'>
        <h1>Admin Panel</h1>
        <div className='search-container'>
          <input
            type='text'
            placeholder='Search products'
            value={searchTerm}
            onChange={(e) => searchProducts(e.target.value)}
          />
        </div>
        <button className='add-button' onClick={addProduct}>
          Add New Product
        </button>
      </div>
      <div className='products-container'>
        <div className='new-product-form'>
          <input
            type='text'
            name='name'
            placeholder='Name'
            value={newProduct.name}
            onChange={handleNewProductChange}
          />
          <input
            type='text'
            name='description'
            placeholder='Description'
            value={newProduct.description}
            onChange={handleNewProductChange}
          />
          <input
            type='number'
            name='price'
            placeholder='Price'
            value={newProduct.price}
            onChange={handleNewProductChange}
          />
          <input
            type='number'
            name='quantity_available'
            placeholder='Quantity Available'
            value={newProduct.quantity_available}
            onChange={handleNewProductChange}
          />
          <input
            type='text'
            name='category_name'
            placeholder='Category Name'
            value={newProduct.category_name}
            onChange={handleNewProductChange}
          />
          <input
            type='text'
            name='brand'
            placeholder='Brand'
            value={newProduct.brand}
            onChange={handleNewProductChange}
          />
          <input
            type='text'
            name='image_path'
            placeholder='Image Path'
            value={newProduct.image_path}
            onChange={handleNewProductChange}
          />
        </div>
        {filteredProducts.length === 0 && searchTerm ? (
          <div className='no-products'>No products found.</div>
        ) : (
          filteredProducts.map((product) => (
            <div key={product.product_id} className='product-content'>
              <img src={product.image_path} alt={product.name} className='product-image' />
              <div className='product-description'>
                <h1 className='product-title'>{product.name}</h1>
                <p className='product-dec'>{product.description}</p>
                <p className='product-price'>Price: ${product.price}</p>
              </div>
              <div className='product-actions'>
                <button className='edit-button' onClick={() => editProduct(product.product_id)}>
                  Edit
                </button>
                <button className='delete-button' onClick={() => deleteProduct(product.product_id)}>
                  Delete
                </button>
              </div>
            </div>
          ))
        )}
      </div>
      <ToastContainer />
    </div>
  );
}
