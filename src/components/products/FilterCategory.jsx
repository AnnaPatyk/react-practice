import axios from 'axios';
import React, {useContext, useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import InputNumberFilter from "../products/InputNumberFilter"
import { FilterProducts } from '../../context/FilterProducts';


 function FilterCategory() {
    const {onChangeMin ,onChangeMax,minValue,maxValue, handlerClick}= useContext(FilterProducts);
   const [categories, setCategories] = useState([]);
    let Location = useLocation();
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
 console.log(Location.key)
  return (<>
      <div className='filter'>
    {categories.map((item,index) => {
      return <NavLink  
              to={`category/${item}`} 
              key={index} 
               onClick={handlerClick}
               className={({ isActive }) => (isActive ? 'active' : '')}
            >{item}</NavLink>
    })}
       <NavLink  className={({ isActive }) => (isActive ? 'active' : '')} onClick={handlerClick} to={``} end>{'all'}</NavLink>
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