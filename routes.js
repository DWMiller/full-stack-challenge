const express = require('express');
const router = express.Router();

const employeeController = require('./controllers/employeeController');
const reviewController = require('./controllers/reviewController');
const authController = require('./controllers/authController');

const { catchErrors } = require('./errorHanders');

router.get(
  '/employees',
  authController.isLoggedIn,
  catchErrors(employeeController.getEmployees)
);

router.post(
  '/employees/new',
  authController.isLoggedIn,
  authController.requireAdmin,
  catchErrors(employeeController.createEmployee)
);

router.get(
  '/reviews',
  authController.isLoggedIn,
  catchErrors(reviewController.getReviews)
);

router.get(
  '/reviews/own',
  authController.isLoggedIn,
  catchErrors(reviewController.getOwnReviews)
);

router.post(
  '/reviews/new',
  authController.isLoggedIn,
  authController.requireAdmin,
  catchErrors(reviewController.createReview)
);

router.post(
  '/reviews/:id',
  authController.isLoggedIn,
  authController.requireAdmin,
  catchErrors(reviewController.updateReview)
);

router.post(
  '/reviews/:id/complete',
  authController.isLoggedIn,
  catchErrors(reviewController.completeReview)
);

router.get('/login', authController.isLoggedIn, authController.loginSuccess);

router.post('/login', authController.login, authController.loginSuccess);

router.get('/logout', authController.isLoggedIn, authController.logout);

// create employee
// get employee
// update employee

// create performance review
// get performance review
// update performance review

// assign employee to performance review
// submit performance review

// login
// logout

module.exports = router;
