import React from "react";
import { CheckoutForm } from "../components/CheckoutForm/CheckoutForm";
import Main from "../components/Main/Main";
import { Register, ShippingForm } from "../components/SignIn/ShippingForm";

export const CheckoutPage = () => {
  return (
    <>
      <div className="container-xl">
        <div className="row">
          <div className="col-lg-5">
            <CheckoutForm />
          </div>
          <div className="col-lg-5">
            <ShippingForm />
          </div>
        </div>
      </div>
    </>
  );
};
