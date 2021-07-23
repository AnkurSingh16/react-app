import React, { useState, useContext } from "react";
import { CartDispatchContext, addToCart } from "../../contexts/cart";
import "./card-styles.css";

export const Card = ({ product }) => {
  const [isAdded, setIsAdded] = useState(false);
  const dispatch = useContext(CartDispatchContext);
  const productItem = product;

  const handleAddToCart = () => {
    const product = { ...productItem, quantity: 1 };
    addToCart(dispatch, product);
    setIsAdded(true);
    setTimeout(() => {
      setIsAdded(false);
    }, 500);
  };
  return (
    <div className="card-container">
      <img
        alt={productItem.name}
        src={
          productItem.productImage
            ? productItem.productImage
            : "https://via.placeholder.com/200"
        }
      ></img>
      <p className="flex">
        {productItem.name} {productItem.price}
      </p>
      <button
        className={!isAdded ? "add-to-cart" : " add-to-cart added"}
        type="button"
        onClick={handleAddToCart}
      >
        {!isAdded ? "ADD TO CART" : "✔ ADDED"}
      </button>
    </div>
  );
};
