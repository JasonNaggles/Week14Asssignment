// Movie.js
import React, { useEffect } from 'react';


function Movie() {

  const getMovie = () => {
    fetch("https://api.themoviedb.org/3/discover/movie?api_key=08c523e9a3de20461a89aca32825fd86")
    .then(response => response.json())
    .then(json => console.log(json.results))

  }
 
  useEffect(() => {
    getMovie()
  },[])


  return (
    <div>
      Movie
    </div>
  );
}

export default Movie;
