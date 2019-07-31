import React from "react";
import ReactDOM from "react-dom";

import { HashRouter as Router, Route } from 'react-router-dom';

import { PersistGate } from 'redux-persist/integration/react';

import { Provider } from "react-redux";
import _store from "./redux/store";

import TodoApp from "./TodoApp";

const { store, persistor } = _store()

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Router>
        <Route path="/:filter?" component={TodoApp} />
      </Router>
    </PersistGate>
  </Provider>,
  rootElement
);
