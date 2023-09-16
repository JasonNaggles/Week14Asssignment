// Movielist.js
import React from 'react';

function MovieList({ movie }) {
  return (
    <div>
      <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
    </div>
  );
}

export default MovieList;