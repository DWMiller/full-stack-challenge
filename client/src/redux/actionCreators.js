import * as actionTypes from './actionTypes';
import axios from 'axios';

// Async actions using thunk to deal with server interactions

export const fetchEmployees = () => dispatch => {
  axios
    .get('/employees')
    .then(r => r.data)
    .then(employees => dispatch(addEmployees(employees)))
    .catch(err => console.log(err));
};

export const fetchReviews = () => dispatch => {
  axios
    .get('/reviews')
    .then(r => r.data)
    .then(reviews => dispatch(addReviews(reviews)))
    .catch(err => console.log(err));
};

export const fetchOwnReviews = () => dispatch => {
  axios
    .get('/reviews/own')
    .then(r => r.data)
    .then(reviews => dispatch(addReviews(reviews)))
    .catch(err => console.log(err));
};

export const createReview = employee => dispatch => {
  axios
    .post('/reviews/new', {
      employee,
    })
    .then(r => r.data)
    .then(review => dispatch(addReview(review)));
};

export const updateReviewReviewer = (_id, reviewer) => dispatch => {
  axios
    .post(`/reviews/${_id}`, {
      reviewer,
    })
    .then(r => r.data)
    .then(review => {
      dispatch(updateReview(review));
    })
    .catch(err => console.log(err));
};

export const updateReviewRating = (_id, rating) => dispatch => {
  axios
    .post(`/reviews/${_id}/complete`, {
      rating,
    })
    .then(r => r.data)
    .then(review => {
      dispatch(updateReview(review));
    })
    .catch(err => console.log(err));
};

export const login = params => dispatch => {
  axios
    .post('/login', params)
    .then(r => r.data)
    .then(user => {
      if (user.status !== 'error') {
        dispatch(loggedIn(user));
        dispatch(fetchEmployees());
        dispatch(fetchReviews());
        dispatch(fetchOwnReviews());
      }
    })
    .catch(error => {
      console.log('Could not login');
    });
};

export const checkLoggedIn = () => dispatch => {
  axios
    .get('/login')
    .then(r => r.data)
    .then(user => {
      if (user.status === 'error') {
        dispatch(loggedOut());
        dispatch(clearEmployees());
        dispatch(clearReviews());
      } else {
        dispatch(loggedIn(user));
        dispatch(fetchEmployees());
        dispatch(fetchReviews());
        dispatch(fetchOwnReviews());
      }
    })
    .catch(error => {
      console.log(error);
    });
};

export const logout = () => dispatch => {
  axios.get('/logout').catch(error => {
    console.log('Server error');
  });

  // Do not need to wait for response on logout, clear client session regardless
  dispatch(loggedOut());
  dispatch(clearEmployees());
  dispatch(clearReviews());
};

// Standard actions

export const addEmployee = employee => addEmployees([employee]);

export const addEmployees = employees => {
  return {
    type: actionTypes.ADD_EMPLOYEES,
    employees,
  };
};

export const clearEmployees = () => ({
  type: actionTypes.CLEAR_EMPLOYEES,
});

export const addReview = review => addReviews([review]);

export const addReviews = reviews => ({
  type: actionTypes.ADD_REVIEWS,
  reviews,
});

export const updateReview = review => ({
  type: actionTypes.UPDATE_REVIEW,
  review,
});

export const clearReviews = () => ({
  type: actionTypes.CLEAR_REVIEWS,
});

export const loggedIn = user => ({
  type: actionTypes.LOGGED_IN,
  user,
});

export const loggedOut = () => ({
  type: actionTypes.LOGGED_OUT,
});
