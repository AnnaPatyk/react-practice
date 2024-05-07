import React from "react";
import "./navBar.css";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <header>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/ball">The ball of responsibility shifting</NavLink>
        <NavLink to="/puzzle">Puzzle</NavLink>
        <NavLink to="/video">Video</NavLink>
      </nav>
    </header>
  );
};

export default NavBar;
