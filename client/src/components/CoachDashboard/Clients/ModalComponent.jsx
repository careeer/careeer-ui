/* eslint-disable */
import React, { PureComponent } from 'react';
import { Modal, Button } from 'semantic-ui-react';

class ModalComponent extends PureComponent {
  render() {
    return (
      <Modal
        size="mini"
        dimmer="blurring"
        style={{
          fontFamily: 'Raleway',
        }}
        onClose={this.props.handleClose}
        open={this.props.isVisible}
      >
        <Modal.Header
          style={{
            borderBottom: 'none',
          }}
        >
          {this.props.modalHeader}
        </Modal.Header>
        <Modal.Content>
          <p>{this.props.modalContent}</p>
        </Modal.Content>
        <Modal.Actions>
          <Button
            negative
            content={this.props.negativeLabel}
            onClick={this.props.handleClose}
          />
          <Button
            positive
            content={this.props.positiveLabel}
            icon="checkmark"
            labelPosition="right"
            style={{
              backgroundColor: '#24C63A',
            }}
            onClick={this.props.handlePositiveClick}
          />
        </Modal.Actions>
      </Modal>
    );
  }
}

export default ModalComponent;
