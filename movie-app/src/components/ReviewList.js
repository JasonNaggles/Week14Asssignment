import React from 'react';
import Review from './Review';
import ReviewList from './ReviewList';

function ReviewList({ reviews }) {
  return (
    <div className="review-list">
      {reviews.map((review, index) => (
        <Review key={index} text={review} />
      ))}
    </div>
  );
}

export default ReviewList;