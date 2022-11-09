
    export const getData =async (url) => {
       
      try {
        const response = await fetch(url);
        const product = await response.json();
        return product;

      }
      catch (error) {
        <h1>Api response error</h1>
      }  
     
    }
  
