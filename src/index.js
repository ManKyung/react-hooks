import React, { useState } from "react";
import ReactDom from "react-dom";

const App = () => {
  const [item, setItem] = useState(1);
  const incrementItem = () => setItem(item + 1);
  const decrementItem = () => setItem(item - 1);
  return (
    <div className="App">
      <h1>Hello {item}</h1>
      <h2>Start Ediasdfting</h2>
      <button onClick={incrementItem}>Increment</button>
      <button onClick={decrementItem}>Decrement</button>
    </div>
  );
};

class AppUgly extends React.Component {
  state = {
    item: 0,
  };
  render() {
    const { item } = this.state;
    return (
      <div className="App">
        <h1>Hello {item}</h1>
        <h2>Start Ediasdftinddg</h2>
        <button onClick={this.incrementItem}>Increment</button>
        <button onClick={this.decrementItem}>Decrement</button>
      </div>
    );
  }
  incrementItem = () => {
    this.setState((state) => {
      return { item: state.item + 1 };
    });
  };
  decrementItem = () => {
    this.setState((state) => {
      return { item: state.item - 1 };
    });
  };
}

const rootElement = document.getElementById("root");
ReactDom.render(<AppUgly />, rootElement);
