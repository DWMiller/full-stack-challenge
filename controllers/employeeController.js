const mongoose = require('mongoose');
const User = mongoose.model('User');

exports.getEmployees = async (req, res) => {
  const users = await User.find();
  res.json(users);
};

exports.createEmployee = async (req, res) => {
  const user = new User(req.body);
  await user.save();

  res.json(user);
};
