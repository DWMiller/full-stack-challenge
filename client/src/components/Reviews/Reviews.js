import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as actionCreators from '../../redux/actionCreators';
import * as selectors from '../../redux/selectors';

import ReviewList from '../ReviewList/ReviewList';

class Reviews extends Component {
  render() {
    return (
      <div>
        <p>
          <strong>Your Reviews</strong>
        </p>
        {this.props.ownReviews.length ? (
          <ReviewList
            updateReviewReviewer={this.props.updateReviewReviewer}
            user={this.props.user}
            reviews={this.props.ownReviews}
            employees={this.props.employees}
          />
        ) : (
          <p>You have not been reviewed</p>
        )}
        <p>
          <strong>Assigned Reviews</strong>
        </p>
        {this.props.assignedReviews.length ? (
          <ReviewList
            user={this.props.user}
            reviews={this.props.assignedReviews}
            employees={this.props.employees}
          />
        ) : (
          <p>No reviews assigned to you.</p>
        )}
      </div>
    );
  }
}

Reviews.propTypes = {
  employees: PropTypes.array.isRequired,
  reviews: PropTypes.array.isRequired,
  ownReviews: PropTypes.array.isRequired,
  assignedReviews: PropTypes.array.isRequired,
  user: PropTypes.object.isRequired,
};

const mapStateToProps = state => {
  return {
    employees: selectors.allEmployeesSelector(state),
    reviews: selectors.allReviewsSelector(state),
    ownReviews: selectors.ownReviewsSelector(state),
    assignedReviews: selectors.assignedReviewsSelector(state),
    user: selectors.userSelector(state),
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(actionCreators, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Reviews);
