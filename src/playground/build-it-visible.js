console.log('Visibility is running');

const appRoot = document.getElementById('app');

const app = {
  'header': 'Visibility Toggle',
  'details': 'Hey, These are some details you can now see!',
  'showDetails': false
};

const onDetailClick = (e) => {
  app.showDetails = !app.showDetails;
  render();
}

const render = () => {
  const template = (
    <div>
      <h1>{app.header}</h1>
      <button onClick={onDetailClick}>
        {app.showDetails ? 'Hide details' : 'Show Details'}
      </button>
      <h2>{app.showDetails ? app.details : ''}</h2>
    </div>
  )

  ReactDOM.render(template, appRoot);
}

render();
