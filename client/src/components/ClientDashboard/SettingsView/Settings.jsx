/* eslint-disable */
import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { withRouter } from 'react-router-dom';
import { Grid, Button, Dimmer } from 'semantic-ui-react';
import CareeerLogo from '../../Lib/CareeerLogo';
import CloseButton from './CloseButton';

import '../Styles/Settings.scss';

@inject('user') @observer
class Settings extends Component {
  handleClick = (e) => {
    e.preventDefault();
    const { user, history } = this.props;
    const email = user.email;
    user.destroySession();
    history.push({
      pathname: '/signIn',
      state: { logoutEmail: email }
    });
  }

  render() {
    if (this.props.showSettings) {
      $crisp.push(['do', 'chat:hide']);
    } else {
      $crisp.push(['do', 'chat:show']);
    }

    return (
      <Dimmer
        page
        inverted
        className="settingsDimmer"
        active={this.props.showSettings}
      >
        <CareeerLogo />
        <CloseButton onCloseClick={this.props.onCloseClick} />
        <Button
          basic
          content="Sign Out"
          onClick={this.handleClick}
        />
      </Dimmer>
    );
  }
}

export default withRouter(Settings);