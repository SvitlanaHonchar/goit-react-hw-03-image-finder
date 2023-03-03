import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Button extends Component {
  handleLoadMore = () => {
    const { onClick } = this.props;
    onClick();
  };

  render() {
    return (
      <div className="ButtonContainer">
        <button type="button" className="Button" onClick={this.handleLoadMore}>
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
