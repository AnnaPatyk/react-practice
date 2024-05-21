import axios from "axios";
import React, { useEffect, useMemo } from "react";
import { useState } from "react";
import Product from "./Product";
import FilterCategory from "./FilterCategory";

const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getProducts();
  }, []);
  const [filtercategory, setFiltercategory] = useState('all')
  const getProducts = async () => {
    const { data } = await axios.get("https://fakestoreapi.com/products");
    setProducts(data);
  };
 const handlerClickFilter = (item)=>{ 
   setFiltercategory(item)
 };
 const filterMap =useMemo(()=>({
   [filtercategory]:(obj) =>{
      console.log('rend');
      if(filtercategory === 'all'){
         return true
      }else if(obj.category === filtercategory){
         return true
      }
     }
 }),[filtercategory]) 
  return (
  <>
    <FilterCategory products={products} handlerClickFilter={handlerClickFilter} ></FilterCategory>
    <div className="products">
      {products.filter(filterMap[filtercategory]).map((product, index) => {
        return <Product key={index} product={product} />;
      })}
    </div>
  </>
  );
};

export default React.memo(Products);
