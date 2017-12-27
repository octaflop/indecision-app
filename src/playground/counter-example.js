console.log('Counter');

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddOne = this.handleAddOne.bind(this);
    this.handleMinusOne = this.handleMinusOne.bind(this);
    this.handleReset = this.handleReset.bind(this);

    this.state = {
      count: 0
    };
  }
  componentDidMount() {
    try {
      const count = parseInt(localStorage.getItem('count'), 10);
      if (!isNaN(count)){
        this.setState(() => ({ count }));
      }
    } catch (e) {
      // Do nothing
      console.error('componentDidMount', e);
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.count !== this.state.count) {
      console.log('saving data');
      localStorage.setItem('count', this.state.count)
    }
  }
  handleAddOne() {
    console.log('Add One')
    this.setState((prevState) => {
      return {
        count: prevState.count + 1
      };
    });
    console.log(this.state);
  }
  handleMinusOne() {
    console.log('Minus One')
    this.setState((prevState) => {
      return {
        count: prevState.count - 1
      };
    });
    console.log(this.state);
  }
  handleReset() {
    console.log('Reset')
    this.setState(() => {
      return {
        count: 0
      };
    });
    console.log(this.state);
  }
  render() {
    return (
      <div>
        <h1>Count: {this.state.count} {this.state.name}</h1>
        <button onClick={this.handleAddOne}>+1</button>
        <button onClick={this.handleMinusOne}>-1</button>
        <button onClick={this.handleReset}>Reset!</button>
      </div>
    );
  }
}

const appRoot = document.getElementById('app');
ReactDOM.render(<Counter count={12} />, appRoot);
