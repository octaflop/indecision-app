class IndecisionApp extends React.Component {
  render() {
    const title = 'Indecision';
    const subtitle = 'Let the Cyber Decide Your Life Descisions';
    const options = ['Thing one', 'Thing Two', 'Thing Three'];
    return (
      <div>
        <Header title={title} subtitle={subtitle} />
        <Action />
        <Options options={options} />
        <AddOption />
      </div>
    )
  }
}

class Header extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h2>{this.props.subtitle}</h2>
      </div>
    )
  }
}

class Action extends React.Component {
  handlePick(e) {
    console.log(e);
  }
  render() {
    return (
      <div>
        <button onClick={this.handlePick}>What Should I Do?</button>
      </div>
    )
  }
}

class Options extends React.Component {
  handleRemoveAll(){
    console.log('Handle Remove All');
  }
  render() {
    return (
      <div>
        <button onClick={this.handleRemoveAll}>Remove All</button>
        <ol>
          {this.props.options.map((option) => <Option key={option} option={option} />)}
        </ol>
      </div>
    )
  }
}

class Option extends React.Component {
  render() {
    return (
      <li key={this.props.option}>
        Option: {this.props.option}
      </li>
    )
  }
}

class AddOption extends React.Component {
  handleAddOption(e) {
    e.preventDefault();

    const option = e.target.elements.option.value.trim();

    if (option) {
      console.log(option);
    }
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleAddOption}>
          <input type="text" name="option" placeholder="Your Option" />
          <button>Add Option</button>
        </form>
      </div>
    )
  }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));
