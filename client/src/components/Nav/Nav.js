import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { NavLink } from 'react-router-dom';

import './Nav.css';

class Nav extends Component {
  renderPrivate(user) {
    return (
      <React.Fragment>
        <NavLink className="nav__link" to="/reviews">
          Reviews
        </NavLink>
        {user.isAdmin && (
          <NavLink className="nav__link" to="/admin">
            Admin
          </NavLink>
        )}
      </React.Fragment>
    );
  }

  render() {
    const { auth } = this.props;
    return (
      <div className="app__nav">
        <NavLink exact className="nav__link" to="/">
          Home
        </NavLink>
        {this.props.auth.valid && this.renderPrivate(auth.user)}
      </div>
    );
  }
}

Nav.propTypes = {
  auth: PropTypes.object.isRequired,
};

export default Nav;
