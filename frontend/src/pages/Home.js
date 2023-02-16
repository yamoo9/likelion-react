import { likeLionMembers } from '../data/likeLionMembers.js';

console.log(likeLionMembers);

class Home extends React.Component {
  state = {
    members: []
  };

  render() {

    return (
      <React.Fragment>
        <h2>멋쟁이 사자처럼 프론트엔드 스쿨 4기 멤버</h2>
        <ul>
          {
            this.state.members.map(({ id, name, price, image }) => 
              <li key={id}>
                {/* 여기에 여러분이 마크업 해주세요. */}
              </li>
            )
          }
        </ul>
      </React.Fragment>
    );
  }
}

export default Home;
