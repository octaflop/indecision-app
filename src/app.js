console.log('App.js is running')

const app = {
  title: 'Indecision App',
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
    <form>
      <input type="text" />
    </form>
  </div>
);

const appRoot = document.getElementById('app');
ReactDOM.render(template, appRoot);
