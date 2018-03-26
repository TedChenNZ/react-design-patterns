# React Stateless Functional Components

A simpler way to define components.

## Example

### Using Component (not a Stateless Functional Component)

```
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
```

### React Stateless Functional Components

```
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
```

## Why?

### Just a function

Easier to understand since you know that it is a simple function - no state etc.

### No 'this'

No confusion with the 'this' operator when it comes to JS.

### Enforces best practices

Stateless functional components enforce the 'presentational component' best practice, and so ensures that you focus simply on UI and not behaviour.


### Performance

Far better performance as React knows it doesn't need to worry about state or lifecycle methods.

## Why not?

If you need complexity in your component this is not the right tool for the job.