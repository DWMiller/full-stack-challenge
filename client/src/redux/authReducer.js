import * as actionTypes from './actionTypes';

export default (state = {}, { type, user } = {}) => {
  switch (type) {
    case actionTypes.LOGGED_OUT:
      return {
        user: null,
        pending: false,
        valid: false,
      };
    case actionTypes.LOGGED_IN:
      return {
        ...state,
        user,
        pending: false,
        valid: true,
      };
    default:
      return state;
  }
};
