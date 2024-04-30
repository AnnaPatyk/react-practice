import React from "react";
import { displayTime } from "./timeFormater";

const Timer = ({ time }) => {
  return <div>Time: {displayTime(time)}</div>;
};

export default Timer;
