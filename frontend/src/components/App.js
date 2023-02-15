class App extends React.Component {
  state = {
    headline: 'React Application'
  };

  render() {
    return (
      <div data-component="App">
        <h1>{ this.state.headline }</h1>
      </div>
    );
  }
}

export default App;
