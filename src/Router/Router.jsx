import React from 'react'
import { ReactDOM } from 'react'
import { Routes, Route } from 'react-router-dom'
import { CheckoutPage } from '../components/CheckoutPage.jsx/CheckoutPage'
import { HomePage } from '../Pages/HomePage'

export const Router = (props) => {


    return (
      <>
     
           <Routes>
          <Route path='/' element={<HomePage />} />
              <Route path='/checkout' element={<CheckoutPage />} />
      
            </Routes>
      
      
      </>




    )
}
