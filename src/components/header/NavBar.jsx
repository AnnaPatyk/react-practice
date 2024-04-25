import React from "react";
import "./navBar.css";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <header>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/ball">The ball of responsibility shifting</NavLink>
      </nav>
    </header>
  );
};

export default NavBar;