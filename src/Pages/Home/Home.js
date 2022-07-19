import React from 'react';
import Products from '../../components/products/Products';



const Home = ({ onAddToCart, products }) => {

  return (
    <div>
        <Products products={products} onAddToCart={onAddToCart} />
    </div>
  )
}

export default Home