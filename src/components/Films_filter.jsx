import React, { useEffect, useState } from "react";
import Label from "./Label";
import classNames from "classnames";

const FilmsFilter = ({ filmsList, setFilter, setFilteringUnit }) => {
  const [filterYear, setFilterYear] = useState([]);
  const [filterGenre, setFilterGenre] = useState([]);
  const [btn, setBtn] = useState(false);

  useEffect(() => {
    const year = [...new Set(filmsList.map((obj) => obj.year))];
    const genre = [
      ...new Set(
        filmsList.map((obj) => obj.genre).flatMap((str) => str.split(", "))
      ),
    ];
    setFilterYear(year);
    setFilterGenre(genre);
  }, [filmsList]);

  const blockFilters = (
    <div className="filterBlock">
      <button className="all" onClick={() => setFilter("All")}>
        All
      </button>
      <Label
        htmlFor={"year"}
        setFilter={setFilter}
        setFilterArgument={"Year"}
        setFilteringUnit={setFilteringUnit}
        filters={filterYear}
      />

      <Label
        htmlFor={"genre"}
        setFilter={setFilter}
        setFilterArgument={"Genre"}
        setFilteringUnit={setFilteringUnit}
        filters={filterGenre}
      />
    </div>
  );
  const handleButtonClick = () => {
    setBtn(!btn);
  };

  const btnClass = classNames("filterBlock", "btn");
  return (
    <>
      <div className={btnClass}>
        <button className="filterBtn" onClick={handleButtonClick}>
          {"Filter"}
        </button>
      </div>
      {btn ? blockFilters : ""}
    </>
  );
};

export default FilmsFilter;
