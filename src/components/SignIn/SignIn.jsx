import { calculateNewValue } from "@testing-library/user-event/dist/utils";
import React from "react";
import { useState } from "react";
import { CartContext } from "../../CartContext/CartProvider";
import { useContext } from "react";
import { Link } from "react-router-dom";

import { useNavigate } from "react-router-dom";
/*
const useField = ({ type }) => {
    const [value, setValue] = useState('');
    const onChange = event => {
        setValue(event.target.value)
    }
    return {
        type,
        value,
        onChange
    }
}
*/

export const SignIn = () => {
  //   const username = useField({ type: 'email' })  //reuse it in the form
  // const password = useField({type:'password'})
  //   const { username } = useContext(CartContext);
  //const { setUsername } = useContext(CartContext);
  const [username, setUsername] = useState("undefined");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("this is submiiiiit");
  };
 

  return (
    <>
      {" "}
      <h1>Login</h1>
      <h5>{username}</h5>
      <h5>{password}</h5>
      <form className="" onSubmit={handleSubmit}>
        <div className="form-floating mb-3">
          <input
            className="form-control rounded-3"
            id="floatingInput"
            type="email"
            value={username}
            name="username"
            placeholder="name@example.com"
            onChange={(event) => setUsername(event.target.value)}
          />

          <label for="floatingInput">Username</label>
        </div>

        <div className="form-floating mb-3">
          <input
            className="form-control rounded-3"
            id="floatingPassword"
            type="password"
            value={password}
            name="password"
            placeholder="password"
            onChange={(event) => setPassword(event.target.value)}
          />

          <label for="floatingPassword">Password</label>
        </div>
        <button
          className="w-100 mb-2 btn btn-lg rounded-3 btn-secondary"
          type="submit"
        >
          Sign up
        </button>

        <hr className="my-4" />

        <Link className="btn btn-secondary" to="/register">
          Register
        </Link>
      </form>
    </>
  );
};
