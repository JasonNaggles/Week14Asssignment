// Movie.js
import React, { useEffect, useState } from 'react';

function Movie() {

  const [movieList, setMovieList] = useState([])

  const getMovie = () => {
    fetch("https://api.themoviedb.org/3/discover/movie?api_key=08c523e9a3de20461a89aca32825fd86")
    .then(response => response.json())
    .then(json => setMovieList(json.results))

  }
 
  useEffect(() => {
    getMovie()
  },[])

  console.log(movieList)

  return (
    <div>
      {movieList.map((movie) => (
          <img src= {`https://image.tmdb.org/t/p/w500${movie.poster_path}`}/>
      ))}
    </div>
  );
}

export default Movie;
