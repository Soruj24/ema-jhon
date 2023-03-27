import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

import "./Product.css";
const Product = (props) => {
  const { name, img, seller, ratings, price } = props.product;
  // const data = 'i am a product'
  // props.handleAddToCart(data)
  const handleAddToCart = props.handleAddToCart;
  return (
    <div className="product">
      <img src={img} alt="" srcset="" />
      <div className="product-info">
        <h4 className="product-name">{name}</h4>
        <p>Price: $ {price}</p>
        <p>Manufacturer : {seller}</p>
        <p>Ratings: {ratings} stars</p>
      </div>
      <button onClick={() => handleAddToCart(props.product)} className="btn-cart">
        Add to Cart 
        <FontAwesomeIcon icon={faShoppingCart} />
      </button>
    </div>
  );
};

export default Product;
