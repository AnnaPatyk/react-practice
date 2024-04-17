import React, { useState } from "react";
import Form from "./Form.jsx";
const Button = ({ addFilms }) => {
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
      <button onClick={clickHandler}>{btnTitle}</button>
      <Form btnState={btnState} addFilms={addFilms} />
    </div>
  );
};

export default Button;
