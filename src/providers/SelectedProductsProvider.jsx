import React, { useState } from "react";
import { SelectedProductsContext } from "../context/SelectedProductsContext";
import "../components/products/products.css";
const SelectedProductsProvider = ({ children }) => {
  const [selectedProducts, setSelectedProducts] = useState(
    JSON.parse(localStorage.getItem("selectedProducts")) || []
  );
  
  const addSelectedArr = (products) => {
    selectedProducts.push(products);
    setSelectedProducts([...selectedProducts]);
    localStorage.setItem("selectedProducts", JSON.stringify(selectedProducts));
  };

  const removeSelectedArr = (products) => {
    const updateArr = selectedProducts.filter(
      (product) => product.id != products.id
    );
    setSelectedProducts(updateArr);
    localStorage.setItem("selectedProducts", JSON.stringify(updateArr));
  };

  return (
    <SelectedProductsContext.Provider
      value={{ selectedProducts, addSelectedArr, removeSelectedArr }}
    >
      {children}
    </SelectedProductsContext.Provider>
  );
};

export default SelectedProductsProvider;
