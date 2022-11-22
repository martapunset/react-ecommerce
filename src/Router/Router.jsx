import React from 'react'
//import { ReactDOM } from 'react'
import { Routes, Route } from 'react-router-dom'
import { RegisterForm } from '../components/SignIn/RegisterForm'
import { CheckoutPage } from '../Pages/CheckoutPage'
import { HomePage } from '../Pages/HomePage'
import { ProductPage } from '../Pages/ProductPage'
import { RegisterPage } from '../Pages/RegisterPage'
import { SignInPage } from '../Pages/SignInPage'




export const Router = (props) => {


    return (
      <>
     
           <Routes>
              <Route path='/' element={<HomePage />} />
              <Route path='/checkout' element={<CheckoutPage />} />
              <Route path='/login' element={<SignInPage />} />
          <Route path='/register' element={<RegisterPage />} />
          <Route path='/product' element={<ProductPage />} />
          
            </Routes>
      
      
      </>




    )
}
