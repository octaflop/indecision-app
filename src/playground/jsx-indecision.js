console.log('App.js is running')

const appRoot = document.getElementById('app');

const app = {
  title: 'Indecision App',
  subtitle: 'Put your life in the hands of the cyber',
  options: []
}


const onFormSubmit = (e) => {
  e.preventDefault();
  const option = e.target.elements.option.value;
  if (option) {
    app.options.push(option);
    e.target.elements.option.value = '';
    render();
  }
};

const onRemoveAll = () => {
  if (app.options.length > 0) {
    app.options = [];
    render();
  }
};

const onMakeDecision = () => {
  const randomNum = Math.floor(Math.random() * app.options.length);
  const option = app.options[randomNum];
  console.log(option);
};

const render = () => {
  const template = (
    <div>
      <h1>{app.title}</h1>
      {app.subtitle && <p>{app.subtitle}</p>}
      <p>
      {(app.options && app.options.length > 0) ?
         'Here are your options' : 'No Options'}
      </p>
      <p>Number of Options {app.options.length}</p>
      <button disabled={app.options.length === 0} onClick={onMakeDecision}>Make a Decision</button>
      <button onClick={onRemoveAll}>Remove All</button>
      <ol>
        {
          app.options.map((option) => <li key={option}>Option: {option}</li>)
        }
      </ol>
      <form onSubmit={onFormSubmit}>
        <input type="text" name="option" />
        <button>Add Option</button>
      </form>
    </div>
  );

  ReactDOM.render(template, appRoot);
};

render();
