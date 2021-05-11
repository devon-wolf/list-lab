import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
 } from 'react-router-dom';
 import ListPage from '../../containers/ListPage';
 import DetailPage from '../../containers/DetailPage';
 import './App.css';

export default function App() {
  return (
    <Router>
      <h1>I Don't Know Anything about Animal Crossing</h1>
      <h2>...but here we are</h2>

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
