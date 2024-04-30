import React, { useEffect, useState } from "react";
import "./ball.css";
import { ballRespond, initialText } from "./ballRespond";
import FilterLanguage from "./FilterLanguage";
import classNames from "classnames";

const Ball = () => {
  const [arrRespond, setArrRespond] = useState(ballRespond.uk);
  const [flag, setFlag] = useState(false);
  const [language, setLanguage] = useState("uk");
  const [message, setMessage] = useState(initialText[language]);
  const [initialRender, setInitialRender] = useState(true);

  useEffect(() => {
    if (initialRender) {
      setInitialRender(false);
    } else {
      setTimeout(() => {
        document.querySelector(".ball").className = "ball";
      }, 4000);
      setMessage(flag ? randomRespond() : initialText[language]);
    }
  }, [flag, language]);

  useEffect(() => {
    setMessage(initialText[language]);
    setMessage(!flag ? initialText[language] : randomRespond());
  }, [language]);

  function randomRespond() {
    const randomIndex = Math.floor(Math.random() * arrRespond.length);
    return arrRespond[randomIndex];
  }

  const handleBallClick = () => {
    setMessage("");
    setFlag(!flag);
  };
  return (
    <div className="ball-body">
      <FilterLanguage
        ballRespond={ballRespond}
        setArrRespond={setArrRespond}
        setLanguage={setLanguage}
        setFlag={setFlag}
        language={language}
      />
      <div className="ball-box">
        <div
          className={classNames("ball", { animation: flag })}
          onClick={() => {
            handleBallClick();
          }}
        >
          <p> {message}</p>
        </div>
      </div>
    </div>
  );
};

export default Ball;
