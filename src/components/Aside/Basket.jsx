import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Checkout } from './Checkout';
import { useEffect } from 'react';
import { useContext } from 'react';
import { CartContext } from '../../CartContext/CartContext';



export const Basket = (props) => {
  const { cartItems, deleteFromCart } = useContext(CartContext);
        
  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(cartItems));
  }, [cartItems]);
  
 
    
console.log(cartItems.length)
  return (
      
          <aside>
          <h2>Cart Items</h2>

          {cartItems.length > 0 ? (
              
                  cartItems.map((item) => (
                      <div key={item.id} className="row row-basket">
                      <div>{item.title}</div><span>Price: {item.price}</span><span>Qty: { item.qty}</span><button onClick={()=>deleteFromCart(item)}>Delete</button>
                      </div>
                  ))
              
      ) : <h1>cart is empty</h1>}

      <div className='container'>

        <Checkout cartItems={cartItems} />
        <Link className="btn btn-primary" to="/checkout">Checkout</Link>
      </div>

      
   
      


            </aside>
      




  )
}
