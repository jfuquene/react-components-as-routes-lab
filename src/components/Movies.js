import React from 'react';
import { movies } from '../data';

const Movies = () => {


  return (
    <div>
        <h1>Movie page</h1>
        {movies.map(movie => <div>{movie.title} </div>)}
    </div>
  
  );
};

export default Movies;
