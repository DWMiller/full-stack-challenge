const mongoose = require('mongoose');

const reviewSchema = mongoose.Schema(
  {
    creator: {
      type: mongoose.Schema.ObjectId,
      ref: 'User',
      required: 'You must specifify a user',
    },
    created: {
      type: Date,
      default: Date.now,
    },
    reviewer: {
      type: mongoose.Schema.ObjectId,
      ref: 'User',
    },
    complete: {
      type: Boolean,
      default: false,
    },
    employee: {
      type: mongoose.Schema.ObjectId,
      ref: 'User',
      required: 'You must specifify a user',
    },
    rating: {
      type: Number,
      min: 1,
      max: 5,
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

reviewSchema.virtual('assigned').get(function() {
  return !!this.reviewer;
});

function autopopulate(next) {
  this.populate('employee', 'name')
    .populate('creator', 'name')
    .populate('reviewer', 'name');
  next();
}

reviewSchema.pre('find', autopopulate);
reviewSchema.pre('findOne', autopopulate);
reviewSchema.pre('findOneAndUpdate', autopopulate);

module.exports = mongoose.model('Review', reviewSchema);
