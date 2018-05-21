import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Login.css';

class Login extends Component {
  state = {
    email: '',
    password: '',
  };

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  onSubmit = event => {
    event.preventDefault();
    this.props.login(this.state);
  };

  render() {
    return (
      <div className="login">
        <h3>Login</h3>
        <form onSubmit={this.onSubmit}>
          <input
            value={this.state.email}
            onChange={this.onChange}
            name="email"
            type="text"
            placeholder="email"
          />
          <input
            value={this.state.password}
            onChange={this.onChange}
            name="password"
            type="password"
            placeholder="passsword"
          />
          <button type="submit">Login</button>
        </form>
      </div>
    );
  }
}

Login.propTypes = {
  login: PropTypes.func.isRequired,
};

export default Login;
