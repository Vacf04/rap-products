import Styles from "./HomeContent.module.css";
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function HomeContent () {
  return(
    <>
      <header className={Styles.header}>
        <h1>RAP</h1>
      </header>
      <section className={Styles.mainContent}>
        <p>Welcome To Our Store</p>
        <Link to='/products' className={Styles.link}>See Products</Link>
      </section>
    </>
  );
}
