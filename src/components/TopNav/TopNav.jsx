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

export const TopNav = () => {

  const { user, logout } = useContext(AuthContext)

  //const user = useContext(AuthContext)

  console.log( "render Nav")


  
  
  const navigate = useNavigate();
  const onLogout = () => {

    logout();
     navigate("/login", {
     replace:true,
   })
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
                {" "}
                <Link className="btn" to="/">
                  Shop
                </Link>
              </li>

              <li className="">
                <a href="shop.html">Company</a>
              </li>
              <li className="">
                <a href="contact.html">Contact</a>
              </li>
              
              <li>
                <Link className="btn" to="/login">
                  Login
                </Link>
              </li>

              <div className="clear"></div>
            </ul>
          </div>
        </div>
    
        <div className="dropdown-button">
        <li>
                <button className="" onClick={onLogout}>  //TODO change button toggle login/logout
                  LogOut
                </button>
              </li>
          <span className="username-span">Logged as: {user?.email} </span>
        
          <Dropdownlist>
            <Basket />
          </Dropdownlist>
        </div>
      </header>
    </>
  );
};
export default TopNav;
