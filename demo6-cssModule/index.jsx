var React = require('react');
var ReactDOM = require('react-dom');
var style = require('./index.css');

ReactDOM.render(
  <div>
    <h1 className={style.h1}>Hello demo6</h1>
    <h2 className="h2">Hello cssModule</h2>
  </div>,
  document.getElementById('app')
);