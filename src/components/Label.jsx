import React from "react";

const Label = ({
  htmlFor,
  setFilter,
  setFilterArgument,
  setFilteringUnit,
  filters,
}) => {
  return (
    <label htmlFor={htmlFor}>
      {htmlFor}
      <select
        id={htmlFor}
        onChange={(event) => {
          setFilter(setFilterArgument);
          setFilteringUnit(event.target.value);
        }}
      >
        {filters.map((item, index) => (
          <option value={item} key={index}>
            {item}
          </option>
        ))}
      </select>
    </label>
  );
};

export default Label;
