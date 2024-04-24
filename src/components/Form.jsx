import React, { useState } from "react";
const Form = ({ btnState, addFilms, setFilter }) => {
  const [formData, setFormData] = useState({
    title: "",
    director: "",
    year: "",
    genre: "",
    rating: "",
    plot: "",
    poster: "",
    trailer: "",
  });
  const [titleError, setTitleError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const clickHandler = () => {
    const error = Object.values(formData).some((value) => value === "");
    if (error) {
      setTitleError("Всі поля форми мають бути заповнені");
      return;
    }
    addFilms(formData);
    setFormData({
      title: "",
      director: "",
      year: "",
      genre: "",
      rating: "",
      plot: "",
      poster: "",
      trailer: "",
    });
    setTitleError(null);
  };

  return (
    <form className={btnState ? "form-show" : ""}>
      <input
        type="text"
        name="title"
        placeholder="Title"
        value={formData.title}
        onChange={handleChange}
      />
      <input
        type="text"
        name="director"
        placeholder="Director"
        value={formData.director}
        onChange={handleChange}
      />
      <input
        type="number"
        name="year"
        placeholder="Year"
        value={formData.year}
        onChange={handleChange}
      />
      <input
        type="text"
        name="genre"
        placeholder="Genre"
        value={formData.genre}
        onChange={handleChange}
      />
      <input
        type="number"
        name="rating"
        placeholder="Rating"
        value={formData.rating}
        onChange={handleChange}
      />
      <input
        type="text"
        name="plot"
        placeholder="Plot"
        value={formData.plot}
        onChange={handleChange}
      />
      <input
        type="text"
        name="poster"
        placeholder="Poster URL"
        value={formData.poster}
        onChange={handleChange}
      />
      <input
        type="text"
        name="trailer"
        placeholder="Trailer URL"
        value={formData.trailer}
        onChange={handleChange}
      />
      {titleError && <p>{titleError}</p>}
      <button
        type="button"
        onClick={() => {
          clickHandler();
          setFilter("All");
        }}
      >
        Add Film
      </button>
    </form>
  );
};

export default Form;
