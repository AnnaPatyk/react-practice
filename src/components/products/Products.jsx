import React, { useContext } from "react";
import Product from "./Product";
import { useLoaderData } from "react-router-dom";
import { FilterProducts } from "../../context/FilterProducts";

const Products = () => {
 const products = useLoaderData();
  const {minValue,maxValue}= useContext(FilterProducts);

  return (
  <>
    <div className="products">
   {products.filter(product => product.rating.rate > minValue && product.rating.rate < maxValue).map((product, index) => {
        return<Product key={index} product={product} />;
      })}
    </div>
  </>
  );
};

export default React.memo(Products);
