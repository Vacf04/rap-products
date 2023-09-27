import { useEffect, useState } from 'react';
import Styles from "./CartContent.module.css";
import { FaTrashAlt, FaMinus, FaPlus } from "react-icons/fa";

export default function CartContent ({ getCartCount  }) {
  const [ productsOnCart, setProductsOnCart ] = useState([]);

  useEffect(() => { 
    const localStorageProducts = JSON.parse(localStorage.getItem("items"));
    if(!localStorageProducts) return;
    setProductsOnCart(localStorageProducts);
  },[]);


  const handleRemoveCart = (e) => {
    let newProducts = [...productsOnCart];
    const productId = e.target.getAttribute("product");
    let productIdNumber = Number(productId);
    let indexRemove = newProducts.findIndex(o => o.id === productIdNumber);
    newProducts.splice(indexRemove, 1);
    setProductsOnCart(newProducts);

    localStorage.setItem('items', JSON.stringify(newProducts))
    getCartCount(newProducts);
  };

  const handlePlus = (e) => {
    const productId = e.target.getAttribute("product");
    const productIdNumber = Number(productId);
    
    const newProducts = productsOnCart.map((product) => ({
      ...product,
      quant: product.id === productIdNumber ? product.quant + 1 : product.quant,
    }));

    localStorage.setItem('items', JSON.stringify(newProducts));
    setProductsOnCart(newProducts);
  }

  const handleMinus = (e) => {
    const productId = e.target.getAttribute("product");
    let productIdNumber = Number(productId);

    const newProducts = productsOnCart.map((product) => ({
      ...product,
      quant: product.id === productIdNumber ? product.quant > 1 ? product.quant - 1 : product.quant : product.quant,
    }
    ));
    
    localStorage.setItem('items', JSON.stringify(newProducts));
    setProductsOnCart(newProducts);
  }

  return (
    <>
      <header className={Styles.header}>
        <h1>CART</h1>
      </header>
      <section className={Styles.mainContent}>
      <div>
      {productsOnCart.length < 1 ? <div className={Styles.cartProducts}>Your cart is empty.</div> : productsOnCart.map((product) => (<div className={Styles.cartProducts}>
        <img src={product.path} alt={product.name} />
        <div>
        <span>{product.name}</span>
        <span> ${product.price}</span>
        </div>
        <div className={Styles.buttonContainer}>
          <div className={Styles.quantContainer}>
            <button onClick={handleMinus} product={product.id}><FaMinus className={Styles.icons} /></button>
            <span>{product.quant}</span>
            <button onClick={handlePlus} product={product.id}><FaPlus className={Styles.icons} /></button>
          </div> 
          <button product={product.id} onClick={handleRemoveCart}><FaTrashAlt className={Styles.icons} /></button>
        </div>
        </div>))}
        <p>Total price: ${productsOnCart.reduce((a, product) => a + product.price * product.quant, 0)}</p>
        <button className={Styles.checkout}>CHECKOUT</button>
      </div> 
      </section>
    </>
  )
}

