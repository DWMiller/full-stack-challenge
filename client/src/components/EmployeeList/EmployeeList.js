import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Employee from '../Employee/Employee';

import './EmployeeList.css';

class EmployeeList extends Component {
  renderEmployees(employees = []) {
    return employees.map(employee => (
      <div key={employee._id} className="employeeList__employee">
        <Employee {...employee} />
        <button
          onClick={() => this.props.createReview(employee._id)}
          className="createReview__button"
        >
          Create Review
        </button>
      </div>
    ));
  }

  render() {
    return (
      <div className="employeeList">
        <p>All Employees</p>
        <div className="employeeList__list">
          {this.renderEmployees(this.props.employees || [])}
        </div>
      </div>
    );
  }
}

EmployeeList.propTypes = {
  createReview: PropTypes.func.isRequired,
};

export default EmployeeList;
