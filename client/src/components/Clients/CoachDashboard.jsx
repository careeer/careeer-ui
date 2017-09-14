/* eslint-disable */
import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { List, Button, Icon, Grid, Dimmer, Loader } from 'semantic-ui-react';
import ClientList from './ClientList';
import DuplicateClientInput from './DuplicateClientInput';
import NewClientInput from './NewClientInput';
import { mainGridStyle } from '../Constants/CommonElementStyles';
import PlusButton from '../RoadmapElements/PlusButton';
import ClientElement from './ClientElement';

@inject('roadmapElements')@observer
export default class CoachDashboard extends Component {
  state = {
    copiedFrom: '',
    showDuplicateForm: false,
  }
  componentWillMount() {
    this.props.roadmapElements.getClients();
    this.setState({
      copiedFrom: '',
      showDuplicateForm: false,
    });
  };

  handleNewClientClick = () => {
    this.props.history.push('/roadmap');
  };

  handleExistingClientClick = (event, data) => {
    this.props.roadmapElements.setUpClientObject({ name: data.name, slug: data.value });
    this.props.history.push(`/${data.value}`);
  };

  handleArchiveClick = (slug) => {
    this.props.roadmapElements.archiveClient(slug);
  };

  handleDuplicateClick = (copiedFrom) => {
    this.setState({
      copiedFrom: copiedFrom,
      showDuplicateForm: true,
    });
  };

  handleCopyClient = (oldClient, newClient) => {
    this.props.roadmapElements.copyClient(oldClient, newClient);
  }

  handleInputChange = (e, data) => {
    this.props.roadmapElements.handleClientInputChange(e, data);
  }

  resetClient = () => {
    this.props.roadmapElements.resetClientParams();
  }

  render() {
    if (this.state.showDuplicateForm){
      return (
        <DuplicateClientInput
          copyClient={this.handleCopyClient}
          currentClient={this.props.roadmapElements.currentClient}
          currentClientSlug={this.props.roadmapElements.currentClientSlug}
          handleClientInputChange={this.handleInputChange}
          resetClientParams={this.resetClient}
          hasClientName={this.props.roadmapElements.hasClientName}
          copiedFrom={this.state.copiedFrom}
          history={this.props.history}
        />
      );
    } else if (this.state.showNewForm){
      return (
        <NewClientInput />
      );
    }
    return (
      <Grid style={mainGridStyle}>
        <div>
        { this.props.roadmapElements.isClientLoading &&
          <Dimmer
            active
            page
            inverted
          >
            <Loader size="medium">
              loading client list
            </Loader>
          </Dimmer>
        }
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
