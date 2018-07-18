import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
const Navbar = props => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <Link className="navbar-brand" to="/">
      Ludum
    </Link>
    <div>
      <ul className="navbar-nav">
        <li
          className={
            window.location.pathname === "/about"
              ? "nav-item active"
              : "nav-item"
          }
        >
          <Link to="/about" className="nav-link">
            About
          </Link>
        </li>
        <li
          className={
            window.location.pathname === "/game"
              ? "nav-item active"
              : "nav-item"
          }
        >
          <Link to="/game" className="nav-link">
            Game
          </Link>
        </li>
        <li
          className={
            window.location.pathname === "/leaderboard"
              ? "nav-item active"
              : "nav-item"
          }
        >
          <Link to="/leaderboard" className="nav-link">
            Leaderboard
          </Link>
        </li>
      </ul>
    </div>
  </nav>
);

export default Navbar;

