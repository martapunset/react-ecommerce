import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import { CartProvider } from './CartContext/CartProvider';

import './index.css';
import './App.css';
import { AuthProvider } from './auth/context';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( 
  //<React.StrictMode>
  <AuthProvider>
   <CartProvider>
    
    <App />
    </CartProvider>
    </AuthProvider>
 //// </React.StrictMode>
);


