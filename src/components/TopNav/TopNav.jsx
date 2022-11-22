import React from "react";
import { Link } from "react-router-dom";
import Dropdownlist from "../Dropdown/Dropdown";
import { Basket } from "../Aside/Basket";
import logo from "./logo.png";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Login from "../SignIn/Login";

export const TopNav = () => {
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
          <span className="username-span">Logged as: </span>
        
          <Dropdownlist>
            <Basket />
          </Dropdownlist>
        </div>
      </header>
    </>
  );
};
export default TopNav;
