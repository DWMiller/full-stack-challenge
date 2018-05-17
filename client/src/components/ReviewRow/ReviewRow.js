import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Moment from 'react-moment';
import { Link } from 'react-router-dom';

class ReviewRow extends Component {
  render() {
    const { employee, creator } = this.props;
    return (
      <tr className="reviewRow">
        <td>
          <Moment format="YYYY/MM/DD">{this.props.created}</Moment>
        </td>
        <td>{creator.name}</td>
        <td>{employee.name}</td>
        <td>{this.props.reviewer.name}</td>
        <td>
          {this.props.rating || (
            <Link to={`review/${this.props._id}`}>Pending</Link>
          )}
        </td>
      </tr>
    );
  }
}

ReviewRow.propTypes = {
  _id: PropTypes.string.isRequired,
  creator: PropTypes.object.isRequired,
  employee: PropTypes.object.isRequired,
  reviewer: PropTypes.object.isRequired,
  rating: PropTypes.number,
};

export default ReviewRow;
