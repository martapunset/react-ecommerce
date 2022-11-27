import React from "react";
import { CheckoutForm } from "../components/CheckoutForm/CheckoutForm";
import Main from "../components/Main/Main";
import { RegisterForm } from "../components/SignIn/RegisterForm";

export const RegisterPage = () => {
  return (
    <>
      <div className="container-xl">
        <div className="row">
          <div className="col-lg-3"></div>
          <div className="col-lg-5">
            <h1>Register </h1>
            <RegisterForm />
          </div>
          <div className="col-lg-3"></div>
        </div>
      </div>
    </>
  );
};
