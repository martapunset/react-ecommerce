import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Dropdownlist from "../Dropdown/Dropdown";
import { Basket } from "../Aside/Basket";
import logo from "./logo.png";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Login from "../SignIn/Login";
import { useContext } from "react";
import { AuthContext } from "../../auth/context";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
export const TopNav = () => {
  const { user, logout,authState} = useContext(AuthContext);

console.log(authState)
  console.log(user);
  //TODO nav bar no se renderiza despues del logout

  let buttonlog = "";
 
  if (user!=null) {
    buttonlog = <LogoutButton />
      
    console.log("logout")
  } else {
    console.log("login")
     buttonlog= <Link to="/login">Login</Link>

  }

  return (
    <>
      <header className="container-fluid d-flex">
        <div className="row">
          <div className="header">
            <div className="logo"></div>

            <ul className="nav menu" id="nav">
              <li>
                <img src={logo} />
              </li>
              <li>
            
                <Link className="btn" to="/">
                  Shop
                </Link>
              </li>

             
              <li className="">
                <a href="">Contact</a>
              </li>
                
              <li> { buttonlog}</li>

              <div className="clear"></div>
            </ul>
          </div>
        </div>

        <div className="dropdown-button">
          

          <span className="username-span">{user&&"Logged as:"} {user?.email} </span>

          <Dropdownlist>
            <Basket />
          </Dropdownlist>
        </div>
      </header>
    </>
  );
};
export default TopNav;
