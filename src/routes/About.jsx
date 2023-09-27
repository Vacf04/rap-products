import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import AboutContent from '../components/AboutContent';

const About = () => {
  const [ cartCount, setCartCount ] = useState(0);

  useEffect(() => {
    if(!JSON.parse(localStorage.getItem("items"))) return;
    const localStorageProducts = JSON.parse(localStorage.getItem("items")).length;
    setCartCount(localStorageProducts);
  },[]);

  return (
    <>
    <Header cartCount={cartCount}/>
    <AboutContent />
    </>
  );
};

export default About;