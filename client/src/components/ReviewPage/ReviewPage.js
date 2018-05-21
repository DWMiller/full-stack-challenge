import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { RadioGroup, Radio } from 'react-radio-group';

import { Redirect } from 'react-router-dom';

import './ReviewPage.css';

class ReviewPage extends Component {
  findReview() {
    return this.props.reviews.find(r => r._id === this.props.reviewId);
  }

  constructor(props) {
    super(props);

    const review = this.findReview();

    this.state = {
      review,
      rating: '',
    };
  }

  onChange = value => {
    this.setState({ rating: value });
  };

  onSubmit = event => {
    event.preventDefault();
    this.props.updateReviewRating(this.state.review._id, this.state.rating);
  };

  componentDidUpdate(prevProps) {
    if (prevProps.reviews !== this.props.reviews) {
      const review = this.findReview();

      this.setState({
        review,
      });
    }
  }

  render() {
    const isCompleted = this.state.review && this.state.review.complete;

    if (!this.state.review) {
      return <div>Loading...</div>;
    }

    if (isCompleted) {
      return <Redirect to="/reviews" />;
    }

    return (
      <div>
        <form className="reviewForm" onSubmit={this.onSubmit}>
          <p>
            <strong>Performance Review</strong>
            <br />
            <strong>Employee:</strong> {this.state.review.employee.name}
          </p>
          <legend>Rating</legend>
          <RadioGroup
            name="rating"
            selectedValue={this.state.rating}
            onChange={this.onChange}
          >
            <Radio value="1" />1
            <Radio value="2" />2
            <Radio value="3" />3
            <Radio value="4" />4
            <Radio value="5" />5
          </RadioGroup>

          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

ReviewPage.propTypes = {
  reviews: PropTypes.array.isRequired,
  reviewId: PropTypes.string.isRequired,
  updateReviewRating: PropTypes.func.isRequired,
};

export default ReviewPage;
