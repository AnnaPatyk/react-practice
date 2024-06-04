import axios from 'axios';
import React, {useContext, useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import InputNumberFilter from "../products/InputNumberFilter"
import { FilterProducts } from '../../context/FilterProducts';


 function FilterCategory() {
    const {onChangeMin ,onChangeMax,minValue,maxValue, handlerClick}= useContext(FilterProducts);
   const [categories, setCategories] = useState([]);
   useEffect(() => {
    const fetchCategories = async () => {
      const categoriesData = await getCategory();
      setCategories(categoriesData);
    };

    fetchCategories();
  }, []);
   const getCategory = async ()=>{
    const { data } = await axios.get(`https://fakestoreapi.com/products/categories`);
    return data;
 }
  return (<>
      <div className='filter'>
    {categories.map((item,index) => {
      return <NavLink  
              to={`category/${item}`} 
              key={index} 
               onClick={handlerClick}
            >{item}</NavLink>
    })}
       <NavLink  onClick={handlerClick} to={``}>{'all'}</NavLink>
       <hr></hr>
       <div>
         <InputNumberFilter onChangeMin={onChangeMin} onChangeMax={onChangeMax} minValue={minValue} maxValue={maxValue} min={1}  max={5}
         ></InputNumberFilter>
       </div>
    </div>
    
  </>
 
  )
}
export default React.memo(FilterCategory)