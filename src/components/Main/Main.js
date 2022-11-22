import React, { useState } from 'react'

import { useContext } from 'react';
import { CartContext } from '../../CartContext/CartProvider';
import { CartProvider } from '../../CartContext/CartProvider';
import { getData } from '../../api/api';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AlertSuccess from '../Alerts/Alert';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const Main =(props)=>{

//const { products, cartItems, setCartitems} = props;
  const { addToCart } = useContext(CartContext);

  //const { cartItems } = useContext(CartContext);
  //const { setCartItems } = useContext(CartContext);
  const [data, setdata] = useState([]);

  
  //const url = "http://localhost:3001/products";

  useEffect(() => {
    const prueba = async () => {
      const datajson = await getData();
      setdata(datajson);
      console.log("data"+ data);
    }
    prueba();

 }, [])



  return (
    <> 
      <div className='main-wrapper'>
        
        <div className="search-form">
                            <Form>
                              <Form.Control
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                              />
                              <Button variant="outline-success">Search</Button>
                            </Form>
                  </div>
                  </div>
    
      <main className="wrapper text-center">
        
      
      {data.map((product) => (
        
        
        <div className="" key={product.id}>
         
            
                  <div className="productcard " ><Link style={{textDecoration: 'none'}} to="">
                            
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
