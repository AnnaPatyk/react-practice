import Img from "./Img.jsx";
import Content from "./Content.jsx";
import Button from "./Button.jsx";
import React, { useState } from "react";
import FilmsFilter from "./Films_filter.jsx";
const Films = ({ films }) => {
  const [filmsList, setFilmsList] = useState(films);
  const [filter, setFilter] = useState("All");
  const [filteringUnit, setFilteringUnit] = useState("");

  const addFilms = (formData) => {
    setFilmsList([...filmsList, formData]);
  };

  const filterMap = {
    All: () => true,
    Genre: (obj) => obj.genre.includes(filteringUnit),
    Year: (obj) => {
      if (+obj.year === +filteringUnit) {
        return obj;
      }
    },
  };
  console.log(filteringUnit);
  console.log(filter);
  return (
    <>
      <Button addFilms={addFilms} setFilter={setFilter} />
      <div className="filmsBlock">
        <FilmsFilter
          filmsList={filmsList}
          setFilter={setFilter}
          setFilteringUnit={setFilteringUnit}
        />
        {filmsList.filter(filterMap[filter]).map((film, index) => (
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
