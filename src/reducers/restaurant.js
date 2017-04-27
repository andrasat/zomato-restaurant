import {
  FETCH_RESTAURANT_SUCCESS,
  ADD_OWN_RESTAURANT,
  EDIT_OWN_RESTAURANT,
  DELETE_OWN_RESTAURANT
} from '../constants'

const addRestaurant = (state, payload) => {
  let newState = [...state, payload]
  return newState
}

const editRestaurant = (state, { name, address, thumb, featured_image }) => {
  let newState = state.map(each => {
    each.id === payload.id ?
      return { ...each, name, address, thumb, featured_image } : return each
  })
  return newState
}

const deleteRestaurant = (state, payload) => {
  let newState = state.filter(each => each.id !== payload)
}

export const restaurantReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_RESTAURANT_SUCCESS: action.payload
    case ADD_OWN_RESTAURANT: addRestaurant(state, action.payload)
    default: return state
  }
}