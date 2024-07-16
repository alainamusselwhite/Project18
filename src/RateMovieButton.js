import React, { useState } from 'react';

const RateMovieButton = ({ selectedMovie }) => {
  const [rating, setRating] = useState(null);
  const [confirmationMessage, setConfirmationMessage] = useState('');

  const handleRating = (rate) => {
    setRating(rate);
    setConfirmationMessage(`You rated ${selectedMovie} ${rate} stars.`);
  };

  return (
    <div>
      <h3>Rate {selectedMovie}</h3>
      {[1, 2, 3, 4, 5].map((star) => (
        <button key={star} onClick={() => handleRating(star)}>
          {star} ⭐
        </button>
      ))}
      {confirmationMessage && <p>{confirmationMessage}</p>}
    </div>
  );
};

export default RateMovieButton;