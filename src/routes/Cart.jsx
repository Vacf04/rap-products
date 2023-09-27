import React from 'react';
import Header from '../components/Header';
import ProductsContent from '../components/ProductsContent';
import { useState, useEffect } from 'react';
import CartContent from '../components/CartContent';

const Cart = () => {
  const [ cartCount, setCartCount ] = useState(0);

  useEffect(() => { 
    const localStorageProducts = JSON.parse(localStorage.getItem("items")).length;
    if(!localStorageProducts) return;
    setCartCount(localStorageProducts);
  },[]);

  const getCartCount = (data) => {
    setCartCount(data.length);
  }

  return (
    <>
    <Header cartCount={cartCount} />
    <CartContent getCartCount={getCartCount} />
    </>
  );
};

export default Cart;