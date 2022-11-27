import React, { useState } from 'react'

import { useContext } from 'react';
import { CartContext } from '../../CartContext/CartProvider';
import { CartProvider } from '../../CartContext/CartProvider';
import { getData } from '../../api/api';
import { useEffect } from 'react';
import { Link , useSearchParams} from 'react-router-dom';
import AlertSuccess from '../Alerts/Alert';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const Main =(props)=>{
 
//const { products, cartItems, setCartitems} = props;

  const { addToCart, data } = useContext(CartContext);
  const [searchParams, setSearchParams]=useSearchParams();
  const query = searchParams.get("query") ?? "";
  //const { setCartItems } = useContext(CartContext);
  //.const [data, setdata] = useState([]);

  //const url = "http://localhost:3001/products";

  const handleInputFilter = ({ target }) => {
    const { value } = target;
    setSearchParams({query:value})
  }
 console.log(query)
 //todo search BAR
//todo filter products
  return (
    <> 
      <div className='main-wrapper'>
        
        <div className="search-form">
                            <input  type="text"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              value={query} onChange={handleInputFilter}>
                            </input>
                  </div>
                  </div>
    
      <main className="wrapper text-center">
        
      
        {data
          .filter((products) => {
            if (!query) return true;
            else {
              const productName = products.title.toLowerCase()
              return productName.includes(query.toLowerCase())
            }
           })
          .map((product) => (
        
        
        <div className="" key={product.id}>
         
            
                  <div className="productcard " ><Link style={{textDecoration: 'none'}} to={`/${product.id}`}>
                            
                            <img className="product__img img-responsive" src={product.img} alt={product.title} />
                            
                                           
                            <div className="shop_desc"><a href="single.html">
                </a><h3><a href="single.html"></a><a href="#">{product.title}</a></h3>
                  <h5>REF: {product.id}</h5>
                                <p>Lorem ipsum consectetuer adipiscing </p>
                                <span className="reducedfrom">{product.price}</span>
                                <span className="actual">{product.price}</span><br />
                             
                            </div>
            </Link>
            <button className="btn btn-primary" id="dropdown-item-button" onClick={()=>addToCart(product)}>Add To Cart</button>
              
                </div>
              
          </div> 
     
            
      ))}

      </main>
      </>
  );
}

export default Main;
