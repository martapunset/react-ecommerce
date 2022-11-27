import React from "react";
import { SignIn } from "../components/SignIn/SignIn";
import { CartContext } from "../CartContext/CartProvider";
import { useContext } from "react";
import Login from "../components/SignIn/Login";
import { AuthContext } from "../auth/context";
import { Navigate } from "react-router-dom";
import { AuthProvider } from "../auth/context"




export const SignInPage = ({children}) => {

  
  //const { isLogged } = useContext(AuthContext)
  const { user} = useContext(AuthContext);

  return (<>
    {user&&(<Navigate to="/" replace={true} />)}

      <div className="login-form-container ">
        <SignIn />
      </div>
      </>
  );
};
