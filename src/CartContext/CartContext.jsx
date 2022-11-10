import React from 'react'
import { createContext, useEffect, useState } from 'react'
import { getData } from '../api/api';

export const CartContext = createContext();


export const CartProvider = (props) => {


  const [data, setdata] = useState([]);
  const [cartItems, setCartItems] = useState(() => loadItems());

    const addToCart = (product) => {
     
        const exist = cartItems.find(x => x.id === product.id)  //looking for rpoduct in array cartItems []
        if (exist) {
          setCartItems(
            cartItems.map(x =>
              x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x));
        } else {
          setCartItems([...cartItems, { ...product, qty: 1 }])
        }
    
  };
  
     const deleteFromCart = (product) => {
        const items = cartItems.filter((item) => item.id !== product.id);
         setCartItems(items);
        
    }
      
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
   
        <CartContext.Provider value={ {cartItems, data, deleteFromCart, addToCart, setCartItems, setdata}}>
          {props.children}

        </CartContext.Provider >
            

            <div>CartContext</div>
            </>
  )
}
