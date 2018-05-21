import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Logout extends Component {
  onClick = event => {
    event.preventDefault();
    this.props.logout();
  };

  render() {
    return (
      <div className="logout">
        Logged in as <strong>{this.props.user.name}</strong>
        <br />
        <button onClick={this.onClick}>Logout</button>
      </div>
    );
  }
}

Logout.propTypes = {
  logout: PropTypes.func.isRequired,
};

export default Logout;
