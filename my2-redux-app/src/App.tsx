import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Counter from "./component/Counter";

function App() {
  return (
    <>
      <div>
        <Counter></Counter>
        <Counter></Counter>
      </div>
    </>
  );
}

export default App;
