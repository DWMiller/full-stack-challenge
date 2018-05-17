import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Employee.css';

class Employee extends Component {
  render() {
    return <span>{this.props.name}</span>;
  }
}

Employee.propTypes = {
  _id: PropTypes.string.isRequired,
  isAdmin: PropTypes.bool.isRequired,
  email: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default Employee;
