import { createStore, compose, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';

import rootReducer from './rootReducer';

export const defaultState = {
  auth: {
    user: null,
    pending: true,
    valid: false,
  },
};

const initialState = Object.assign({}, defaultState);
const middleware = [ReduxThunk];

const store = createStore(
  rootReducer,
  initialState,
  compose(
    applyMiddleware(...middleware),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);

export default store;
