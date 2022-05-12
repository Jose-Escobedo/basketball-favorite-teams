import React from "react";
import Header from "./Header";

import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
function Home({ user }) {
  if (user) {
    return <h1>Welcome, {user.name}!</h1>;
  } else {
    return (
      <div className="section hero">
        <div className="container">
          <div className="row">
            <div className="one-half column">
              <h4 className="hero-heading">
                Ever wanted to pick your favorite basketball teams? Register now
                to pick your basketball teams.
              </h4>
              <button className="button button-primary">
                <Link className="text-link" to="/signup">
                  Signup
                </Link>
              </button>
            </div>
            <div className="one-half column">
              <img id="logo-main" src={"https://svgshare.com/i/h2E.svg"} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
