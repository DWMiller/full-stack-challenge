const mongoose = require('mongoose');
const Review = mongoose.model('Review');

exports.getOwnReviews = async (req, res) => {
  const reviews = await Review.find({
    employee: req.user._id,
    complete: true,
  });

  res.json(reviews);
};

exports.getReviews = async (req, res) => {
  let query = {};

  if (!req.user.isAdmin) {
    query.reviewer = req.user._id;
  }

  const reviews = await Review.find(query);
  res.json(reviews);
};

exports.createReview = async (req, res) => {
  req.body.creator = req.user._id;

  const newReview = new Review(req.body);
  await newReview.save();

  //TODO Figure out how to autopopulate on save
  const savedReview = await Review.findOne({
    _id: newReview._id,
  });

  res.json(savedReview);
};

exports.updateReview = async (req, res) => {
  const review = await Review.findOneAndUpdate(
    {
      _id: req.params.id,
      complete: false,
    },
    req.body
  );

  res.json(review);
};

// exports.confirmAssigned = (review,user) => {
//   if(!review.reviewer.equals(user._id)) {
//     throw Error('You are not assigned this review');
//   }
// }

exports.completeReview = async (req, res) => {
  const review = await Review.findOneAndUpdate(
    {
      _id: req.params.id,
      reviewer: req.user,
    },
    {
      rating: req.body.rating,
      complete: true,
    }
  );

  res.json(review);
};
