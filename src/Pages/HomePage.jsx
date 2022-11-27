import React from "react";
import Main from "../components/Main/Main";
import { Basket } from "../components/Aside/Basket";
import slider1 from "./slider1.jpg";
import slider2 from "./slider2.jpg";
import slider3 from "./slider3.jpg";
import CarouselProduct from "../components/Carousel/Carouselproduct";
export const HomePage = () => {
  //  const { cartItems, addToCart, loadItems,deleteFromCart, checkout,products } = props;

  return (
    <>
      <div className="container-fluid">
        <div className="carousel-container container-fluid">
          <CarouselProduct img1={slider1} img2={slider2} img3={slider3}/>
        </div>

        <Main />
      </div>
    </>
  );
};
