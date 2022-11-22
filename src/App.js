import './App.css';
//import { fetchProducts} from './api/api.js';
import TopNav from './components/TopNav/TopNav';

//import ContainerProduct from './components/ContainerProduct/ContainerProduct';

import React, { useEffect, useState } from "react";
import Footer from './components/Footer/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Router } from './Router/Router';

import { useContext } from 'react';
import { CartContext } from './CartContext/CartProvider';

 


function App() {

  console.log("app")
 
  return (
   
      <BrowserRouter>
        <TopNav />
        <Router  />
        <Footer />
     </BrowserRouter>
   
  
  );
}

export default App;
