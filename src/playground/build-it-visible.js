class VisibilityToggle extends React.Component {
  constructor(props) {
    super(props);
    this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
    this.state = {
      visibility: false,
      details: 'Oh wow! You can see me now!'
    }
  }
  handleToggleVisibility() {
    console.log(this.state)
    this.setState((prevState) => {
        return {
          visibility: !prevState.visibility
        }
      }
    );
  }
  render() {
    return (
      <div>
        <h1>Visibility Toggle</h1>
        <button onClick={this.handleToggleVisibility}>
          {this.state.visibility ? 'Hide details' : 'Show Details'}
        </button>
        <p>{this.state.visibility && this.state.details}</p>
      </div>
    )
  }
}



console.log('Visibility is running');
const appRoot = document.getElementById('app');
ReactDOM.render(<VisibilityToggle />, appRoot);
