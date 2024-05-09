import React, { useContext } from "react";
import "./navBar.css";
import { NavLink } from "react-router-dom";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { SelectedProductsContext } from "../../context/SelectedProductsContext";

const NavBar = () => {
  const { selectedProducts } = useContext(SelectedProductsContext);
  return (
    <header>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/ball">The ball of responsibility shifting</NavLink>
        <NavLink to="/puzzle">Puzzle</NavLink>
        <NavLink to="/video">Video</NavLink>
        <NavLink to="/products">Products</NavLink>
        <NavLink to="/selectedProducts">
          <FavoriteIcon />
          {<span>{selectedProducts.length}</span>}
        </NavLink>
      </nav>
    </header>
  );
};

export default NavBar;
