import React from "react";

const Img = ({ poster }) => {
  console.log(poster);
  return (
    <div className="imageCard">
      <img src={poster} />
    </div>
  );
};

export default Img;
