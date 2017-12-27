'use strict';

console.log('App.js is running');

var app = {
  title: 'Some Title',
  subtitle: 'Some subtitle',
  options: ['First', 'Second']

  // JSX - Javascript XML
};var template = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    app.title
  ),
  app.subtitle && React.createElement(
    'p',
    null,
    app.subtitle
  ),
  React.createElement(
    'p',
    null,
    app.options && app.options.length > 0 ? 'Here are your options' : 'No Options'
  ),
  React.createElement(
    'ol',
    null,
    React.createElement('li', null),
    React.createElement('li', null)
  )
);

var count = 0;
var addOne = function addOne() {
  count++;
  console.log('addOne', count);
  renderCounterApp();
};
var minusOne = function minusOne() {
  count--;
  console.log('minusOne');
  renderCounterApp();
};
var reset = function reset() {
  count = 0;
  console.log('reset');
  renderCounterApp();
};

var appRoot = document.getElementById('app');

// ReactDOM.render(template, appRoot);

var renderCounterApp = function renderCounterApp() {
  var templateTwo = React.createElement(
    'div',
    null,
    React.createElement(
      'h1',
      null,
      'Count: ',
      count
    ),
    React.createElement(
      'button',
      { onClick: addOne },
      '+1'
    ),
    React.createElement(
      'button',
      { onClick: minusOne },
      '-1'
    ),
    React.createElement(
      'button',
      { onClick: reset },
      'reset'
    )
  );
  ReactDOM.render(templateTwo, appRoot);
};

renderCounterApp();
