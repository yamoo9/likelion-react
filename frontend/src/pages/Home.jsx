
function Home() {

  const handlePreventDefault = (e) => {
    e.preventDefault();
  };

  const handleClicker = (e) => {
    console.log(e.target);
    console.log('handleClicker');
  }

  return (
    <>
      <h2>React 이벤트 핸들링</h2>
      <nav onClickCapture={handleClicker}>
        <ul>
          <li>
            <a href="https://beta.reactjs.org" target="_blank" rel="noreferrer noopener">
              react
            </a>
          </li>
          {/* <li><a href=""></a></li> */}
          {/* <li><a href=""></a></li> */}
        </ul>
      </nav>
    </>
  );
}

export default Home;
