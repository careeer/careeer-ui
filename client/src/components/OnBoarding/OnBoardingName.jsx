/* eslint-disable */
import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import PropTypes from 'prop-types';
import PageHeader from './Components/PageHeader';
import UserNamePrompt from './Components/UserNamePrompt';
import DateHelper from '../Lib/DateHelper';
import defaultElements from '../Constants/DefaultRoadmapElements';


@inject('roadmapElements') @observer
export default class OnBoardingName extends Component {
  state = {
    nameError: false,
    submittedClient: false,
  }

  componentWillMount() {
    this.props.roadmapElements.resetClientParams();
    $crisp.push(['do', 'chat:hide']);
  }

  componentWillUnmount() {
    $crisp.push(['do', 'chat:show']);
  }

  handleClick = () => {
    this.handleCreateClient('Enter');
  };

  handleCreateClient = (keyPressed) => {
    const clientName = this.props.roadmapElements.currentClient;

    if (keyPressed === 'Enter' &&
        !this.state.submittedClient) {
      if (clientName.indexOf(' ') >= 0 &&
          clientName.length >= 4) {
        this.setState({
          nameError: false,
          submittedClient: true,
        });
        const today = DateHelper.formatedDate();
        const firstRoadmapElements = defaultElements.map(element => Object.assign({}, element, {
          dueDate: today,
        }));
        this.props.roadmapElements.createClientWithDefaults(firstRoadmapElements);
        $crisp.push(["set", 'session:data', [[["ClientName", clientName]]]]);
        const firstName = clientName.split(" ", 1);
        this.props.history.push(`/OnBoarding/ThankYou/${firstName}`);
      } else {
        console.log("error");
        this.setState({
          nameError: true,
        });
      }
    }
  }

  render() {
    const { handleClientInputChange,
            currentClient,
          } = this.props.roadmapElements;

    return (
      <div className="onBoarding">
        <PageHeader
          counterLabel=""
          handleClick={this.handleClick}
          headerLinkLabel="Build your roadmap"
        />
        <UserNamePrompt
          createClient={this.handleCreateClient}
          currentClient={currentClient || ''}
          handleClientInputChange={handleClientInputChange}
          nameError={this.state.nameError}
        />
      </div>
    );
  }
}
