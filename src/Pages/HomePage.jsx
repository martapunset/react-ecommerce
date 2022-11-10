import React from 'react'
import Main from '../components/Main/Main'
import { Basket } from '../components/Aside/Basket'


export const HomePage = () => {
  //  const { cartItems, addToCart, loadItems,deleteFromCart, checkout,products } = props;
  


  return (
      <>
          
      <div className='container-xl'>
        <div className='row'>
            <div className='col-sm-8'>
            <Main />
            </div>
            <div className='col-sm-4'>
            <Basket />
        
            </div>

        </div>

      </div>
        
      
          





      </>
  )
}
