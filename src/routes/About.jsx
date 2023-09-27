import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import AboutContent from '../components/AboutContent';

const About = () => {
  const [ cartCount, setCartCount ] = useState(0);

  useEffect(() => { 
    const localStorageProducts = JSON.parse(localStorage.getItem("items")).length;
    if(!localStorageProducts) return;
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