import React, { useState, useEffect } from "react";

import "./Ship.css";
import Product from "../Product/Product";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([])

  useEffect(() => {
    fetch("products.json")
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  const handleAddToCart = (product) => {
    const newCart = [...cart, product];
    setCart(newCart);
  };


  return (
    <div className="shop-container">
      <div className="products-container">
        {
          products.map((product=> <Product product={product} key={product.id}  handleAddToCart={handleAddToCart} />))
        }
      </div>
      <div className="card-container">
        <h4>Order Summary</h4>
        <p>Selected Items : { cart.length}</p>
      </div>
    </div>
  );
};

export default Shop;