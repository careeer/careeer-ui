/* eslint-disable */
import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { List, Button, Icon, Grid, Dimmer, Loader } from 'semantic-ui-react';
import ClientList from './ClientList';
import DuplicateClientInput from './DuplicateClientInput';
import NewClientInput from './NewClientInput';
import FullScreenLoader from '../../ClientDashboard/RoadmapElements/FullScreenLoader';
import PlusButton from '../../ClientDashboard/RoadmapElements/PlusButton';
import ClientElement from './ClientElement';

import '../Styles/CoachDashboard.css';

@inject('roadmapElements')@observer
export default class CoachDashboard extends Component {
  componentWillMount() {
    this.props.roadmapElements.getClients();
  };

  handleNewClientClick = () => {
    this.props.history.push('/Client/New');
  };

  handleExistingClientClick = (event, data) => {
    this.props.history.push(`/${data.value}`);
  };

  handleArchiveClick = (slug) => {
    this.props.roadmapElements.archiveClient(slug);
  };

  handleDuplicateClick = (copiedFrom) => {
    this.props.history.push(`/duplicate/${copiedFrom}`);
  };

  render() {
    return (
      <Grid className="defaultGrid">
        <div>
          <FullScreenLoader
            clientName=""
            isDefaultLoading={false}
            isLoading={this.props.roadmapElements.isClientLoading}
          />
          <Grid.Row>
            <Grid.Column floated="left">
              <ClientList
                currentClients={this.props.roadmapElements.clients.slice()}
                handleExistingClientClick={this.handleExistingClientClick}
                handleArchiveClick={this.handleArchiveClick}
                handleDuplicateClick={this.handleDuplicateClick}
              />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column floated="left">
              <PlusButton
                buttonSize="massive"
                iconSize="large"
                handleFormOpen={this.handleNewClientClick}
              />
            </Grid.Column>
          </Grid.Row>
        </div>
      </Grid>
    );
  }
}
