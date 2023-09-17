import React from 'react';

import ReviewList from './ReviewList';
import ReviewForm from './ReviewForm';

function Review({ text }) {
  return (
    <div className="review">
      <p>{text}</p>
    </div>
  );
}

export default Review;