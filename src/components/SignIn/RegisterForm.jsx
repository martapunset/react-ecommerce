import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../../auth/context";






export const RegisterForm = () => {


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  const { login } = useContext(AuthContext)
  const {register}=useContext(AuthContext)
  //const authState=useContext(AuthContext)
  //const { username, password, isLoading, error, isLoggedIn } = authState;
  const [registerData, setregisterData ] = useState({ 
    email: "",
    password: "",
    password2:"",
    firstname: "",
    lastname: "",
    phone: "",
    address: "",
    postalCode: ""
  })

  const { email, password, password2, firstname, lastname, phone, } = registerData;



 //const { setUsername } = useContext(CartContext);
  const onInputChange = ({ target }) => {
    const { name, value } = target;
    
    setregisterData({
      ...registerData,
      [name]: value
    })
    console.log(value)
  
 }

  

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("this is submiiiiit");
   register(registerData);   //function to receive and validate the resgister data
    console.log(registerData, "loginData handle submit")

  };
  //const { id, user } = login;


  return (
    <>
      <div className="form-column col-lg-12">
        <form className="p-5 needs-validation " onSubmit={handleSubmit}>
          <div className="row g-3">
            <div className="col-12">
              <label className="form-label">Email</label>
              <input
                className="form-control"
                id="firstName"
                type="email"
                value={email}
                name="email"
                placeholder="name@example.com"
                onChange={onInputChange}
              />

              <label className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder=""
                value={password}
                name="password"
                required=""
                onChange={onInputChange}
              />

              <label className="form-label">Confirm Password</label>
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder=""
                value={password2}
                required=""
                name="password2"
                onChange={onInputChange}
              />

              <hr />
              <label for="firstName" className="form-label">
                First name
              </label>
              <input
                type="text"
                className="form-control"
                id="firstName"
                placeholder=""
                value={firstname}
                required=""
                name="firstname"
                onChange={onInputChange}
              />

              <label for="lastName" className="form-label">
                Last name
              </label>
              <input
                type="text"
                className="form-control"
                id="lastName"
                placeholder=""
                value={lastname}
                required=""
                name="lastname"
                onChange={onInputChange}
              />

              <label for="phone" className="form-label">
                Phone
              </label>
              <input
                type="phone"
                className="form-control"
                id="lastName"
                placeholder=""
                value={phone}
                required=""
                name="phone"
                onChange={onInputChange}
              />
            </div>
          </div>

          <button className="w-100 btn btn-secondary btn-lg" type="submit">
            Register
          </button>
        </form>
      </div>
    </>
  );
};
