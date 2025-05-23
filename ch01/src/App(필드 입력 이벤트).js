import React, { useState } from "react";

// function ChangeApp() {
//   const [text, setText] = useState("");

//   const handleChange = (event) => {
//     setText(event.target.value);
//   };

//   return (
//     <div>
//       <h1>입력 필드 이벤트</h1>
//       <input type="password" onChange={handleChange} placeholder="입력하세요" />
//       <p>입력한 값: {text}</p>
//     </div>
//   );
// }

function ChangeApp(props) {
  const [text, setText] = useState("");

  const handleChange = (event) => {
    setText(props.onChange());
  };

  return (
    <div>
      <h1>입력 필드 이벤트</h1>
      {/* <input type="text" onChange={handleChange} placeholder="입력하세요" /> */}
      <input type="text" onChange={props.onChange} placeholder="입력하세요" />
      <p>입력한 값: {text}</p>
    </div>
  );
}

// function App() {
//   let str = "";
//   return (
//     <div>
//       <ChangeApp
//         onChange={(event) => {
//           str = str + "*";
//           return str;
//         }}
//       ></ChangeApp>
//     </div>
//   );
// }

function App() {
  let counter = 0;
  return (
    <div>
      <ChangeApp
        onChange={(event) => {
          return counter++;
        }}
      ></ChangeApp>
    </div>
  );
}
// 자식 컴포넌트 만들어서 또 해보기.
export default App;
