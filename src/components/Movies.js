import React from "react";

const IMG_API = "https://image.tmdb.org/t/p/w1280";

const setVoteClass = (vote) => {
  if (vote >= 8) {
    return "green";
  } else if (vote >= 6) {
    return "yellow";
  } else {
    return "red";
  }
};

function Movies({ title, poster_path, overview, vote_average }) {
  return (
    <div className="movies">
      <img
        src={
          poster_path
            ? (IMG_API + poster_path)
            : "https://images.unsplash.com/photo-1543536448-d209d2d13a1c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        }
        alt={title}
      />
      <div className="movie-info">
        <h3>{title}</h3>
        <span className={`tag ${setVoteClass(vote_average)}`}>
          {vote_average}
        </span>
      </div>
      <div className="movie-over">
        <h3>Overview:</h3>
        <p>{overview}</p>
      </div>
    </div>
  );
}

export default Movies;
