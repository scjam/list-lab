import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AllVillagers from '../../containers/AllVillagers';
import VillagerById from '../../containers/VillagerById';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={AllVillagers} />
        <Route path="/:_id" component={VillagerById} />
      </Switch>
    </Router>
  );
}
