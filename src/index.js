import React from 'react';
import ReactDOM from 'react-dom';

const getTitle = () => 'Hello World!';

ReactDOM.render(
  <div>{getTitle()}</div>,
  document.getElementById('app'),
);

module.hot.accept();
