import React from 'react'
import { useState } from 'react';
export const RegisterForm = () => {
   
    const initialState ={
        "username": 'marta@gmail.xom',
        "password":'',
        "firstname": '',
        "lastname":'',
        "phone": '',
        "address": '',
        "postalCode":''
        
  }
  const [user, setUser] = useState([initialState]);
  console.log("user",user)


  return (
      <>
      
      <div className="form-column col-lg-12">
            
              <form className="p-5 needs-validation " >
                <div className="row g-3">
            <div className="col-12">
                    <label className="form-label">Email</label>
              <input className="form-control" id="firstName"
              type='email'
              value={user.username}
              name='username'
              placeholder="name@example.com"
              onChange={(event )=>setUser(event.target.value)}/>
                    
                    <label  className="form-label">Password</label>
              <input type="password" className="form-control" id="password" placeholder="" value="" required="" />

              <label  className="form-label">Confirm Password</label>
                    <input type="password" className="form-control" id="password" placeholder="" value="" required=""/>
              
              <hr/><hr/>
              <label for="firstName" className="form-label">First name</label>
                    <input type="text" className="form-control" id="firstName" placeholder="" value="" required=""/>
                    
                    <label for="lastName" className="form-label">Last name</label>
                    <input type="text" className="form-control" id="lastName" placeholder="" value="" required=""/>
                    
                    <label for="lastName" className="form-label">Phone</label>
                    <input type="text" className="form-control" id="lastName" placeholder="" value="" required=""/>
                  </div>
      
                  
                  
      
                  
                  
                </div>
      
                <hr className="my-4"/>
      
                
                <hr className="my-4"/>
      
      
               
      
                <button className="w-100 btn btn-primary btn-lg" type="submit">Continue to checkout</button>
              </form>
            </div>
          </>
  )
}
