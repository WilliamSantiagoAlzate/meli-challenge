import { combineReducers } from 'redux';

// Reducers
import { items } from './items';

// Add reducers to root
export const rootReducer = combineReducers({
  items
});
