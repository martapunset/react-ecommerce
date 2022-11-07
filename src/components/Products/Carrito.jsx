import React from 'react'
import { useState } from 'react';
import products from '../../assets/db/db';

export const AddCarrito = (product, { initialValue = 0 }) => {
    const [counter, setCounter] = useState(initialValue);

    const increaseValue = () => {
        setCounter(prevState => prevState + 1)
    };
    const substractValue = () => {
        if (counter === 0) return initialValue;
        else setCounter(prevState => prevState - 1);
    };
    const resetValue = () => {
        setCounter(initialValue = 0);
    }

    const addToCart = (product) => {
        //localstorage function
        console.log(product);
        // El arreglo:
        var array = [];
        array.push("producto"+product);
        console.log("arraylleno"+array)
        // Se guarda en localStorage despues de JSON stringificarlo 
        localStorage.setItem('myArray', JSON.stringify(array));

        // Obtener el arreglo de localStora
       
    }

        return (
      
            <>       
  
                <button className="" onClick={substractValue}> - </button><span>{counter}</span>
                <button className="" onClick={increaseValue}> + </button>
                <button className="" onClick={addToCart(counter)}>Add To Cart</button>
            
            </>
    
    )
    
    
}
    

export const ShowCarrito = () => {
   let arrayProducts = localStorage.getItem('myArray');
    // Se parsea para poder ser usado en js con JSON.parse :)
    arrayProducts = JSON.parse(arrayProducts);

    return (
        

        
    
           <><aside>
            {arrayProducts.map((product) => (


                <li key={product.id}>{product.name}</li>
            ))}
            </aside>
        </>

    )
    
  
       
}
    
