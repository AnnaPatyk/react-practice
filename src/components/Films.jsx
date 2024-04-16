import React from "react";
import Img from "./Img.jsx";
import Content from "./Content.jsx";
const Films = ({ films }) => {
  console.log(films);
  return (
    <div className="filmsBlock">
      {films.map((film, index) => (
        <div className="filmCard" key={index}>
          <Img poster={film.poster} />
          <Content {...film} />
        </div>
      ))}
    </div>
  );
};

export default Films;
