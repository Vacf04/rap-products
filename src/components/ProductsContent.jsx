import { useState, useEffect } from 'react';
import Styles from "./ProductsContent.module.css";
import { ProductsAlbuns } from '../assets/images/ProductsAlbuns';
import { FaCartPlus, FaTimes } from "react-icons/fa";

export default function ProductsContent ({ getCartCount  }) {
  const [ productsOnCart, setProductsOnCart ] = useState([]);

  useEffect(() => { 
    const localStorageProducts = JSON.parse(localStorage.getItem("items"));
    if(!localStorageProducts) {
      localStorage.setItem('items', JSON.stringify([]));
      return;
    };
    setProductsOnCart(localStorageProducts);
  },[]);

  const handleCartPlusClick = (e) => {
    const productId = e.target.getAttribute("product");
    const productIdNumber = Number(productId);
    if (productsOnCart.find((o) => o.id === productIdNumber)) return;
    const newProducts = [...productsOnCart];
    const newProduct = ProductsAlbuns[productId - 1];
    newProduct.quant = 1;
    newProducts.push(newProduct);
    setProductsOnCart(newProducts);
    localStorage.setItem('items', JSON.stringify(newProducts));
    getCartCount(newProducts);
  }


 
  return (
    
    <>
      <header className={Styles.header}>
        <h1>PRODUCTS</h1>
      </header>
      <section className={Styles.mainContent}>
      <article className={Styles.productsContainer}>
        
        {ProductsAlbuns.map((product) => (
          <div key={product.id}>
            <img src={product.path} alt="" />
            <div className={Styles.product}>
              
              <h2>{product.name}</h2>
              
              <div className={Styles.productDates}>
                <h2>$ {product.price}</h2>
                <button  product={product.id} onClick={handleCartPlusClick}><FaCartPlus className={Styles.cartPlus} product={product.id}/></button>
              </div>
            </div>
          </div>
        ))}
      </article>
      
      </section>
    </>
  )
}
