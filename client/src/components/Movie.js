import React from 'react';
import { Button } from 'semantic-ui-react'
import MovieForm from './MovieForm'

class Movie extends React.Component {
  state = { editing: false }

  toggleUpdate = () => {
    this.setState({editing: !this.state.editing})
  }

  render() {
    const { movie: {id, complete, title, summary, release_year}, updateMovie, deleteMovie } = this.props;
      if(this.state.editing === true) {
        return <MovieForm updateMovie={updateMovie} movie={this.props.movie }/>
      } else {
        return(
          <div className="col s12">
            <div className="col m8">
              <div className="center">
                <div>
                  {title}
                </div>
                <div>
                  {summary}
                </div>
                <div>
                  {release_year}
                </div>
              </div>
            </div>
            <div className="col m2">
            </div>
            <div style={ styles.pointer } className="col m1" onClick={() => deleteMovie(id)}>
              x
            </div>
            <Button onClick={() => this.toggleUpdate()}>Update</Button>
          </div>
        )
      }


  }
}

const styles = {
  pointer: { cursor: 'pointer' }
}

export default Movie;
