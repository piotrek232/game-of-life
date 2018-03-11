import { createStore as createReduxStore } from 'redux';

import rootReducer from './combineReducers';

export default function createStore() {
  return createReduxStore(rootReducer);
}