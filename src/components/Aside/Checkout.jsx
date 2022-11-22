import React from 'react'
import { useState } from 'react';
import { useContext } from 'react';
import { CartContext } from '../../CartContext/CartProvider';
export const Checkout=(props)=> {
    const { cartItems } = useContext(CartContext);

   
        let totalPrice = 0;
    const total = cartItems.map(x =>
            
          totalPrice += (x.price * x.qty));
 
    return (

        <>
       
            <div>TOTAL: {totalPrice} $</div>
            </>

    )
}