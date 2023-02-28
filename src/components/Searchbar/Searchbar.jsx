import React, { Component } from 'react';

class Searchbar extends Component {
  render() {
    return (
      <div className="Searchbar">
        <form className="SearchForm">
          <button type="button" className="SearchForm-button">
            🌐
          </button>
          <input
            type="text"
            className="SearchForm-input"
            placeholder="Search"
          />
        </form>
      </div>
    );
  }
}

export default Searchbar;
