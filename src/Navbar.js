import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-dark bg-dark navbar-expand-md text-white">
        <a href="" style={{ color: "white", textDecoration: "none" }}>
          Help Me Out
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#clp"
        >
          <span className="navbar-toggler-icon "></span>
        </button>
        <div className="collapse navbar-collapse" id="clp">
          <ul className="navbar-nav ms-auto">
            <NavLink
              to="/about"
              style={{
                color: "white",
                textDecoration: "none",
                marginRight: 30,
              }}
            >
              <li>About</li>
            </NavLink>
            <NavLink
              to="/help"
              style={{ color: "white", textDecoration: "none" }}
            >
              <li>help</li>
            </NavLink>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
