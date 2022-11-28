import React from "react";
import CarouselProduct from "../components/Carousel/Carouselproduct";
import slider1 from "./slider1.jpg";
import slider2 from "./slider2.jpg";
import slider3 from "./slider3.jpg";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../CartContext/CartProvider";


import { useState } from "react";
export const ProductPage = () => {
  const { id: productId } = useParams();
  const [datap, setdatap] = useState([]);
  //todo 1h: 20 of dynamic routes video
  const { data, addToCart } = useContext(CartContext);

  //const data = useContext(CartContext)
  console.log(data);
  const filterProduct = data.find((item) => {
    return item.id == productId;
  });
  console.log();
 const{title, price, info, img}=filterProduct
  return (
    <>
      <div className="body-product">
        <div className=" wrapper-product row">
          <div className="col">
            <CarouselProduct img1={img} img2={slider2} img3={slider3} />
          </div>
          <div className="col">
            <h2>{title}</h2>
            <hr/>
            <div>{info}</div>
            <hr/>
            <div><span>{price} Euros</span></div> <br/>
            <button
              className="btn btn-primary"
              id="dropdown-item-button"
              onClick={() => addToCart(filterProduct)}
            >
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
