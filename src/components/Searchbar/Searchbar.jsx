import React, { Component } from 'react';
import { ImSearch } from 'react-icons/im';

class Searchbar extends Component {
  state = {
    query: '',
  };

  handleInput = e => {
    this.setState({
      query: e.currentTarget.value.toLowerCase(),
    });
    // console.log(this.state.query);
  };

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.query.trim() === '') {
      alert('Enter your query');
      return;
    }
    this.props.onSubmit(this.state.query);
    this.setState({ query: '' });
  };

  render() {
    // const { onSubmit } = this.props;
    return (
      <header className="Searchbar">
        <form
          className="SearchForm"
          // onSubmit={e => {
          // onSubmit(e, this.state.query);
          // }}
          onSubmit={this.handleSubmit}
        >
          <button type="submit" className="SearchForm-button">
            <ImSearch style={{ width: 20, height: 20 }} />
          </button>

          <input
            className="SearchForm-input"
            type="text"
            name="query"
            value={this.state.query}
            // autocomplete="off"
            // autofocus
            onChange={this.handleInput}
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;
