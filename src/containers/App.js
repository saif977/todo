import classes from "./App.module.css";

import { Switch, Route, Redirect } from "react-router-dom";
import Login from "../components/Login/Login";
import Todo from "../components/Todo/Todo";
import React from "react";

import store from "../redux/store";
import {Provider} from "react-redux"

import ProtectedRoute from "../components/ProtectedRoute/ProtectedRoute";
import PublicRoute from "../components/PublicRoute/PublicRoute";

function App() {
  return (
    <div className={classes.App}>
      <Provider store={store}>
      <Switch>
        <PublicRoute path="/" component={Login} exact />
        <ProtectedRoute path="/todo" component={Todo} exact />
        <Redirect from="/login" to="/" />
        <Route
          render={() => {
            return <div>nothing found</div>;
          }}
        />
      </Switch>
      </Provider>
    </div>
  );
}

export default App;
