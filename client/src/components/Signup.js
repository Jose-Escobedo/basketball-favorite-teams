import React from "react";
import Header from "./Header";
import { useState } from "react";

function Signup({ setUser, setIsAuthenticated }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [errors, setErrors] = useState([]);

  function onSubmit(e) {
    e.preventDefault();
    const user = {
      name: username,
      password,
    };

    fetch(`/signup`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    }).then((res) => {
      if (res.ok) {
        res.json().then((user) => {
          setUser(user);
          setIsAuthenticated(true);
        });
      } else {
        res.json().then((json) => setErrors(json.errors));
      }
    });
  }
  return (
    <>
      <Header />
      <div className="signup-container">
        <h2>Register to pick your favorite teams!</h2>
        <form className="signup-form" onSubmit={onSubmit}>
          <div className="row-signup">
            <div className="six columns">
              <label htmlFor="username-input">Enter Your Username</label>
              <input
                className="u-full-width"
                type="text"
                placeholder="Enter username here..."
                id="username-input"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="six columns">
              <label htmlFor="password-input">Enter Your Password</label>
              <input
                className="u-full-width"
                type="text"
                placeholder="Enter password here..."
                id="password-input"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
          <input
            id="button-signup"
            className="button-primary"
            type="submit"
            value="Sign Up"
          />
        </form>
      </div>
    </>
  );
}

export default Signup;
