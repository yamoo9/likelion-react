class Home extends React.Component {

  state = {
    members: this.props.likeLionMembers ?? []
  };

  handleFilterLab = () => {
    this.setState({
      members: this.state.members.filter(member => {
        // 로직
        return false
      })
    });
  }

  render() {

    return (
      <React.Fragment>
        <h2>멋쟁이 사자처럼 프론트엔드 스쿨 4기 멤버</h2>
        <button 
          type="button" 
          style={{ marginBottom: 20 }}
          onClick={this.handleFilterLab}
        >
          LAB 10 조 모여!
        </button>
        <ul>
          {
            this.state.members.map(({ id, lab, name, gender }) => 
              <li key={id}>
                <p><b>{lab}</b> <span>{ gender?.includes('여성') ? '🙆🏻‍♀️' : '🙆🏻‍♂️' }</span> {name}</p>
              </li>
            )
          }
        </ul>
      </React.Fragment>
    );
  }
}

export default Home;
