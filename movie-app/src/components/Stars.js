import React from 'react';

function Stars({ rating }) {
    const MAX_STARS = 5;
  
    // Calculate the number of filled stars based on the rating
    const filledStars = Math.floor(rating / 2);
  
    // Create an array of star elements
    const starElements = Array(MAX_STARS).fill().map((_, index) => (
      <span key={index} className={`star ${index < filledStars ? 'filled' : ''}`}>&#9733;</span>
    ));
  
    return (
      <div className="star-rating">
        {starElements}
        <Stars rating={movie.rating} />
      </div>
    );
  }

export default Stars;