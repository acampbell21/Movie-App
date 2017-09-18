import React from 'react';

class MovieForm extends React.Component {
  state = { name: '', summary: '' }

  handleChange = (e) => {
    this.setState({ name: e.target.value })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addMovie(this.state.name);
    this.setState({ name: '' })
  }

  render () {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          placeholder="Add a movie"
          required
          value={this.state.name}
          onChange={this.handleChange}
          />
        <input
          placeholder="Add a summary"
          required
          value={this.state.summary}
          onChange={this.handleChange}
          />
      </form>
    )
  }
}

export default MovieForm;
