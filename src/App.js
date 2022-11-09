import './App.css';
//import { fetchProducts} from './api/api.js';
import TopNav from './components/TopNav/TopNav';
import Main from './components/Main/Main';
//import ContainerProduct from './components/ContainerProduct/ContainerProduct';

import React, { useEffect, useState } from "react";
import Footer from './components/Footer/Footer';
import { Basket } from './components/Aside/Basket';
import { getData} from './api/api.js'



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


  

  //console.log(data);

function App() {

  const [data, setdata] = useState([]);


  const url = "http://localhost:3001/products";


  useEffect(() => {
    const prueba = async () => {
      const datajson = await getData(url);
      setdata(datajson);
    }
    prueba();

 }, [url])



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
  const deleteFromCart = (product) => {

    const items = cartItems.filter((item) => item.id !== product.id);

    setCartItems(items);
    
  }
  /*
  const checkout = (cartItems) => {
    let totalPrice = 0;
    const total = cartItems.map(x =>
      totalPrice += x.price);
    return totalPrice; 


  }
*/
    

  
  
 
  return (
    <>
      <TopNav />
      <div className='container-xl'>
        <div className='row'>
            <div className='col-sm-8'>
            <Main addToCart={addToCart} products={data} />
            </div>
            <div className='col-sm-4'>
            <Basket addToCart={addToCart} deleteFromCart={deleteFromCart} loadItems={loadItems} cartItems={cartItems} />
           
            </div>

        </div>

      </div>
        
      <Footer />
   
    </>
  );
}

export default App;
