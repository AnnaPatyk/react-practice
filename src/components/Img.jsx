import React from "react";

const Img = ({ poster }) => {
  return (
    <div className="imageCard">
      <img src={poster} />
    </div>
  );
};

export default Img;
