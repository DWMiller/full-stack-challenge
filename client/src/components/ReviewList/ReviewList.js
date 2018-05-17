import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ReviewRowEditable from '../ReviewRowEditable/ReviewRowEditable';
import ReviewRow from '../ReviewRow/ReviewRow';

import './ReviewList.css';

class ReviewList extends Component {
  renderReviews(data = []) {
    return data.map(review => {
      // Can't be assigned to review themselves
      const validReviewers = this.props.employees.filter(
        employee => employee._id !== review.employee._id
      );

      return this.props.adminMode ? (
        <ReviewRowEditable
          key={review._id}
          {...review}
          user={this.props.user}
          updateReviewReviewer={this.props.updateReviewReviewer}
          employees={validReviewers}
        />
      ) : (
        <ReviewRow key={review._id} {...review} />
      );
    });
  }

  render() {
    return (
      <div>
        <div className="reviewList">
          <table className="reviewList__table" border="1">
            <thead>
              <tr>
                <th>Date</th>
                <th>Creator</th>
                <th>Employee</th>
                <th>Reviewer</th>
                <th>Score</th>
              </tr>
            </thead>

            <tbody>{this.renderReviews(this.props.reviews || [])}</tbody>
          </table>
        </div>
      </div>
    );
  }
}

ReviewList.propTypes = {
  adminMode: PropTypes.bool,
  user: PropTypes.object.isRequired,
  updateReviewReviewer: PropTypes.func,
};

export default ReviewList;
