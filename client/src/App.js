import React, { Component } from 'react';
import MovieForm from './components/MovieForm';
import MovieList from './components/MovieList';
import axios from 'axios';

class App extends Component {
  state = { movies: [] }

  componentDidMount() {
    fetch('api/movies')
      .then( res => res.json() )
      .then( movies => this.setState({ movies }) )
    //TODO make a call to our rails server to get Movies
  }

  addMovie = (title, summary, release_year) => {
    //TODO make api call to rails server to add movie
    let movie = { title, summary, release_year };
    fetch('./api/movies', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(movie)
    }).then( res => res.json() )
      .then( movie => {
        const { movies } = this.state;
        this.setState({ movies: [...movies, movie] });
      })
    //TODO update state
  }

  updateMovie = (id, title, summary, release_year) => {
    //TODO make api call to update movie
    let movie = { title, summary, release_year };
    fetch(`/api/movies/${id}`,
      { method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(movie)
      })
      .then( res => res.json() )
      .then( movie => {
        let movies = this.state.movies.map( m => {
          if (m.id === id)
            return movie
          return m;
        });
        //TODO Get Help on Editing a Movie
        this.setState({ movies });
      })
  }

  deleteMovie = (id) => {
    fetch(`/api/movies/${id}`, { method: 'DELETE' })
    .then( () => {
      const { movies } = this.state;
      this.setState({ movies: movies.filter(m=> m.id !== id) })
    })
  }

  render() {
   return (
     <div>
       <MovieForm addMovieFunction={this.addMovie} />
       <MovieList
         movies={this.state.movies}
         updateMovie={this.updateMovie}
         deleteMovie={this.deleteMovie}
       />
     </div>
    );
  }
}

export default App;
