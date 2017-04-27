import { combineReducers } from 'redux';
import restaurantReducer from './restaurant';

const reducers = combineReducers({
  restaurants: restaurantReducer,
});

export default reducers;
