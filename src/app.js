class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.state = {
      options: ['Thing one', 'Thing Two', 'Thing Three']
    }
  }
  handleDeleteOptions() {
    this.setState(() => {
      return {
        options: []
      }
    });
  }
  handlePick() {
    console.log('Handling Pick');
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomNum];
    console.log(option);
  }
  render() {
    const title = 'Indecision';
    const subtitle = 'Let the Cyber Decide Your Life Decisions';
    return (
      <div>
        <Header title={title} subtitle={subtitle} />
        <Action hasOptions={this.state.options.length > 0} handlePick={this.handlePick} />
        <Options
          options={this.state.options}
          handleDeleteOptions={this.handleDeleteOptions}
        />
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
  render() {
    return (
      <div>
        <button
          onClick={this.props.handlePick}
          disabled={!this.props.hasOptions}
        >
          What Should I Do?
        </button>
      </div>
    )
  }
}

class Options extends React.Component {
  render() {
    return (
      <div>
        <button onClick={this.props.handleDeleteOptions}>Remove All</button>
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
        <form onSubmit={this.props.handleAddOption}>
          <input type="text" name="option" placeholder="Your Option" />
          <button>Add Option</button>
        </form>
      </div>
    )
  }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));
