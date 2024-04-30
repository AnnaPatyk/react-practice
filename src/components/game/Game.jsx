import React, { useEffect, useState } from "react";
import { shuffle, array } from "./shafflFun";
import Timer from "./Timer";
import "./game.css";
import GameItem from "./GameItem";
import GameItemEmpty from "./GameItemEmpty";
import classNames from "classnames";
import PopUp from "./PopUp";

const Game = () => {
  const [shuffledArr, setShuffledArr] = useState(shuffle([...array]));
  const [moves, setMoves] = useState(0);
  const [time, setTime] = useState(0);
  const [timerActive, setTimerActive] = useState(false);
  const [initialRender, setInitialRender] = useState(true);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    if (initialRender) {
      setInitialRender(false);
      setMoves(0);
      setTime(0);
    } else {
      setMoves(moves + 1);
    }
  }, [shuffledArr]);

  useEffect(() => {
    if (moves === 1) {
      setTimerActive(true);
    }
  }, [moves]);
  useEffect(() => {
    if (timerActive) {
      setTimeout(() => {
        setTime(time + 1);
      }, 1000);
    } else if (showPopup) {
      setTime(time);
    } else {
      setTime(0);
    }
  }, [timerActive, time]);

  useEffect(() => {
    if (shuffledArr.every((value, index) => value === array[index])) {
      setShowPopup(true);
      setTimerActive(false);
    }
  }, [shuffledArr]);
  const newGame = () => {
    setTimerActive(false);
    setMoves(0);
    setTime(0);
    setShuffledArr(shuffle([...array]));
    setTimerActive(false);
    setShowPopup(false);
    setInitialRender(true);
  };

  const startDrag = (e) => {
    e.dataTransfer.setData("item", e.target.dataset.index);
  };
  const dragOver = (e) => {
    e.preventDefault();
  };

  const dropped = (e) => {
    e.preventDefault();
    const itemIndex = e.dataTransfer.getData("item");
    const emptyIndex = e.target.dataset.index;
    if (
      !(
        Math.abs(itemIndex - emptyIndex) === 4 ||
        Math.abs(itemIndex - emptyIndex) === 1
      )
    ) {
      return;
    }
    const newArray = [...shuffledArr];
    newArray.splice(itemIndex, 1, shuffledArr[emptyIndex]);
    newArray.splice(emptyIndex, 1, shuffledArr[itemIndex]);

    setShuffledArr([...newArray]);
  };
  console.log(timerActive);

  return (
    <section className="section-game">
      <div className={classNames("game-wrapper")}>
        {showPopup && (
          <PopUp
            time={time}
            moves={moves}
            setShowPopup={setShowPopup}
            newGame={newGame}
            setInitialRender={setInitialRender}
          />
        )}
        <h1>Puzzle Game</h1>
        <div className="top-panel">
          <div>Moves : {moves}</div>
          <Timer time={time} />
        </div>
        <div className={classNames("game", { inactive: showPopup })}>
          {shuffledArr.map((item, index) => {
            if (item === "") {
              return (
                <GameItemEmpty
                  item={item}
                  key={index}
                  dropped={dropped}
                  dragOver={dragOver}
                  index={index}
                />
              );
            } else {
              return (
                <GameItem
                  item={item}
                  key={index}
                  startDrag={startDrag}
                  index={index}
                />
              );
            }
          })}
        </div>
        <button
          onClick={() => {
            newGame();
            setTime(0);
          }}
        >
          {" "}
          New Game
        </button>
      </div>
    </section>
  );
};

export default Game;
