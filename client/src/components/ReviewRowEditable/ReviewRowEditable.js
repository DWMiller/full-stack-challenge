import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Moment from 'react-moment';
import EmployeeSelector from '../EmployeeSelector/EmployeeSelector';
import { Link } from 'react-router-dom';

class ReviewRowEditable extends Component {
  onChange = reviewer =>
    this.props.updateReviewReviewer(this.props._id, reviewer);

  renderEmployeeSelector = (isAdmin = false) => {
    if (isAdmin && !this.props.complete) {
      return (
        <EmployeeSelector
          onChange={this.onChange}
          employees={this.props.employees}
          selected={this.props.reviewer}
        />
      );
    }

    return <React.Fragment>{this.props.reviewer.name}</React.Fragment>;
  };

  render() {
    const { employee, creator } = this.props;
    return (
      <tr className="reviewRow">
        <td>
          <Moment format="YYYY/MM/DD">{this.props.created}</Moment>
        </td>
        <td>{creator.name}</td>
        <td>{employee.name}</td>
        <td>{this.renderEmployeeSelector(this.props.user.isAdmin)}</td>
        <td>
          {this.props.rating || (
            <Link to={`review/${this.props._id}`}>Pending</Link>
          )}
        </td>
      </tr>
    );
  }
}

ReviewRowEditable.propTypes = {
  user: PropTypes.object.isRequired,
  updateReviewReviewer: PropTypes.func.isRequired,
};

export default ReviewRowEditable;
