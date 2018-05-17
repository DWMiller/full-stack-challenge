require('dotenv').config({ path: __dirname + '/../variables.env' });

const { users } = require('./data');

const mongoose = require('mongoose');

mongoose.connect(process.env.DATABASE);
mongoose.connection.on('error', err => {
  console.error(`${err.message}`);
});

const User = require('../models/User');
const Review = require('../models/Review');

async function deleteData() {
  await User.remove();
  await Review.remove();
}

async function loadData() {
  const promises = [];

  users.forEach(data => {
    const user = new User(data);
    promises.push(User.register(user, process.env.ADMIN_PASSWORD));
  });

  await Promise.all(promises);
  process.exit();
}

async function run() {
  await deleteData();
  await loadData();
  process.exit();
}

run();
