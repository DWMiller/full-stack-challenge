import { combineReducers } from 'redux';

import employeesReducer from './employeesReducer';
import reviewsReducer from './reviewsReducer';
import authReducer from './authReducer';

const rootReducer = combineReducers({
  employees: employeesReducer,
  reviews: reviewsReducer,
  auth: authReducer,
});

export default rootReducer;
