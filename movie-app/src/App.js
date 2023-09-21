import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Movie from './components/Movie';
import './components/MoviePosters.css';
import StarRating from './components/StarRating';
import ReviewForm from './components/ReviewForm';
function App() {
  


  return (
    <div>
      <Movie />
      <StarRating />
      <ReviewForm addReview={addReview} />
    </div>
  );
}

export default App;
