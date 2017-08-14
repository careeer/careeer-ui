import React, {Component} from 'react';
import { Grid } from 'semantic-ui-react'

import { Switch, Route, Redirect } from 'react-router-dom'

import ClientRoadmapDashboard from './Roadmaps/ClientRoadmapDashboard';
import ClientList from './Clients/ClientList';
import NewClient from './Clients/NewClient';
import RedirectToCareeer from './RedirectToCareeer';

import './Show.css';

class Show extends Component {
  render() {
    return (
      <Grid>
        <Switch>
          <Route exact path='/' component={RedirectToCareeer}/>
          <Route path='/roadmap' component={NewClient}/>
          <Route path='/clients' component={ClientList}/>
          <Route path='/:clientId' component={ClientRoadmapDashboard}/>
        </Switch>
      </Grid>
    );
  }
}
export default Show;
