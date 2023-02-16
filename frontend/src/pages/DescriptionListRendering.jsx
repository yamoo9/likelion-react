

class Home extends React.Component {
  
  state = {
    descriptionList: {
      api: 'Application Programming Interface',
      html: 'Hyper Text Markup Language',
      css: 'Cascading Style Sheets',
      rwd: 'Responsive Web Design',
      awd: 'Adaptive Web Design',
      ajax: 'Asynchronous JavaScript And <abbr title="eXtensible Markup Language">XML</abbr>',
    }
  };

  render() {

    const { descriptionList } = this.state;

    return (
      <>
        <h2>설명 목록 리스트 렌더링</h2>
        <dl lang="en-GB">
          {
            Object.entries(descriptionList).map(([key, value]) => {
              return (
                <React.Fragment key={key}>
                  <dt>{key.toUpperCase()}</dt>
                  <dd>{value}</dd>
                </React.Fragment>
              );
            })
          }
        </dl>
      </>
    );
  }

}

export default Home;
