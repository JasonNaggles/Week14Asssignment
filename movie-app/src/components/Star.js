import React, { useState } from 'react';

function Star({ selected = false, onClick }) {
  return (
    <span className={selected ? 'star selected' : 'star'} onClick={onClick}>
      &#9733;
    </span>
  );
}

function StarRating({ initialValue, onChange }) {
  const [rating, setRating] = useState(initialValue);

  const handleStarClick = (newRating) => {
    setRating(newRating);
    if (onChange) {
      onChange(newRating);
    }
  };

  return (
    <div className="star-rating">
      {[1, 2, 3, 4, 5].map((value) => (
        <Star
          key={value}
          selected={value <= rating}
          onClick={() => handleStarClick(value)}
        />
      ))}
    </div>
  );
}
    
export default Star;