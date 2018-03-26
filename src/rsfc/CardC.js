import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class Card extends PureComponent {
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <p>{this.props.content}</p>
      </div>
    );
  }
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
};

Card.defaultProps = {
  content: null,
};

export default Card;
