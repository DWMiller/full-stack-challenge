import { createSelector } from 'reselect';

export const allReviewsSelector = state => state.reviews;

export const authSelector = state => state.auth;

export const userSelector = createSelector(
  [authSelector],
  auth => auth.user || {}
);

export const ownReviewsSelector = createSelector(
  [allReviewsSelector, userSelector],
  (reviews, user) => reviews.filter(review => review.employee._id === user._id)
);

export const assignedReviewsSelector = createSelector(
  [allReviewsSelector, userSelector],
  (reviews, user) =>
    reviews.filter(({ reviewer = {} }) => reviewer._id === user._id)
);

export const allEmployeesSelector = state => state.employees;
