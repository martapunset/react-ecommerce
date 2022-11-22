import React from "react";
//import { useState } from 'react';
import { Link } from "react-router-dom";
import { Checkout } from "./Checkout";
import { useEffect } from "react";
import { useContext } from "react";
import { CartContext } from "../../CartContext/CartProvider";
import AlertSuccess from "../Alerts/Alert";

export const Basket = (props) => {
  const { cartItems, deleteFromCart, addToCart, substract } =
    useContext(CartContext);

  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(cartItems));
  }, [cartItems]);

  console.log(cartItems.length);
  return (
    <>
      <div className="container-basket container">
        <h2>Cart Items</h2>

        {cartItems.length > 0 ? (
          cartItems.map((item) => (
            <div key={item.id} className="row-basket">
              <div>{item.title}</div>
              <span>Price: {item.price}</span>
              <span>
                <button onClick={() => substract(item)}> - </button>
                <span>{item.qty}</span>
                <button onClick={() => addToCart(item)}> + </button>{" "}
              </span>
              <button
                className="btn btn btn-secondary"
                onClick={() => deleteFromCart(item)}
              >
                Delete
              </button>
            </div>
          ))
        ) : (
          <h1>cart is empty</h1>
        )}
        <div className="checkout-container">
          <Checkout cartItems={cartItems} />
          <Link className="btn btn-primary" to="/checkout">
            Checkout
          </Link>
        </div>
      </div>
    </>
  );
};
