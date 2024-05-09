import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import Product from "./Product";

const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    const { data } = await axios.get("https://fakestoreapi.com/products");
    setProducts(data);
  };

  return (
    <div className="products">
      {products.map((product) => {
        return <Product product={product} />;
      })}
    </div>
  );
};

export default Products;
