import React from "react";
import { createContext, useEffect, useState } from "react";
import { getData } from "../api/api";
import AlertSuccess from "../components/Alerts/Alert";
import Swal from "sweetalert2";

export const CartContext = createContext();

export const CartProvider = (props) => {
  const [data, setdata] = useState([]);
  useEffect(() => {
    const prueba = async () => {
      const datajson = await getData();
      setdata(datajson);
      console.log("data" + data);
    };
    prueba();
  }, []);

  const [cartItems, setCartItems] = useState(() => loadItems());

  const addToCart = (product) => {
    const exist = cartItems.find((x) => x.id === product.id); //looking for rpoduct in array cartItems []
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );

      Swal.fire({
        position: "top",
        icon: "success",
        title: "Product added to cart",
        showConfirmButton: false,
        timer: 1500,
      });
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
      AlertSuccess();
    }
  };

  const substract = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist && exist.qty > 1) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
      console.log("delete", exist.qty);
    } else {
      const items = cartItems.filter((item) => item.id !== product.id);
      setCartItems(items);
    }
  };

  const deleteFromCart = (product) => {
    const items = cartItems.filter((item) => item.id !== product.id);
    setCartItems(items);
  };

  function loadItems() {
    const items = localStorage.getItem("products");
    if (items) {
      try {
        return JSON.parse(items);
      } catch (error) {
        return [];
      }
    } else {
      return [];
    }
  }

  return (
    <>
      <CartContext.Provider
        value={{
          cartItems,
          data,
          deleteFromCart,
          addToCart,
          setCartItems,
          setdata,
          substract,
        }}
      >
        {props.children}
      </CartContext.Provider>
    </>
  );
};
