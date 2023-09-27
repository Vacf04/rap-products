import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import HomeContent from '../components/HomeContent';

const Home = () => {
  const [ cartCount, setCartCount ] = useState(0);

 

  return (
    <>
    <Header cartCount={cartCount}/>
    <HomeContent />
    </>
  );
};

export default Home;