import React from 'react'

const Main =(props)=>{

  const { products, addToCart} = props;
  console.log("products :" + products);
  

  return (
      <main className="wrapper text-center">
      {products.map((product) => (
        
        
        <div className="m-2 p-2" key={product.id}>
         
              <div className="contr">
                  <div className="card" >
                            <a href="single.html" />
                            <img className="product__img img-responsive" src={product.img} alt={product.title} />
                            <span className="new-box">
                                <span className="new-label">New</span>
                            </span>
                                           
                            <div className="shop_desc"><a href="single.html">
                </a><h3><a href="single.html"></a><a href="#">{product.title}</a></h3>
                  <h5>REF: {product.id}</h5>
                                <p>Lorem ipsum consectetuer adipiscing </p>
                                <span className="reducedfrom">{product.price}</span>
                                <span className="actual">{product.price}</span><br />
                                <ul className="buttons">
              
                                      <button className="" > - </button><span>0</span>
                                      <button className="" > + </button>
                                      <button className="" onClick={()=>addToCart(product)}>Add To Cart</button>
                              
                                </ul>
                            </div>
                    
                </div>

              </div>
              </div>   
      ))}

</main>
  );
}

export default Main;
