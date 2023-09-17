import React, { useState } from 'react';

function Star({ rating, onChange }) {
  const [selectedRating, setSelectedRating] = useState(rating);

  const handleStarClick = (newRating) => {
    setSelectedRating(newRating);
    if (onChange) {
      onChange(newRating);
    }
  };

  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      const className = i <= selectedRating ? 'star filled' : 'star';
      stars.push(
        <span
          key={i}
          className={className}
          onClick={() => handleStarClick(i)}
        >
          &#9733;
        </span>
      );
    }
    return stars;
  };
  return <div className="star-rating">{renderStars()}</div>;
}
export default Star;