import React, { useState } from "react";
import ReactDom from "react-dom";

const useInput = (initValue) => {
  const [value, setValue] = useState(initValue);
  const onChange = (event) => {
    console.log(event.target);
  };
  return { value, onChange };
};

// React Hooks 사용 예시
const App = () => {
  const name = useInput("Mr.");
  return (
    <div className="App">
      <h1>Hello</h1>
      <input type="text" placeholder="name" {...name} />
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDom.render(<App />, rootElement);
