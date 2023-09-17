import React, { useState } from 'react';
import ReviewForm from './ReviewForm';

function ReviewForm({ addReview }) {
  const [newReview, setNewReview] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addReview(newReview);
    setNewReview('');
  };

  return (
    <form className="review-form" onSubmit={handleSubmit}>
      <textarea
        rows="4"
        placeholder="Leave a review..."
        value={newReview}
        onChange={(e) => setNewReview(e.target.value)}
      ></textarea>
      <button type="submit">Submit</button>
    </form>
  );
}

export default ReviewForm;