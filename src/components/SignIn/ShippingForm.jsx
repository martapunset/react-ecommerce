import React from 'react'

export const ShippingForm = () => {


    const user ={
        "id": 106,
        "title": "Board 1",
        "price": 88,
        "img":"../img/e1.jpg",
        "qty": 0
        
      }


  return (
      <>
      
      <div className="form-column col-lg-12">
              <h4 className="mb-3">Billing address</h4>
              <form className="p-5 needs-validation " novalidate="">
                <div className="row g-3">
                  <div className="col-12">
                    <label for="firstName" className="form-label">First name</label>
                    <input type="text" className="form-control" id="firstName" placeholder="" value="" required=""/>
                    
                    <label for="lastName" className="form-label">Last name</label>
                    <input type="text" className="form-control" id="lastName" placeholder="" value="" required=""/>
                    
                  </div>
      
                  
                  
      
                  <div className="col-12">
                    <label for="email" className="form-label">Email <span className="text-muted">(Optional)</span></label>
                    <input type="email" className="form-control" id="email" placeholder="you@example.com"/>
                    <div className="invalid-feedback">
                      Please enter a valid email address for shipping updates.
                    </div>
                  </div>
      
                  <div className="col-12">
                    <label for="address" className="form-label">Address</label>
                    <input type="text" className="form-control" id="address" placeholder="1234 Main St" required=""/>
                    <div className="invalid-feedback">
                     
                    </div>
                  </div>
      
                  <div className="col-12">
                    <label for="address2" className="form-label">Address 2 <span className="text-muted">(Optional)</span></label>
                    <input type="text" className="form-control" id="address2" placeholder="Apartment or suite"/>
                  </div>
                 
                  <div className="col-md-5">
                    <label for="country" className="form-label">Country</label>
                    <select className="form-select" id="country" required="">
                      <option value="">Choose...</option>
                      <option>Spain</option>
                    </select>
                    <div className="invalid-feedback">
                      Please select a valid country.
                    </div>
                  </div>
      
                  <div className="col-md-4">
                    <label for="state" className="form-label">State</label>
                    <select className="form-select" id="state" required="">
                      <option value="">Choose...</option>
                      <option>Barcelona</option>
                    </select>
                    <div className="invalid-feedback">
                      Please provide a valid state.
                    </div>
                  </div>
      
                  <div className="col-md-3">
                    <label for="zip" className="form-label">Zip</label>
                    <input type="text" className="form-control" id="zip" placeholder="" required=""/>
                    <div className="invalid-feedback">
                      Zip code required.
                    </div>
                  </div>
                </div>
      
                <hr className="my-4"/>
      
                <div className="form-check">
                  <input type="checkbox" className="form-check-input" id="same-address"/>
                  <label className="form-check-label" for="same-address">Shipping address is the same as my billing address</label>
                </div>
      
                <div className="form-check">
                  <input type="checkbox" className="form-check-input" id="save-info"/>
                  <label className="form-check-label" for="save-info">Save this information for next time</label>
                </div>
      
                <hr className="my-4"/>
      
      
               
      
                <button className="w-100 btn btn-primary btn-lg" type="submit">Continue to checkout</button>
              </form>
            </div>
          </>
  )
}
