// Movie.js
import React, { useState } from 'react';
import Stars from './Stars';
import ReviewList from './ReviewList';
import ReviewForm from './ReviewForm';

function Movie({ movie }) {
  const [reviews, setReviews] = useState([]);

  const addReview = (newReview) => {
    setReviews([...reviews, newReview]);
  };

  return (
    <div className="movie">
      <img src={movie.poster} alt={movie.title} />
      <h2>{movie.title}</h2>
      <p>{movie.synopsis}</p>
      <Stars />
      <ReviewList reviews={reviews} />
      <ReviewForm addReview={addReview} />
    </div>
  );
}

export default Movie;
