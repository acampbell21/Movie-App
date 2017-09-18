import React from 'react';

const Movie = ({ id, complete, title, summary, release_year, updateMovie, deleteMovie }) => (
  <div className="col s12">
    <div className="col m8">
      <div style={ complete ? styles.complete : {} } className="center">
        {title}
      </div>
    </div>
    <div className="col m2">
      <input
        id={`movie-${id}`}
        type="checkbox"
        defaultCheck={complete}
        onClick={() => updateMovie(id)}
      />
    <label htmlFor={`movie-${id}`}>Complete?</label>
    </div>
    <div style={ styles.pointer } className="col m1" onClick={() => deleteMovie(id)}>
      x
    </div>
  </div>
)

const styles = {
  complete: {
    textDecoration: 'line-through',
    color: 'grey'
  },
  pointer: { cursor: 'pointer' }
}

export default Movie;
