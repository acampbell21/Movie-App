import React, { Component } from 'react';
import MovieForm from './components/MovieForm';
import MovieList from './components/MovieList';

class App extends Component {
  state = { movies: [] }

  componentDidMount() {
    fetch('api/movies')
      .then( res => res.json() )
      .then( movies => this.setState({ movies }) )
    //TODO make a call to our rails server to get Movies
  }

  addMovie = (title) => {
    //TODO make api call to rails server to add movie
    let movie = { title };
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

  updateMovie = (id) => {
    //TODO make api call to update movie
    fetch(`api/movies/${id}`, { method: 'PUT' })
      .then( res => res.json() )
      .then( movie => {
        let movies = this.state.movies.map( t => {
          if (t.id === id)
            return movie
          return t
        });

        this.setState({ movies });
      })
  }

  deleteMovie = (id) => {
    fetch(`/api/movies/${id}`, { method: 'DELETE' })
    .then( () => {
      const { movies } = this.state;
      this.setState({ movies: movies.filter(t => t.id !== id) })
    })
  }

  render() {
   return (
     <div>
       <MovieForm addMovie={this.addMovie} />
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
