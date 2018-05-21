import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as actionCreators from '../../redux/actionCreators';
import * as selectors from '../../redux/selectors';

import Login from '../Login/Login';
import SampleData from '../SampleData/SampleData';
import Intro from './Intro';

import './Home.css';

class Home extends Component {
  renderLoggedIn() {
    return <Intro />;
  }

  renderLoggedOut() {
    return (
      <React.Fragment>
        <Login {...this.props} />
        <SampleData />
      </React.Fragment>
    );
  }

  render() {
    if (this.props.auth.pending) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        {(this.props.auth.valid && this.renderLoggedIn()) ||
          this.renderLoggedOut()}
      </div>
    );
  }
}

Home.propTypes = {
  login: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = state => {
  return {
    auth: selectors.authSelector(state),
    ownReviews: selectors.ownReviewsSelector(state),
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(actionCreators, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
