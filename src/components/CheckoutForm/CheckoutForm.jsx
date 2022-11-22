import React from 'react'
import { useContext } from 'react';
import { CartContext } from '../../CartContext/CartProvider';
import { Checkout } from '../Aside/Checkout';
export const CheckoutForm = () => {

  const { cartItems} = useContext(CartContext);

  console.log(cartItems);

    return (
      <>  

       
<div className="form-column col-md-12 order-md-2 mb-4">
      <h4 className="d-flex justify-content-between align-items-center mb-5">
        <span className="text-muted">Your cart</span>
            <span className="badge badge-secondary badge-pill">{cartItems.length}</span>
      </h4>
          <ul className="list-group mb-3">
          {cartItems.map((item) =>(
     <div key={item.id}>
            <li className="list-group-item d-flex justify-content-between lh-condensed"  >
           
            <img className="basketImg" src={item.img} ></img>
              
                <div >
                  
                <h6 className="my-0">{item.title}</h6>
                <small className="text-muted">Brief description</small>
                </div>
                
                <span class="text-muted">{item.price}</span>
           
            </li>
            
            
             
            </div>
              
              ))}
            
        <li className="list-group-item d-flex justify-content-between bg-light">
          <div className="text-success">
            <h6 className="my-0">Promo code</h6>
            <small>EXAMPLECODE</small>
          </div>
          <span className="text-success">-$5</span>
        </li>
        <li className="list-group-item d-flex justify-content-between">
          <span>Total (USD)</span>
          <strong><Checkout></Checkout></strong>
        </li>
      </ul>

      <form className="card p-2">
        <div className="input-group">
          <input type="text" className="form-control" placeholder="Promo code"/>
          <div class="input-group-append">
            <button type="submit" class="btn btn-secondary">Redeem</button>
          </div>
        </div>
      </form>
    </div>
      
      

                    </>
    
  )
}




