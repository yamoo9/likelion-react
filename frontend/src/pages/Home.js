import { likeLionMembers } from '../data/likeLionMembers.js';

class Home extends React.Component {
  
  state = {
    members: likeLionMembers
  };  

  handleFilterLab = () => {
    console.log('filtering');
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
          10조 모여!
        </button>
        <ul>
          {
            this.state.members.map(({ id, name, gender }) => 
              <li key={id}>
                <p><span>{ gender.includes('여성') ? '🙆🏻‍♀️' : '🙆🏻‍♂️' }</span> {name}</p>
              </li>
            )
          }
        </ul>
      </React.Fragment>
    );
  }
}

export default Home;
