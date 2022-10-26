//import React from 'react'

import products from "../../assets/db/db";
import ContainerProduct from "../ContainerProduct/ContainerProduct";
import "./products.css";
console.log(products);


 const Products = () => {
     return (
      
         <> <section>
           
             {products.map((product) => (
                 <ContainerProduct className="card" key={product.id}>
                     <a href="single.html" />
                         <img className="product__img"src={product.img} className="img-responsive" alt={product.title} />
                          <span className="new-box">
                    <span className="new-label">New</span>
                </span>
                <span className="sale-box">
                    <span className="sale-label">Sale!</span>
                </span>
             <div className="shop_desc"><a href="single.html">
            </a><h3><a href="single.html"></a><a href="#">aliquam volutp</a></h3>
                    <p>Lorem ipsum consectetuer adipiscing </p>
                    <span className="reducedfrom">$66.00</span>
                    <span className="actual">$12.00</span><br />
                    <ul className="buttons">
                        <li className="cart"><a href="#">Add To Cart</a></li>
                        <li className="shop_btn"><a href="#">Read More</a></li>
                        <div className="clear"> </div>
                    </ul>
                </div>
                    


                 </ContainerProduct>
                 
             )

             )}
            </section>
         </>
     );
};
export default Products;
