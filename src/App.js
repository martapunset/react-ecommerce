import './App.css';

import TopNav from './components/TopNav/TopNav';
import Main from './components/Main/Main';
//import ContainerProduct from './components/ContainerProduct/ContainerProduct';

import React, { useEffect, useState } from "react";
import Footer from './components/Footer/Footer';
import { Basket } from './components/Aside/Basket';
import data from "./assets/db/db";


function loadItems() {





  const items = localStorage.getItem("products");

  if (items) {
    try {
      return JSON.parse(items);
    } catch (error) {
      return [];
    }
  } else {
    return [];
  }
}

function App() {



  const url = "http://localhost:3000/products";
 
  const getData = async () => {
    const response = await fetch(url);
    const products = await response.json();
    const data = products.map(data => ({
      id: data.id,
      title: data.title,
      price: data.price,
      img: data.img,
      qty:data.qty
    }))
    return data;
    }
    
  
  
  

  console.log(getData());


  const [cartItems, setCartItems] = useState(() => loadItems());

  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(cartItems));
  }, [cartItems]);
  


  const addToCart = (product) => {

    const exist = cartItems.find(x => x.id === product.id)  //looking for rpoduct in array cartItems []
    if (exist) {
      setCartItems(
        cartItems.map(x =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x));
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }])
    }

  };
  

  return (
    <>
      <TopNav />
      <div className='container-xl'>
        <div className='row'>
            <div className='col-sm-8'>
                <Main addToCart={addToCart} products={data} />
            </div>
            <div className='col-sm-4'>
               <Basket addToCart={addToCart} loadItems={loadItems} cartItems= {cartItems} />
            </div>

        </div>

      </div>
        
      <Footer />
   
    </>
  );
}

export default App;
