import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Logout extends Component {
  render() {
    return (
      <div>
        <p>Logged in as {this.props.user.name}</p>
        <button onClick={this.props.logout}>Logout</button>
      </div>
    );
  }
}

Logout.propTypes = {
  logout: PropTypes.func.isRequired,
};

export default Logout;
