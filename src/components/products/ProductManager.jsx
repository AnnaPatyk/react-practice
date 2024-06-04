import React, { useState }  from "react";
import FilterCategory from "./FilterCategory";
import {  Outlet } from "react-router-dom";
import { FilterProducts } from "../../context/FilterProducts";


export default function ProductManager() { 
   const [minValue, setMinValue] = useState(1);
   const [maxValue, setMaxValue] = useState(5)
  const onChangeMin = (value) => {
   setMinValue(value)
};
  const onChangeMax = (value) => {
   setMaxValue(value)
};
 const handlerClick = ()=>{
    console.log("Handler clicked!");
   setMinValue(1);
   setMaxValue(5);
 }

  return (
  <>
  <FilterProducts.Provider value={{onChangeMin ,onChangeMax,minValue,maxValue,handlerClick }}>
   <FilterCategory></FilterCategory>
    <Outlet></Outlet>
  </FilterProducts.Provider>
    
  </>
  );
}
