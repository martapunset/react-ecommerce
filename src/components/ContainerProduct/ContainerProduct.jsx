import React from 'react';
//import { ContainerProduct } from './components/Product/Product';
import "../Products/products.css";

const ContainerProduct = ({children}) => {
    return (
        <>
            <div className="row shop_box-top">
            <div className="col-md-3 shop_box">
                {children}

                
                </div>
                </div>
        </>
    );
};
export default ContainerProduct;
