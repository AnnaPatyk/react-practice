import axios from "axios";

const getProductCategory = async ({ params }) => {
   let url;
   if(params.category !=='category'){
      url = `https://fakestoreapi.com/products/category/${params.category}`
   } else{
      url = `https://fakestoreapi.com/products`;
   }
  const { data } = await axios.get(url);
  console.log('tak', data, `https://fakestoreapi.com/products/category/${params.category}`);
  return data;
};

  const getProducts = async ()=>{
    const { data } = await axios.get(`https://fakestoreapi.com/products`);
    console.log(data, `https://fakestoreapi.com/products`, 2);
    return data;

 }
 export{getProductCategory,getProducts}