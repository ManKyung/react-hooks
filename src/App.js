import React from "react";
import { Link, Route, Switch, BrowserRouter as Router } from "react-router-dom";
import About from "./About";
import Home from "./Home";
import Main from "./Main";
import Context from "./Context";
import User from "./User";
import Counter from "./Counter";

const App = () => {
  return (
    <>
      <Router>
        <header>
          <Link to="/">
            <button>Main</button>
          </Link>
          <Link to="/home">
            <button>Home</button>
          </Link>
          <Link to="/about">
            <button>About</button>
          </Link>
          <Link to="/context">
            <button>Context</button>
          </Link>
          <Link to="/user">
            <button>User</button>
          </Link>
          <Link to="/counter">
            <button>Counter</button>
          </Link>
        </header>
        <hr />
        <main>
          <Switch>
            <Route path="/" exact component={Main} />
            <Route path="/home" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/context" component={Context} />
            <Route path="/user" component={User} />
            <Route path="/counter" component={Counter} />
          </Switch>
        </main>
      </Router>
    </>
  );
};

export default App;
