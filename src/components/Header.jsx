import { FaShoppingCart } from "react-icons/fa";
import Styles from "./Header.module.css";
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Header ({ cartCount }) {
  const [ active, setActive ] = useState(false);

  const handleMenuClick = () => {
    if(active) {
      setActive(false);
    } else {
      setActive(true);
    }
  };
  return (
    <>
      <header className={Styles.header}>
      <section className={Styles.menuContent}>
          <Link to='/' className={`${Styles.link} ${Styles.home}`}>Rap</Link>
          <div className={Styles.menuBarOptions}>
          <Link to='/cart'  ><FaShoppingCart className={`${Styles.cart} ${Styles.link}`}/> </Link>
          <span className={Styles.cartCount}>{cartCount}</span>
            <nav className={Styles.nav}>
            <div className={Styles.navBarButton} onClick={handleMenuClick}>
              <span className={`${Styles.line} ${active ? Styles.line1 : null}`}></span>
              <span className={`${Styles.line} ${active ? Styles.line2: null}`}></span>
              <span className={`${Styles.line} ${active ? Styles.line3: null}`}></span>
            </div>
              <ul className={`${Styles.options} ${active ? Styles.active :null}`}>
                <li><Link to='/products' className={Styles.link}>Products</Link></li>
                <li><Link to='/about' className={Styles.link}>About</Link></li>
              </ul>
            </nav>
          </div>
        </section>
      </header>
    </>
  );
}