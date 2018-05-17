import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import { NavLink } from 'react-router-dom';

import Logout from '../Logout/Logout';

import './Nav.css';

class Nav extends Component {
  renderPrivate(user) {
    return (
      <Fragment>
        <NavLink className="nav__link" to="/reviews">
          Reviews
        </NavLink>
        {user.isAdmin && (
          <NavLink className="nav__link" to="/admin/employees">
            Admin
          </NavLink>
        )}
        <Logout user={this.props.auth.user} logout={this.props.logout} />
      </Fragment>
    );
  }

  render() {
    const { auth } = this.props;
    return (
      <div className="nav">
        <NavLink className="nav__link" to="/">
          Home
        </NavLink>
        {this.props.auth.valid && this.renderPrivate(auth.user)}
      </div>
    );
  }
}

Nav.propTypes = {
  auth: PropTypes.object.isRequired,
  logout: PropTypes.func.isRequired,
};

export default Nav;
