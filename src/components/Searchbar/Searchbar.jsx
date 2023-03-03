import React, { Component } from 'react';
import { ImSearch } from 'react-icons/im';
import PropTypes from 'prop-types';

class Searchbar extends Component {
  state = {
    query: '',
  };

  handleInput = e => {
    this.setState({
      query: e.currentTarget.value.toLowerCase(),
    });
  };

  handleSubmit = e => {
    const { query } = this.state;
    e.preventDefault();
    if (query.trim() === '') {
      alert('Enter your query');
      return;
    }
    this.props.onSubmit(query);
    this.setState({ query: '' });
  };

  render() {
    return (
      <header className="Searchbar">
        <form className="SearchForm" onSubmit={this.handleSubmit}>
          <button type="submit" className="SearchForm-button">
            <ImSearch style={{ width: 20, height: 20 }} />
          </button>

          <input
            className="SearchForm-input"
            type="text"
            name="query"
            value={this.state.query}
            autoComplete="off"
            autoFocus
            onChange={this.handleInput}
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;

Searchbar.propTypes = {
  onSubmit: PropTypes.func,
};
