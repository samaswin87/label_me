import React from 'react';
import {
  Switch,
  Route,
} from "react-router-dom";
import App from './bundles/home/components/App';

export default () => {
  return (
    <Switch>
      <Route exact path="/">
        <h3>Root Path Component</h3>
      </Route>
      <Route path="/hello_world">
        <h3>Hello World Component</h3>
      </Route>
      <Route path="/bye_world">
        <h3>Bye World Component</h3>
      </Route>
    </Switch>
  );
}
