import React, { useContext, useEffect, useState } from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { SelectedProductsContext } from "../../context/SelectedProductsContext";

const Like = ({ products }) => {
  const [selected, setSelected] = useState(false);
  const { selectedProducts, addSelectedArr, removeSelectedArr } = useContext(
    SelectedProductsContext
  );
  useEffect(() => {
    if (
      selectedProducts.some((el) => {
        return el.id === products.id;
      })
    ) {
      setSelected(!selected);
    }
  }, []);

  const handleClick = () => {
    setSelected((prev) => {
      const newSel = !prev;
      if (newSel) {
        addSelectedArr(products);
      } else {
        removeSelectedArr(products);
      }
      return newSel;
    });
  };

  return (
    <div className="like" onClick={handleClick}>
      {selected ? (
        <FavoriteIcon></FavoriteIcon>
      ) : (
        <FavoriteBorderIcon></FavoriteBorderIcon>
      )}
    </div>
  );
};

export default Like;
