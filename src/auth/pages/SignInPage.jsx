import React from 'react'
import { SignIn } from '../../components/SignIn/SignIn'
import { CartContext } from '../../CartContext/CartProvider';
import { useContext } from 'react';
import Login from '../../components/SignIn/Login';

export const SignInPage = () => {
  //  const { cartItems, addToCart, loadItems,deleteFromCart, checkout,products } = props;
  const { username} = useContext(CartContext);

 // console.log(username);  
  return (
      <>
          
   <div className='login-form-container '>
     <SignIn />
        
</div>

      </>
  )
}
