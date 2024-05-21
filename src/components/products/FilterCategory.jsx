import React, {  useCallback, useEffect, useState } from 'react'

 function FilterCategory({products, handlerClickFilter}) {
   const [category, setCategory] = useState([])
 
  const filterCategory = useCallback(() => {
    const arr = new Set(products.map(product => product.category));
    setCategory(Array.from(arr));
  }, [products]);

  useEffect(() => {
    filterCategory();
  }, [filterCategory]);

  return (
    <div>
    {category.map((item,index) => {
      return <button key={index} onClick={()=> handlerClickFilter(item)}>{item}</button>
    })}
       <button onClick={()=> handlerClickFilter("all")}>{'all'}</button>
    </div>
  )
}
export default React.memo(FilterCategory)