class App extends React.Component {
  
  constructor(props) {
    super(props);

    this.state = {
      headline: 'React Application'
    };

    this.handleChangeHeadline = this.handleChangeHeadline.bind(this);
  }

  handleChangeHeadline() {
    this.setState({
      headline: 'NEW HEADLINE! 😃'
    })
  }

  render() {
    return (
      <div data-component="App">
        <h1>{ this.state.headline }</h1>
        <button type="button" onClick={this.handleChangeHeadline}>헤드라인 변경</button>
      </div>
    );
  }
  
}

export default App;
