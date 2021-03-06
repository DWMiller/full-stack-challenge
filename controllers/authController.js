const mongoose = require('mongoose');
const User = mongoose.model('User');

const passport = require('passport');

exports.login = passport.authenticate('local');

exports.loginSuccess = (req, res) => {
  res.json(req.user);
};

exports.isLoggedIn = (req, res, next) => {
  if (req.isAuthenticated()) {
    next();
    return;
  }

  res.json({
    status: 'error',
    message: 'Not Logged In.',
  });
};

exports.logout = async (req, res) => {
  req.logout();

  res.json({
    status: 'success',
    message: 'Successfully logged out',
  });
};

// req.user
exports.requireAdmin = (req, res, next) => {
  if (req.user.isAdmin) {
    next();
    return;
  }

  res.json({
    status: 'error',
    message: 'Not an admin.',
  });
};
