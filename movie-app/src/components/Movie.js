// Movie.js
import React, { useEffect, useState } from 'react';
import Stars from 'Stars';
import ReviewList from './ReviewList';
import ReviewForm from './ReviewForm';

function Movie() {
  const [movieList, setMovieList] = useState([]);
  const [reviews, setReviews] = useState([]);


  const addReview = (newReview) => {
    setReviews([...reviews, newReview]);
  };
  
  useEffect(() => {
    const getMovies = async () => {
      try {
        const response = await fetch("https://api.themoviedb.org/3/discover/movie?api_key=08c523e9a3de20461a89aca32825fd86");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setMovieList(data.results);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    getMovies();
  }, []);

  return (
    <div>
      {movieList.map((movie) => (
        <div key={movie.id}>
          <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} className="movieposter"/>
          <h2>{movie.title}</h2>
          <p>{movie.overview}</p>
          <p>{movie.synopsis}</p>
          <Stars rating={movie.rating}/>
          <ReviewList reviews={reviews} />
          <ReviewForm addReview={addReview} />
        </div>
      ))}
    </div>
  );
}
  

export default Movie;
