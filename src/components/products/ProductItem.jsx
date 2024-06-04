import React from 'react'
import { useLoaderData } from 'react-router-dom'
import Like from './Like';

const ProductItem = ({product}) =>{
  const star = "\u2605";
  return (
    <div className="product" key={product.id}>
      <div className="img-block">
        <img src={product.image}></img>
      </div>
      <div className="contetnt">
        <h3>{product.title}</h3>
        <span>{product.category}</span>
        <p>{product.description}</p>
        <p>{(() => star.repeat(Math.floor(product.rating.rate)))()}</p>
        <p className=" price">{product.price} $</p>
        <Like products={product} />
      </div>
    </div>
  );
}

export default ProductItem;