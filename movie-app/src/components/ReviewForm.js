import React, { useState } from 'react';

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