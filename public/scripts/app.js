'use strict';

console.log('App.js is running');

var app = {
  title: 'Indecision App',
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
  ),
  React.createElement(
    'form',
    null,
    React.createElement('input', { type: 'text' })
  )
);

var appRoot = document.getElementById('app');
ReactDOM.render(template, appRoot);
