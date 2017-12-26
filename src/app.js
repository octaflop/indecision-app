console.log('App.js is running')

var app = {
  title: 'Some Title',
  subtitle: 'Some subtitle'
}

// JSX - Javascript XML
var template = (
  <div>
    <h1>{app.title}</h1>
    <p>{app.subtitle}</p>
    <ol>
      <li></li>
      <li></li>
    </ol>
  </div>
);

var userName = 'Faris';
var userAge = 29.5;
var userLocation = 'Salt Lake City';

var user = {
  name: 'Faris',
  age: 29.5,
  location: 'SLC, UT'
}

function getLocation(location) {
  if (location) {
    return <p>Location: {location}</p>;
  }
}

var templateTwo = (
  <div>
    <h1>{user.name ? user.name : 'Anonymous'}</h1>
    {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
    {getLocation(user.location)}
  </div>
);
var appRoot = document.getElementById('app');

// ReactDOM.render(template, appRoot);
ReactDOM.render(templateTwo, appRoot);
