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


let count = 0;
const addOne = () => {
  count++;
  console.log('addOne', count);
  renderCounterApp();
};
const minusOne = () => {
  count--;
  console.log('minusOne')
  renderCounterApp();
};
const reset = () => {
  count = 0;
  console.log('reset')
  renderCounterApp();
};

const appRoot = document.getElementById('app');

// ReactDOM.render(template, appRoot);

const renderCounterApp = () => {
  const templateTwo = (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={addOne}>+1</button>
      <button onClick={minusOne}>-1</button>
      <button onClick={reset}>reset</button>
    </div>
  );
  ReactDOM.render(templateTwo, appRoot);
};

renderCounterApp();
