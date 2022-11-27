import { calculateNewValue } from "@testing-library/user-event/dist/utils";
import React from "react";
import { useState } from "react";
import { CartContext } from "../../CartContext/CartProvider";
import { useContext } from "react";
import { Link ,Navigate} from "react-router-dom";



import { AuthContext } from "../../auth/context";


export const SignIn = () => {


  const{login}=useContext(AuthContext)
  //const authState=useContext(AuthContext)
  //const { username, password, isLoading, error, isLoggedIn } = authState;
  const [loginData, setloginData ] = useState({ 
    email: "",
    password:""
  })

  const { email, password } = loginData;



 //const { setUsername } = useContext(CartContext);
  const onInputChange = ({ target }) => {
    const { name, value } = target;
    
    setloginData({
      ...loginData,
      [name]: value
    })
    
    console.log(loginData)
 }

  

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("this is submiiiiit");
    login(loginData);
    console.log(loginData, "loginData handle submit")

  };
  //const { id, user } = login;

  return (
    <>
   
      <h1>Login</h1>
    
     
      <form className="" onSubmit={handleSubmit}>
        <div className="form-floating mb-3">
          <input
            className="form-control rounded-3"
            id="floatingInput"
            type="email"
            value={email}
            name="email"
            placeholder="name@example.com"  //TODO falta controlar el campo al evento
            onChange={onInputChange}
             //every time u type a letter it send the request
          />  

          <label for="floatingInput">Email</label>
        </div>

        <div className="form-floating mb-3">
          <input
            className="form-control rounded-3"
            id="floatingPassword"
            type="password"
            value={password}
            name="password"
            placeholder="password"
            onChange={onInputChange}
            
          />

          <label for="floatingPassword">Password</label>
        </div>
        <button
          className="w-100 mb-2 btn btn-lg rounded-3 btn-secondary"
          type="submit"
        >
          Sign up
        </button>

        <hr className="my-4" />
        <div>Don't have an account?</div>
        <Link className="btn btn-secondary" to="/register">
          Register
        </Link>
      </form>
    </>
  );
};
