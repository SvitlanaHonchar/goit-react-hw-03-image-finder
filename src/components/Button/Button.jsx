import React, { Component } from 'react';
import PropTypes from 'prop-types';
import css from './Button.module.css';

class Button extends Component {
  handleLoadMore = () => {
    const { onClick } = this.props;
    onClick();
  };

  render() {
    return (
      <div className={css.ButtonContainer}>
        <button
          type="button"
          className={css.Button}
          onClick={this.handleLoadMore}
        >
          Load more
        </button>
      </div>
    );
  }
}

export default Button;

Button.propTypes = {
  handleLoadMore: PropTypes.func,
};
