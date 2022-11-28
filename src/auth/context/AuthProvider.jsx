import { AuthContext } from "./AuthContext";
import { useReducer } from "react";
import { AuthReducer } from "./AuthReducer";
import { types } from "../types/types";
//import { Navigate } from "react-router-dom";
import { getUser, postUser } from "../../api/apiLogin";
import { Navigate , useNavigate} from "react-router-dom";

export const AuthProvider = ({ children }) => {
  const initArgs = {
    isLogged: false,
    // user:'',
  };
  const init = () => {
    const user = JSON.parse(localStorage.getItem("user"));
    //1.56 minutes video jose
    return {
      
      isLogged: !!user,
      user,
    };
  };


  const logout = () => {
    localStorage.removeItem("user");
    dispatch({
      type: types.logout,
    });
    //navigate("/login", {   //todo navigate to index when logged out
    //  replace:true,
    //  })
   
  };

  //no se pasa el dispatch por provider value
  const [authState, dispatch] = useReducer(AuthReducer, {}, init); //init

  const login = (user) => {
    const validateUser = async () => {
      const datajson = await getUser(user.email);

      
      if (datajson) {
        if (user.email == datajson.email && user.password == datajson.password) {
          localStorage.setItem("user", JSON.stringify(user));
          dispatch({
            type: types.login,
            payload: user,
          });
       
        } else {
          
          console.log("user or pasword incorrect");
        }
      }
    };
    validateUser();
    //todo navigate to index when logged out
    //postUser(user);

    //todo navigate to index when logged out
  };

  const register = (user) => {
    console.log(user.email, "checking email sent in register");
    const validateUser = async () => {
      const datajson = await getUser(user.email);
      console.log(datajson, "validate");

      if (datajson == undefined) {
        postUser(user);
        dispatch({
          type: types.register,
        });
      } else {
        console.log("user already exists");
      }
    };

    //todo navigate to index when logged out
    //postUser(user);
    validateUser();
  };

  return (
    <>
      <AuthContext.Provider
        value={{
          ...authState,
          login: login,
          logout: logout,
          register: register,
        }}
      >
        {children}
      </AuthContext.Provider>
    </>
  );
};
