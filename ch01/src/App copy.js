import logo from "./logo.svg";
import "./App.css";
import utils from "./utils"; // expoert default
import { helper1, helper2 } from "./utils"; // named exports
import Button from "./Button";
import Counter from "./Counter";
import NumberList from "./NumberList";
import App2 from "./App2";

function Greeting() {
  return <h1>hello, world</h1>;
}
function GreetingProp(props) {
  return <h1>{props.name}</h1>;
}
//문제) "Tom"의 나이는 "15"살 입니다. -> 출력하도록 컴포넌트 작성
function Ex(props) {
  return (
    <h1>
      {props.name}의 나이는 {props.age}살 입니다.
    </h1>
  );
}

function LoggedIn(props) {
  if (props.isLoggedIn) {
    return <h1>Welcome back!</h1>;
  } else {
    return <h1>Please sign up</h1>;
  }
}

function App() {
  // alert(utils());
  // alert(helper1());
  // alert(helper2());
  const name = "john";
  const element = <h1>Hello, {name}!</h1>;
  const isLoggedIn = true;
  const numbers = [1, 2, 3, 4, 5];
  return (
    <div className="App">
      hello, react!
      <Button />
      <Button />
      <Button />
      <br></br>
      <Counter />
      <br />
      {element}
      {element}
      <br></br>
      <Greeting />
      <Greeting />
      <GreetingProp name="Tom" />
      <GreetingProp name="Alice" />
      <Ex name="Tom" age="15" />
      <LoggedIn isLoggedIn={isLoggedIn} />
      <NumberList numbers={numbers} />
    </div>
  );
}

export default App;
