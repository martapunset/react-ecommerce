    

export const getUser =async () => {
    const url = "http://localhost:3001/users";
    try {
      const response = await fetch();
      const product = await response.json();
      return product;

    }
    catch (error) {
      <h1>Api response error</h1>
    }  
   
}



export const login = async (user) => {
    const url = "http://localhost:3001/users";
       
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        })
     
      const created = await response.json();
      console.log('succesful addition: ', created)
  
    }
    catch (error) {
      console.log("cannot create user")
    }  
   
  }
  
  
    
  