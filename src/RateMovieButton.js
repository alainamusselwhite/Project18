import React, { useState } from 'react';

const RateMovieButton = ({ selectedMovie }) => {
  const [rating, setRating] = useState(0);
  const [message, setMessage] = useState('');

  const handleRating = (rate) => {
    setRating(rate);
    setMessage(`You rated ${selectedMovie} ${rate} stars!`);
  };

  return (
    <div>
      <h2>Rate Movie</h2>
      {selectedMovie ? (
        <div>
          {[1, 2, 3, 4, 5].map((rate) => (
            <button key={rate} onClick={() => handleRating(rate)}>
              {rate}
            </button>
          ))}
          {message && <p>{message}</p>}
        </div>
      ) : (
        <p>Select a movie to rate</p>
      )}
    </div>
  );
};

export default RateMovieButton;