import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Ball from "../components/Ball/Ball";
import Films from "../components/Films";
import { films } from "../components/filmsArr";
import Game from "../components/game/Game";
import VideoPage from "../components/video/VideoPage";
import Products from "../components/products/Products";
import SelectedProducts from "../components/products/SelectedProducts";
import { getCategory, getProductCategory, getProducts } from "../api/Loader";
import ProductItem from "../components/products/ProductItem";
import FilterCategory from "../components/products/FilterCategory";
import ProductManager from "../components/products/ProductManager";
import Product from "../components/products/Product";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <h1>Error</h1>,
    children: [
      {
         index: true,
        element: <Films films={films} />,
      },
      {
        path: "ball",
        element: <Ball />,
      },
      {
        path: "puzzle",
        element: <Game />,
      },
      {
        path: "video",
        element: <VideoPage />,
      },
      {
        path: "products",
        element: <ProductManager />,
        loader:getProducts,
        children:[
         {
          index:true,
          loader: getProducts,
          element:<Products/>
         },
         {
          path:"category/:category",
          loader: getProductCategory,
          element:<Products/>
        }
       ]
      },
         {
        path: "selectedProducts",
        element: <SelectedProducts />,
      },
    ],
  },
]);
