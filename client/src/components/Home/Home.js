import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Login from '../Login/Login';
import SampleData from '../SampleData/SampleData';

class Home extends Component {
  render() {
    return (
      <div>
        <h1>Home</h1>
        <SampleData />
        {!this.props.auth && <Login {...this.props} />}

        {/* <ReviewList reviews={this.props.ownReviews} /> */}
      </div>
    );
  }
}

Home.propTypes = {
  login: PropTypes.func.isRequired,
  auth: PropTypes.bool.isRequired,
};

export default Home;
