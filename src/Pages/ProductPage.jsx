import React from 'react'
import CarouselProduct from '../components/Carousel/Carouselproduct'
import slider1 from "./slider1.jpg";
import slider2 from "./slider2.jpg";




export const ProductPage = () => {
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
