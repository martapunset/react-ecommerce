    

export const getUser =async (email) => {
    const url = "http://localhost:3001/users";
  try {
    const response = await fetch(url);
    const users = await response.json();
   const user = users.find(user => user.email === email)
        
   
      console.log(user, "userfind")
      return user;

    
  } catch (error) {
    <h1>Api response error</h1>
    console.log("api error")
    }  
   
}



export const postUser = async (user) => {
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
  
  
    
  