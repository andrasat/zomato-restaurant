import { combineReducers } from 'redux'
import restaurantReducer from './restaurant'

const reducers = combineReducers({
  restaurant: restaurantReducer
})

export default reducers