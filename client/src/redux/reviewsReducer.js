import * as actionTypes from './actionTypes';

export default (state = [], { type, reviews, review } = {}) => {
  switch (type) {
    case actionTypes.ADD_REVIEWS:
      return [...reviews, ...state];
    case actionTypes.CLEAR_REVIEWS:
      return [];
    case actionTypes.UPDATE_REVIEW:
      const index = state.findIndex(r => r._id === review._id);
      return state.map((r, i) => (i !== index ? r : review));
    default:
      return state;
  }
};
