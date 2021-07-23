import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartStateContext } from "../../contexts/cart";
import "./cart-styles.css";

export const Cart = () => {
  const { items } = useContext(CartStateContext);
  //can add logic here to preview cart
  return (
    <Link to="/checkout">
      <p className="counter">{`Number of items in cart: ${items.length}`}</p>
      <img
        alt="click here to see shopping cart"
        src="https://img.icons8.com/material-outlined/100/000000/fast-cart.png"
      />
    </Link>
  );
};
