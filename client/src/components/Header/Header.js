import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as actionCreators from '../../redux/actionCreators';
import * as selectors from '../../redux/selectors';

import Logout from '../Logout/Logout';
import Nav from '../Nav/Nav';

import './Header.css';

class Header extends Component {
  render() {
    return (
      <header className="app__header">
        <Nav auth={this.props.auth} />

        {this.props.auth.valid && (
          <Logout user={this.props.auth.user} logout={this.props.logout} />
        )}
      </header>
    );
  }
}

Header.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = state => {
  return {
    auth: selectors.authSelector(state),
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(actionCreators, dispatch);
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header));
