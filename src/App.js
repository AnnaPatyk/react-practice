import "./App.css";
import Films from "./components/Films";
import { films } from "./components/filmsArr.js";
import "../src/components/films.css";

function App() {
  return (
    <>
      <Films films={films} />
    </>
  );
}

export default App;
