import React, { euseReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, age: state.age + 1 };
    case "DECREMENT":
      return { ...state, age: state.age - 1 };
    default:
      throw new Error("Error");
  }
};

const Counter = () => {
  const [count, dispatch] = useReducer(reducer, {
    user: "add",
    age: 34,
  });

  const onIncrease = () => {
    dispatch({ type: "INCREMENT" });
  };
  const onDecrease = () => {
    dispatch({ type: "DECREMENT" });
  };

  return (
    <div>
      <h1>{count.age}</h1>
      <button onClick={onDecrease}>Decrease</button>
      <button onClick={onIncrease}>Increase</button>
    </div>
  );
};

export default Counter;
