import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Ball from "../components/Ball/Ball";
import Films from "../components/Films";
import { films } from "../components/filmsArr";
import Game from "../components/game/Game";
import VideoPage from "../components/video/VideoPage";
import Products from "../components/products/Products";
import SelectedProducts from "../components/products/SelectedProducts";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <h1>Error</h1>,
    children: [
      {
        path: "/",
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
        element: <Products />,
      },
      {
        path: "selectedProducts",
        element: <SelectedProducts />,
      },
    ],
  },
]);
