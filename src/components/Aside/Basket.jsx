import React from 'react'
import { useState } from 'react';
import { Checkout } from './Checkout';
export const Basket=(props)=> {
    const { cartItems, addToCart, loadItems,deleteFromCart, checkout } = props;
  

    
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

        <Checkout cartItems={cartItems} checkout={checkout} />
        <button onClick={() => checkout(cartItems)}> Checkout</button>
      </div>

      
   
      


            </aside>
      




  )
}
