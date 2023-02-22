import classes from './App.module.css';
import { Button, A11yHidden } from './components';

function App() {
  return (
    <div className={classes.container}>
      <h2 className={classes.headline}>Button 컴포넌트(stateless)</h2>

      <div role="group" className={classes.buttonGroup}>
        <Button>회원가입</Button>
        <Button secondary>로그인</Button>
        <h2>저장</h2>
        <A11yHidden as="h2">저장</A11yHidden>
        <A11yHidden as="a">저장</A11yHidden>
        <A11yHidden as="figcaption">저장</A11yHidden>
      </div>
    </div>
  );
}

export default App;
