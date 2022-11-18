import { calculateNewValue } from "@testing-library/user-event/dist/utils";
import React from "react";
import { useState } from "react";
import { CartContext } from "../../CartContext/CartContext";
import { useContext } from "react";
import { Link } from "react-router-dom";

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
      <h1>{username}</h1>
      <h1>{password}</h1>
      <div className="modal-dialog" role="document">
        <div className="modal-content rounded-4 shadow">
          <div className="modal-header p-5 pb-4 border-bottom-0">
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
            <h1 className="fw-bold mb-0 fs-2">Sign up</h1>
          </div>

          <div className="modal-body p-5 pt-0">
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

                <label for="floatingInput">{username}</label>
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
                className="w-100 mb-2 btn btn-lg rounded-3 btn-primary"
                type="submit"
              >
                Sign up
              </button>

              <hr className="my-4" />

              <Link className="btn btn-primary" to="/register">
                Register
              </Link>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
