import React, { useState }  from "react";
import FilterCategory from "./FilterCategory";
import {  Outlet, useSearchParams } from "react-router-dom";
import { FilterProducts } from "../../context/FilterProducts";


export default function ProductManager() { 
   const [searchParams, setSearchParams] = useSearchParams();
   const [minValue, setMinValue] = useState(searchParams.get('min')||1);
   const [maxValue, setMaxValue] = useState(searchParams.get('max')||5)
   
  const onChangeMin = (value) => {
   setMinValue(value);
    setSearchParams({ ...Object.fromEntries(searchParams), min: value });
};
  const onChangeMax = (value) => {
   setMaxValue(value);
   setSearchParams({ ...Object.fromEntries(searchParams), max: value });
};
 const handlerClick = ()=>{
   
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
