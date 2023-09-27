import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import HomeContent from '../components/HomeContent';

const Home = () => {
  const [ cartCount, setCartCount ] = useState(0);

  useEffect(() => {
    if(!JSON.parse(localStorage.getItem("items"))) return;
    const localStorageProducts = JSON.parse(localStorage.getItem("items")).length;
    setCartCount(localStorageProducts);
  },[]);

  return (
    <>
    <Header cartCount={cartCount}/>
    <HomeContent />
    </>
  );
};

export default Home;