import * as actionTypes from './actionTypes';

export default (state = [], { type, employees } = {}) => {
  switch (type) {
    case actionTypes.ADD_EMPLOYEES:
      return [...employees, ...state];
    case actionTypes.CLEAR_EMPLOYEES:
      return [];
    default:
      return state;
  }
};
