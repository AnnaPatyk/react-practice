import React, { useContext } from "react";
import { SelectedProductsContext } from "../../context/SelectedProductsContext";
import Product from "./Product";

const SelectedProducts = () => {
  const { selectedProducts } = useContext(SelectedProductsContext);
  const emptyBlock = (
    <div>
      <h1>Ви ще не обрали жодного товару</h1>
    </div>
  );
  return (
    <div className="selected-products">
      {selectedProducts.length
        ? selectedProducts.map((product) => {
            return <Product product={product} />;
          })
        : emptyBlock}
    </div>
  );
};

export default SelectedProducts;
