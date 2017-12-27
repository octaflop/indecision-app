'use strict';

console.log('Visibility is running');

var appRoot = document.getElementById('app');

var app = {
  'header': 'Visibility Toggle',
  'details': 'Hey, These are some details you can now see!',
  'showDetails': false
};

var onDetailClick = function onDetailClick(e) {
  app.showDetails = !app.showDetails;
  render();
};

var render = function render() {
  var template = React.createElement(
    'div',
    null,
    React.createElement(
      'h1',
      null,
      app.header
    ),
    React.createElement(
      'button',
      { onClick: onDetailClick },
      app.showDetails ? 'Hide details' : 'Show Details'
    ),
    React.createElement(
      'h2',
      null,
      app.showDetails ? app.details : ''
    )
  );

  ReactDOM.render(template, appRoot);
};

render();
