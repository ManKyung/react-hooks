import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import SubHome from "./SubHome";

const apiCall = async () => {
  return await axios.get("https://dog.ceo/api/breeds/image/random");
};

const Home = () => {
  const [count, setCount] = useState(0);
  const [state, setState] = useState({ name: "Jung", age: 34 });

  const addCount = () => {
    setCount((count) => count + 1);
    setCount((count) => count + 1);
  };

  const fState = () => {
    setState({ ...state, tall: 151 });
  };

  console.log("component add");

  useEffect(() => {
    console.log("use Effect");
    return () => {
      console.log("unmount");
    };
  });

  useEffect(() => {
    console.log("use Effect first render");
  }, []);

  useEffect(() => {
    console.log(`use ${count} Effect first render`);

    apiCall()
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [count]);

  return (
    <>
      <div>This is count: {count}</div>
      <button onClick={() => setCount(count + 1)}>Add</button>
      <button onClick={addCount}>Add</button>
      <div>
        This is Object {state.name} {state.age} {state.tall}
      </div>
      <button onClick={fState}>add State</button>
      <SubHome name="SubHomedf">This is ddf</SubHome>
      <Link to="/home">
        <button>Home</button>
      </Link>
      <Link to="/about">
        <button>About</button>
      </Link>
    </>
  );
};

export default Home;
