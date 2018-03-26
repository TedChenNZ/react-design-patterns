import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ title, content }) => (
  <div>
    <h1>{title}</h1>
    <p>{content}</p>
  </div>
);

Card.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
};

Card.defaultProps = {
  content: null,
};

export default Card;
