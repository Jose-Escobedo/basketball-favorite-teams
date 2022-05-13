import React from "react";
import Header from "./Header";
import { useState } from "react";
import Signup from "./Signup";

function Login({ setUser, setIsAuthenticated }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState([]);

  function onSubmit(e) {
    e.preventDefault();
    const user = {
      username: username,
      password,
    };

    fetch(`/login`, {
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
        res.json().then((json) => setError(json.error));
      }
    });
  }
  return (
    <div className="signup-container">
      <h2>Login to view your favorite teams!</h2>
      <form className="signup-form" onSubmit={onSubmit}>
        <div className="row-signup">
          <div className="six columns">
            <label htmlFor="username-input">Enter Your Username</label>
            <input
              className="u-full-width"
              type="text"
              placeholder="Enter username here..."
              id="username-login"
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
              id="password-login"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>
        <input
          id="button-login"
          className="button-primary"
          type="submit"
          value="Login"
        />
      </form>
    </div>
  );
}

export default Login;
{
  /* {error ? <Signup setUser={setUser} setIsAuthenticated={setUser} /> : null} */
}
