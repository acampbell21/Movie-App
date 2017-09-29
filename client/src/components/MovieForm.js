import React from 'react';
import { Button } from 'semantic-ui-react';

class MovieForm extends React.Component {
  state = { title: '', summary: '', release_year: '', id: '' }

  componentDidMount() {
    if (this.props.movie) {
      const { movie: { title, summary, release_year, id } } = this.props;
      this.setState({ title, summary, release_year, id })
    }
  }

  // handleChange = (e) => {
  //   this.setState({ [e.target.name]: e.target.value })
  // }

  handleChange = (e) => {
    let { name, value } = e.target;
    // what this is doing ^^
    // let name = e.target.name
    // let value = e.target.value
    this.setState({ [name]: value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { title, summary, release_year, id } = this.state;
    if(this.props.movie) {
      this.props.updateMovie(id, title, summary, release_year);
    } else {
      this.props.addMovieFunction(title, summary, release_year);
    }
      this.setState({ title: '', summary: '' })
  }

  render () {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          name='title'
          placeholder="Add a movie title"
          required
          value={this.state.name}
          onChange={this.handleChange}
        />
        <input
          name='summary'
          placeholder="Add a summary"
          required
          value={this.state.summary}
          onChange={this.handleChange}
        />
        <input
          name='release_year'
          placeholder="Add a release_year"
          required
          value={this.state.release_year}
          onChange={this.handleChange}
        />
        <Button type='submit'>Submit</Button>
      </form>
    )
  }
}

export default MovieForm;
