/* eslint-disable */
import React, { Component } from 'react';
import { Input } from 'semantic-ui-react';
import onClickOutside from 'react-onclickoutside';

class ClientInput extends Component {
  state = {
    submittedClient: false,
  }

  handleKeyPress = (event) => {
    if (event.key === 'Enter' && this.props.currentClient && !this.state.submittedClient) {
      this.setState({
        submittedClient: true,
      });
      this.props.createClient();
    }
  }

  handleClickOutside = (event) => {
    event.key = 'Enter';
    this.handleKeyPress(event);
  }

  render() {
    return (
        <Input
          fluid
          autoFocus
          transparent
          name="clientName"
          placeholder={this.props.placeholder}
          onKeyPress={this.handleKeyPress}
          value={this.props.currentClient}
          onChange={this.props.handleClientInputChange}
        />
    );
  }
}

export default onClickOutside(ClientInput);
