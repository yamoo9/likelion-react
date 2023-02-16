class Home extends React.Component {

  state = {
    members: this.props.likeLionMembers ?? [
      { id: 1, name: 'a'},
      { id: 2, name: 'b'},
      { id: 3, name: 'c'},
    ]
  };

  handleFilterLab = () => {
    this.setState({
      members: this.state.members.filter(member => {
        return member.name.includes('c')
      })
    });
  }

  render() {

    return (
      <React.Fragment>
        <h2>멋쟁이 사자처럼 프론트엔드 스쿨 4기 멤버</h2>
        <button 
          type="button" 
          style={{ marginBottom: 10 }}
          onClick={this.handleFilterLab}
        >
          A, C 너네들 좀 따라와!
        </button>
        <ul>
          {
            this.state.members.map(({ id, name, gender }) => 
              <li key={id}>
                <p><span>{ gender?.includes('여성') ? '🙆🏻‍♀️' : '🙆🏻‍♂️' }</span> {name}</p>
              </li>
            )
          }
        </ul>
      </React.Fragment>
    );
  }
}

export default Home;
