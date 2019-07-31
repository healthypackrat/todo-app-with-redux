import React from "react";
import ReactDOM from "react-dom";

import { HashRouter as Router, Route } from 'react-router-dom'

import { Provider } from "react-redux";
import store from "./redux/store";

import TodoApp from "./TodoApp";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Route path="/:filter?" component={TodoApp} />
    </Router>
  </Provider>,
  rootElement
);
