import React from 'react'
import { SignIn } from '../components/SignIn/SignIn'
import { CartContext } from '../CartContext/CartContext';
import { useContext } from 'react';

export const SignInPage = () => {
  //  const { cartItems, addToCart, loadItems,deleteFromCart, checkout,products } = props;
  const { username} = useContext(CartContext);

  console.log(username);  
  return (
      <>
          
      
          
      <SignIn />
        
      
          





      </>
  )
}
