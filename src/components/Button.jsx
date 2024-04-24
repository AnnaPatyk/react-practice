import React, { useState } from "react";
import Form from "./Form.jsx";
const Button = ({ addFilms, setFilter }) => {
  const [btnState, setBtnState] = useState(false);
  const [btnTitle, setBtnTitle] = useState(" Оpen the add movie form");

  const clickHandler = () => {
    setBtnState(!btnState);
    if (btnTitle === "Hide the add movie form") {
      setBtnTitle(" Оpen the add movie form");
    } else {
      setBtnTitle("Hide the add movie form");
    }
  };
  return (
    <div className="blockForm">
      <button
        onClick={() => {
          clickHandler();
          setFilter("All");
        }}
      >
        {btnTitle}
      </button>
      <Form btnState={btnState} addFilms={addFilms} setFilter={setFilter} />
    </div>
  );
};

export default Button;
