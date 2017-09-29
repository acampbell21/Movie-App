import React from 'react';
import Movie from './Movie';

const MovieList = ({ movies, updateMovie, deleteMovie }) => (
  <div className="row">
    { movies.map( movie =>
        <Movie
          key={movie.id}
          movie={movie}
          updateMovie={updateMovie}
          deleteMovie={deleteMovie}
        />
      )
    }
  </div>
)

export default MovieList;
