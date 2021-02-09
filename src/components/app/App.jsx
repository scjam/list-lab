import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AllVillagers from '../../containers/AllVillagers';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={AllVillagers} />
      </Switch>
    </Router>
  );
}
