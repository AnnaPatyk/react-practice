import React from "react";

const PopUp = ({ time, moves, setShowPopup, newGame, setInitialRender }) => {
  console.log(time, moves);
  return (
    <div className="block__pop-up">
      <span
        onClick={() => {
          setShowPopup(false);
          newGame();
          setInitialRender(true);
        }}
      >
        X
      </span>
      <div className="pop-up">
        <h3>Congratulations</h3>
        <h4>Game over</h4>
        <p>Passing time: {time}</p>
        <p>Number of steps : {moves}</p>
      </div>
    </div>
  );
};

export default PopUp;
