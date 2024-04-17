import React, { useState } from "react";
import VideoPlayer from "./VideoPlayer";

const Content = ({ title, year, director, genre, rating, plot, trailer }) => {
  const [btnState, setBtnState] = useState(false);
  const videoId = () => {
    const url = new URL(trailer);
    return url.searchParams.get("v");
  };
  return (
    <div className="contentBlok">
      <h3>
        {title} <span>{year}</span>
      </h3>
      <p>{director}</p>
      <p>{genre}</p>
      <p>{rating}</p>
      <p>{plot}</p>

      <button
        onClick={() => {
          setBtnState(!btnState);
        }}
      >
        Trailer
      </button>

      <VideoPlayer btnState={btnState} videoId={videoId} />
    </div>
  );
};

export default Content;
