import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
function Header({ user, setUser }) {
  function handleLogoutClick() {
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setUser(null);
      }
    });
  }

  return (
    <div className="header-container">
      <div className="header">
        <div className="header-title">
          <h2>Basketball Team Picker</h2>
        </div>
        <div className="list">
          <ul>
            <li className="li-child">
              <Link className="text-link" to="/">
                Home
              </Link>
            </li>
            {user ? (
              <li className="li-child">
                <Link className="text-link" to="/favorites">
                  myTeams
                </Link>
              </li>
            ) : (
              <li className="li-child">
                <Link className="text-link" to="/teams">
                  Teams
                </Link>
              </li>
            )}
            {user ? (
              <button onClick={handleLogoutClick}>Logout</button>
            ) : (
              <li className="li-child">
                <Link className="text-link" to="/login">
                  Login
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}
export default Header;
