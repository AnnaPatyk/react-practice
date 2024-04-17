import Img from "./Img.jsx";
import Content from "./Content.jsx";
import Button from "./Button.jsx";
import React, { useState } from "react";
const Films = ({ films }) => {
  const [filmsList, setFilmsList] = useState(films);

  const addFilms = (formData) => {
    setFilmsList([...filmsList, formData]);
  };

  return (
    <>
      <Button addFilms={addFilms} />
      <div className="filmsBlock">
        {filmsList.map((film, index) => (
          <div className="filmCard" key={index}>
            <Img poster={film.poster} />
            <Content {...film} />
          </div>
        ))}
      </div>
    </>
  );
};

export default Films;
