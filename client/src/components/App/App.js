import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as actionCreators from '../../redux/actionCreators';
import * as selectors from '../../redux/selectors';

import Nav from '../Nav/Nav';
import Home from '../Home/Home';
import Admin from '../Admin/Admin';

import ReviewPage from '../ReviewPage/ReviewPage';

import Reviews from '../Reviews/Reviews';

import PrivateRoute from '../../helpers/PrivateRoute';

import './App.css';

class App extends Component {
  componentDidMount() {
    this.props.checkLoggedIn();
  }

  render() {
    return (
      <div className="app">
        <header className="app__header">
          <Nav logout={this.props.logout} auth={this.props.auth} />
        </header>
        <div className="app__page">
          <Switch>
            <Route
              exact
              path="/"
              render={match => (
                <Home
                  login={this.props.login}
                  auth={this.props.auth.valid}
                  ownReviews={this.props.ownReviews}
                />
              )}
            />
            <PrivateRoute
              exact
              auth={this.props.auth}
              path="/review/:reviewId"
              updateReviewRating={this.props.updateReviewRating}
              reviews={this.props.reviews}
              component={ReviewPage}
            />
            <PrivateRoute
              auth={this.props.auth}
              requireAdmin
              path="/admin/"
              component={Admin}
            />

            <PrivateRoute
              exact
              auth={this.props.auth}
              path="/reviews"
              component={Reviews}
            />
          </Switch>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    reviews: selectors.allReviewsSelector(state),
    auth: state.auth,
    ownReviews: selectors.ownReviewsSelector(state),
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(actionCreators, dispatch);
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
