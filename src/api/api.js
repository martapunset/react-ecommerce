
    export const getData =async () => {
      const url = "http://localhost:3001/products";
      try {
        const response = await fetch(url);
        const product = await response.json();
        return product;

      }
      catch (error) {
        <h1>Api response error</h1>
      }  
     
} 


