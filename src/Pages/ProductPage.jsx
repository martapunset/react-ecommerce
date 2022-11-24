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
    const params = useParams() 
    const [datap, setdatap] = useState([]);
    //todo 1h: 20 of dynamic routes video 
    console.log(params)
    useEffect(() => {
        const prueba = async () => {
          const datajson = await getData();
          setdatap(datajson);
          console.log("data"+ datap);
        }
        prueba();
    
     }, [])
    

    //const data = useContext(CartContext)
    console.log(datap)
  return (
      <>
           
          <div className='body-product'>
          <div className=' wrapper-product row'>
              


         

          <div className='col'>
              <CarouselProduct img1={slider1} img2={slider2} />
              </div>
              <div className='col'>
                  <h2>Product title</h2>
              </div>
              
         </div>
         </div>
      
      </>
  )
}
