import React from 'react'
import { useState } from 'react';

export const Checkout=(props)=> {
    const { cartItems } = props;

   
        let totalPrice = 0;
    const total = cartItems.map(x =>
            
          totalPrice += (x.price * x.qty));
 
    return (

        <>
       
            <div>TOTAL: {totalPrice} $</div>
            </>

    )
}