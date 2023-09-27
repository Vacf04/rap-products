import Styles from "./AboutContent.module.css";
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function HomeContent () {
  return(
    <>
      <header className={Styles.header}>
        <h1>ABOUT</h1>
      </header>
      <section className={Styles.mainContent}>
        <p>We are a store where you can buy rap albuns.</p>
        <Link to='/products' className={Styles.link}>See Products</Link>
      </section>
    </>
  );
}
