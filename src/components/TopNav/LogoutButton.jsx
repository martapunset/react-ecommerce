import React from 'react'
import { useContext } from "react";
import { AuthContext } from "../../auth/context";
import { useNavigate } from 'react-router-dom';

const LogoutButton = (props) => {
    const { logout } = useContext(AuthContext);
   /* const navigate = useNavigate();
    navigate("/login", {
        replace: true,
      });
    */
 console.log(logout)
  return (
    <><button className="btn  btn-secondary" onClick={logout}>
    LogOut
      </button>
          
    </>
  )
}

export default LogoutButton