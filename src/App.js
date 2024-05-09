import "./App.css";
import "../src/components/films.css";
import { Outlet } from "react-router-dom";
import NavBar from "./components/header/NavBar.jsx";
import SelectedProductsProvider from "./providers/SelectedProductsProvider.jsx";

function App() {
  return (
    <SelectedProductsProvider>
      <NavBar />
      <Outlet />
    </SelectedProductsProvider>
  );
}

export default App;
