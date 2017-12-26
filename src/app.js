console.log('App.js is running')

const app = {
  title: 'Some Title',
  subtitle: 'Some subtitle',
  options: ['First', 'Second']
}

// JSX - Javascript XML
const template = (
  <div>
    <h1>{app.title}</h1>
    {app.subtitle && <p>{app.subtitle}</p>}
    <p>
    {(app.options && app.options.length > 0) ?
       'Here are your options' : 'No Options'}
    </p>
    <ol>
      <li></li>
      <li></li>
    </ol>
  </div>
);

const userName = 'Faris';
const userAge = 29.5;
const userLocation = 'Salt Lake City';

const user = {
  name: 'Faris',
  age: 29.5,
  location: 'SLC, UT'
}

function getLocation(location) {
  if (location) {
    return <p>Location: {location}</p>;
  }
}

const templateTwo = (
  <div>
    <h1>{user.name ? user.name : 'Anonymous'}</h1>
    {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
    {getLocation(user.location)}
  </div>
);
var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
// ReactDOM.render(templateTwo, appRoot);
