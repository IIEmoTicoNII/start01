import "./App.css";
//1. 버튼 클릭 이벤트 추가하기

function ChildComponent() {
  const handleButtonClick = () => {
    alert("Component Button clicked!"); // 고정된 기능 추가
  };

  return (
    <div>
      ChildComponent
      <br />
      <button onClick={handleButtonClick}>클릭하세요</button>
    </div>
  );
}

function App() {
  const handlerClick = () => {
    alert("클릭!");
  };

  return (
    <div>
      Hello, React!<br></br>
      <button onClick={handlerClick}>클릭</button>
      <ChildComponent />
      <br></br>
      <ChildComponent />
    </div>
  );
}

export default App;
