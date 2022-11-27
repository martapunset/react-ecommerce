import React from 'react'
import CarouselProduct from '../components/Carousel/Carouselproduct'
import slider1 from "./slider1.jpg";
import slider2 from "./slider2.jpg";
import { useParams } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../CartContext/CartProvider';
import { useEffect } from 'react';
import { getData } from '../api/api';
import { useState } from 'react';
export const ProductPage = () => {

    const {id:productId} = useParams() 
    const [datap, setdatap] = useState([]);
    //todo 1h: 20 of dynamic routes video 
  const { data, addToCart } = useContext(CartContext);
  /*
    useEffect(() => {
        const prueba = async () => {
          const datajson = await getData();
          setdatap(datajson);
          console.log("data"+ datap);
        }
        prueba();
     
     }, [])
    
*/
    //const data = useContext(CartContext)
  console.log(data)
  const filterProduct = data.find((item)=> {
  return item.id==productId
})
console.log()




  return (
      <>
           
          <div className='body-product'>
          <div className=' wrapper-product row'>

          <div className='col'>
              <CarouselProduct img1={slider1} img2={slider2} />
              </div>
              <div className='col'>
            <h2>{filterProduct.title}</h2>
            <button className="btn btn-primary" id="dropdown-item-button" onClick={()=>addToCart(filterProduct)}>Add To Cart</button>
              </div>
              
         </div>
         </div>
      
      </>
  )
}
