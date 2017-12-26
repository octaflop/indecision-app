'use strict';

console.log('App.js is running');

var app = {
  title: 'Some Title',
  subtitle: 'Some subtitle'

  // JSX - Javascript XML
};var template = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    app.title
  ),
  React.createElement(
    'p',
    null,
    app.subtitle
  ),
  React.createElement(
    'ol',
    null,
    React.createElement('li', null),
    React.createElement('li', null)
  )
);

var userName = 'Faris';
var userAge = 29.5;
var userLocation = 'Salt Lake City';

var user = {
  name: 'Faris',
  age: 29.5,
  location: 'SLC, UT'
};

function getLocation() {
  return 'Unknown';
}

var templateTwo = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    user.name
  ),
  React.createElement(
    'p',
    null,
    'Age: ',
    user.age
  ),
  React.createElement(
    'p',
    null,
    'Location: ',
    getLocation()
  )
);
var appRoot = document.getElementById('app');

// ReactDOM.render(template, appRoot);
ReactDOM.render(templateTwo, appRoot);
