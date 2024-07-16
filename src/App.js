import React, { useState } from 'react';
import './App.css';
import RateMovieButton from './RateMovieButton';
import MovieSelector from './MovieSelector';
import UploadButton from './UploadButton';

const movies = ['Inception', 'Interstellar', 'Dunkirk'];

const App = () => {
  const [selectedMovie, setSelectedMovie] = useState('');

  const handleMovieSelect = (movie) => {
    setSelectedMovie(movie);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Interactive Media Toolbar</h1>
        <div className="toolbar">
          <MovieSelector movies={movies} onMovieSelect={handleMovieSelect} />
          <RateMovieButton selectedMovie={selectedMovie} />
          <UploadButton />
        </div>
      </header>
    </div>
  );
};

export default App;