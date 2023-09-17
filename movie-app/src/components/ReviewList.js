import React from 'react';

function ReviewList({ reviews }) {
    return (
      <div className="review-list">
        {reviews.map((review, index) => (
          <div key={index} className="review">
            <p>{review}</p>
          </div>
        ))}
      </div>
    );
  }

export default ReviewList;