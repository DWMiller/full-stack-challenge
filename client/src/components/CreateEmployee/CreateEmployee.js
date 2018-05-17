import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import './CreateEmployee.css';

class CreateEmployee extends Component {
  state = {
    name: '',
    email: '',
    password: 'password',
  };

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  onSubmit = event => {
    event.preventDefault();
    this.createEmployee(this.state);
  };

  createEmployee = async params => {
    await axios
      .post('employees/new', params)
      .then(r => [r.data])
      .then(this.props.addEmployee)
      .catch(error => {
        console.log(error);
        console.log('Could not create employee');
      });
  };

  render() {
    return (
      <div className="createEmployee">
        Insert New Employee
        <form className="createEmployee__form" onSubmit={this.onSubmit}>
          <input
            value={this.state.email}
            onChange={this.onChange}
            name="email"
            type="text"
            placeholder="Email"
          />
          <input
            value={this.state.name}
            onChange={this.onChange}
            name="name"
            type="text"
            placeholder="Employee Name"
          />
          <p>
            <em>
              For demo purposes, all new accounts will be created with a
              password of "password"
            </em>
          </p>
          <button type="submit">Create</button>
        </form>
      </div>
    );
  }
}

CreateEmployee.propTypes = {
  addEmployee: PropTypes.func.isRequired,
};

export default CreateEmployee;
