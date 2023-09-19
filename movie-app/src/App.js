import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Movie from './components/Movie';
import './components/MoviePosters.css';
import Star from './components/Star';
function App() {
  const [rating, setRating] = useState(); // Initial rating

  const handleRatingChange = (newRating) => {
    setRating(newRating);

  };

  return (
    <div>
      <Movie />
      <Star rating={rating} onChange={handleRatingChange} />
    </div>
  );
}

export default App;
