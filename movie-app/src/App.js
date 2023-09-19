import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Movie from './components/Movie';
import './components/MoviePosters.css';
import Star from './components/StarRating';
function App() {


  return (
    <div>
      <Movie />
      <StarRating />
    </div>
  );
}

export default App;
