import React, { useState, useEffect } from "react";
import { BrowserRouter as HashRouter, Route, Routes } from "react-router-dom";
import "./App.css";


import Home from "./Pages/Home/Home";

import Navbar from "./components/navbar/Navbar";
import Cart from "./components/cart/Cart";
import Checkout from './components/checkoutForm/checkout/Checkout';

import { CssBaseline } from "@material-ui/core";


import { commerce } from "./lib/commerce.js";

const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();
    setProducts(data);
  };

  const fetchCart = async () => {
    setCart(await commerce.cart.retrieve());
  };

  const handleAddToCart = async (productId, quantity) => {
    const { cart } = await commerce.cart.add(productId, quantity);
    setCart(cart);
  };

  const handleUpdateQuantity = async (productId, quantity) => {
    const { cart } = await commerce.cart.update(productId, { quantity });
    setCart(cart);
  };

  const handleRemoveItem = async (productId) => {
    const { cart } = await commerce.cart.remove(productId);
    setCart(cart);
  };

  const emptyCart = async () => {
    const { cart } = await commerce.cart.empty();
    setCart(cart);
  };

  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);

  return (
    <HashRouter>
      <div className = 'container'>
        <CssBaseline />
        <Navbar
          home="Home"
          shop="Tus compras"
          contacto="Contacto"
          totalItems={cart.totalItems}
        />
        
        <Routes>
          <Route path="/Tech-commerce" element= {<Home onAddToCart={handleAddToCart} products = {products} />} />
          <Route path="/cart" element={
              <Cart
                cart={cart}
                handleUpdateQuantity={handleUpdateQuantity}
                handleRemoveItem={handleRemoveItem}
                emptyCart={emptyCart}
              />
            }
          />
          <Route path="/checkout" element = {<Checkout />} />
        </Routes>
      </div>
    </HashRouter>
  );
};

export default App;