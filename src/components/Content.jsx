import React from "react";

const Content = ({ title, year, director, genre, rating, plot, trailer }) => {
  return (
    <div className="contentBlok">
      <h3>
        {title} <span>{year}</span>
      </h3>
      <p>{director}</p>
      <p>{genre}</p>
      <p>{rating}</p>
      <p>{plot}</p>
      <a href={trailer} target="blank">
        Trailer
      </a>
    </div>
  );
};

export default Content;
