import React from "react";
import { Link, NavLink } from "react-router-dom";

//NavLink establece  una clase si el url coincide con el path

export const NavBar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <Link className="navbar-brand" to="/">
          UserContext
        </Link>

        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <NavLink
              exact
              activeClassName="active"
              className="nav-link "
              to="/"
            >
              Home <span className="sr-only">(current)</span>
            </NavLink>
            <NavLink
              exact
              activeClassName="active"
              className="nav-link"
              to="/login"
            >
              Login
            </NavLink>
            <NavLink
              exact
              activeClassName="active"
              className="nav-link"
              to="/about"
            >
              About
            </NavLink>
          </div>
        </div>
      </nav>
    </div>
  );
};
