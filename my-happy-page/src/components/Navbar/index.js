import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
  return (
    <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-white">
      <Link className="navbar-brand" to="/">
        Happy Things
      </Link>
      <div>
        <ul className="navbar-nav justify-content-end">
          <li className="nav-item">
            <Link
              to="/"
              className={
                window.location.pathname === "/" || window.location.pathname === "/about"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              About
            </Link>
          </li>
          {/* <li className="nav-item">
            <Link
              to="/discover"
              className={window.location.pathname === "/discover" ? "nav-link active" : "nav-link"}
            >
              Discover
            </Link>
          </li> */}
          <li className="nav-item">
            <Link
              to="/slide"
              className={window.location.pathname === "/slide" ? "nav-link active" : "nav-link"}
            >
              Photos
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
