import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as actionCreators from '../../redux/actionCreators';
import * as selectors from '../../redux/selectors';

import { Route, Switch, NavLink } from 'react-router-dom';
import EmployeeList from '../EmployeeList/EmployeeList';
import ReviewList from '../ReviewList/ReviewList';

import './Admin.css';

class Admin extends Component {
  render() {
    return (
      <div className="admin">
        <div className="admin__nav">
          <NavLink className="nav__link" to="/admin/employees">
            Employees
          </NavLink>
          <NavLink className="nav__link" to="/admin/reviews">
            Reviews
          </NavLink>
        </div>
        Admin
        <Switch>
          <Route
            path="/admin/employees"
            render={() => (
              <EmployeeList
                employees={this.props.employees}
                addEmployee={this.props.addEmployee}
                createReview={this.props.createReview}
              />
            )}
          />
          <Route
            path="/admin/reviews"
            render={() => (
              <ReviewList
                adminMode
                reviews={this.props.reviews}
                employees={this.props.employees}
                user={this.props.user}
                updateReviewReviewer={this.props.updateReviewReviewer}
              />
            )}
          />
        </Switch>
      </div>
    );
  }
}

Admin.propTypes = {
  employees: PropTypes.array.isRequired,
};

const mapStateToProps = state => {
  return {
    reviews: selectors.allReviewsSelector(state),
    user: selectors.userSelector(state),
    employees: selectors.allEmployeesSelector(state),
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(actionCreators, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Admin);
