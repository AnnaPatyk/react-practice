import "./App.css";
import "../src/components/films.css";
import { Outlet } from "react-router-dom";
import NavBar from "./components/header/NavBar.jsx";

function App() {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
}

export default App;
