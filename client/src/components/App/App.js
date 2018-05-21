import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as actionCreators from '../../redux/actionCreators';
import * as selectors from '../../redux/selectors';

import Header from '../Header/Header';
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
        {this.props.auth.valid && <Header />}

        <div className="app__page">
          <Switch>
            <Route exact path="/" component={Home} />
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
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(actionCreators, dispatch);
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
