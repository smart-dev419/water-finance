/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./components/Home";
import Apps from "./components/Apps";

import "bootstrap/dist/css/bootstrap.min.css";
import "animate.css/animate.min.css";
import './App.scss';

function App() {

  return (
    <div>
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/app">
              <Apps />
            </Route>
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
