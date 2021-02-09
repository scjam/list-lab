import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AllVillagers from '../../containers/AllVillagers';
import VillagerByName from '../../containers/VillagerByName';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={AllVillagers} />
        <Route path="/:name" component={VillagerByName} />
      </Switch>
    </Router>
  );
}
