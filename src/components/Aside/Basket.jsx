import React from 'react'
import { useState } from 'react';

export const Basket=(props)=> {
    const { cartItems, addToCart, loadItems } = props;
  

    
console.log(cartItems.length)
  return (
      
          <aside>
          <h2>Cart Items</h2>

          {cartItems.length > 0 ? (
              
                  cartItems.map((item) => (
                      <div key={item.id} className="row row-basket">
                      <div>{item.title}</div><span>Quantity: { item.qty}</span>
                      </div>
                  ))
              
          ) : <h1>cart is empty</h1>}

            </aside>
      




  )
}
