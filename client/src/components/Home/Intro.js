import React, { Component } from 'react';

export default class Intro extends Component {
  render() {
    return (
      <div className="intro">
        <p>Welcome to something something performance reviews.</p>

        <h3>Reviews Page</h3>
        <p>
          On the <strong>reviews page</strong>, find completed reviews on your
          performance, and performance reviews assigned to you.
        </p>
        <p>
          Incomplete reviews assigned to you will say <em>pending</em> in the
          ratings field. Clicking this text will take you to the review form
          where you can complete and submit it.
        </p>
        <h3>Admin Page</h3>
        <p>You will need to login as an admin account to view this page.</p>
        <h4>Admin - Employees Section</h4>
        <p>
          Create employees. View employees. Create new reviews for an employee.
        </p>
        <h4>Admin - Review Section</h4>
        <p>
          View all reviews. Assign an employee as the reviewer for a review.
        </p>
      </div>
    );
  }
}
