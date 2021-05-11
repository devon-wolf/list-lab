import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
 } from 'react-router-dom';
 import ListPage from '../../containers/ListPage';
 import DetailPage from '../../containers/DetailPage';

export default function App() {
  return (
    <Router>
      <h1>Hello, world</h1>
      <Switch>
        <Route 
          path="/"
          exact
          render={routerProps => <ListPage {...routerProps}/>}
        />
        <Route 
          path="/:villager"
          exact
          render={routerProps => <DetailPage {...routerProps}/>}
        />
      </Switch>
    </Router>
  );
}
