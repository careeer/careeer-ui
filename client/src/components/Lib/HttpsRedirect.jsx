/* eslint-disable */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class HttpsRedirect extends Component {

  isLocalHost(hostname) {
    return !!(hostname === 'localhost' ||
              hostname === '[::1]' ||
              hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));
  }

  render() {
    const endpoint = process.env.REACT_APP_API;
    if (
      !endpoint.includes('staging') &&
      typeof window !== 'undefined' &&
      window.location &&
      window.location.protocol === 'http:' &&
      !this.isLocalHost(window.location.hostname)
    ) {
      window.location.href = window.location.href.replace(/^http(?!s)/, 'https');
    }

    return (
      <div>
        { this.props.children }
      </div>
    );
  }
}

HttpsRedirect.propTypes = {
  children: PropTypes.node,
};
