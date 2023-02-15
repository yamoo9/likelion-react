class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      headline: 'React Application',
      isDisabled: false,
    };

    this.handleChangeHeadline = this.handleChangeHeadline.bind(this);
  }

  handleChangeHeadline() {
    this.setState({
      headline: 'NEW HEADLINE! 😃',
      isDisabled: true,
    });
  }

  render() {
    return (
      <div data-component="App">
        <h1>{this.state.headline}</h1>
        <button disabled={this.state.isDisabled} type="button" onClick={this.handleChangeHeadline}>
          헤드라인 업데이트
        </button>
      </div>
    );
  }
}

export default App;
