import { combineReducers } from 'redux'
import recipeReducer from './recipe'
import searchReducer from './search'

const reducers = combineReducers({
  recipes: recipeReducer,
  keyword: searchReducer
})

export default reducers