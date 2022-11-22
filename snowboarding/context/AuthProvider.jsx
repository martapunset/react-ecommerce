import { AuthContext } from "./AuthContext";
import { useReducer } from "react";
import { AuthReducer } from "./AuthReducer";
import { types } from "../types/types";


export const AuthProvider = (children) => {
  const initArgs = {
    isLogged: false,
    user:'',
  };
//no se pasa el dispatch por provider value
  const [authState, dispatch] = useReducer(AuthReducer, initArgs);
//evitar pasar el dispatch
    const login = () => {
        const user = {
            id: 22,
            user:'Pau Civill'
        }
        dispatch({
            type: types.login,
            payload:user
        })
    }
    /*
          
            <AuthContext.Provider value={login
               }>
              {children}
          </AuthContext.Provider>  */
    return (
      
        <>
            
    </>
  );
};
