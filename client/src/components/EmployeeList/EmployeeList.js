import React, { Component } from 'react';
import PropTypes from 'prop-types';

import CreateEmployee from '../CreateEmployee/CreateEmployee';
import Employee from '../Employee/Employee';

class EmployeeList extends Component {
  renderEmployees(employees = []) {
    return employees.map(employee => (
      <div key={employee._id} className="employee">
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
      <div>
        <div>
          <CreateEmployee addEmployee={this.props.addEmployee} />
        </div>
        <p>All Employees</p>
        <div>{this.renderEmployees(this.props.employees || [])}</div>
      </div>
    );
  }
}

EmployeeList.propTypes = {
  addEmployee: PropTypes.func.isRequired,
  createReview: PropTypes.func.isRequired,
};

export default EmployeeList;
