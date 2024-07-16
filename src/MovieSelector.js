import React from 'react';

const MovieSelector = ({ movies, onMovieSelect }) => {
  return (
    <select onChange={(e) => onMovieSelect(e.target.value)}>
      <option value="">Select a movie</option>
      {movies.map((movie) => (
        <option key={movie} value={movie}>
          {movie}
        </option>
      ))}
    </select>
  );
};

export default MovieSelector;