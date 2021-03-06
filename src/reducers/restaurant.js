import {
  FETCH_RESTAURANT_SUCCESS,
  ADD_OWN_RESTAURANT,
  EDIT_OWN_RESTAURANT,
  DELETE_OWN_RESTAURANT,
} from '../constants';

const addRestaurant = (state, payload) => {
  const newState = [...state, payload];
  return newState;
};

const editRestaurant = (state, payload) => {
  const newState = state.map((each) => {
    if (each.id === payload.id) {
      return { ...each, payload };
    }
    return each;
  });
  return newState;
};

const deleteRestaurant = (state, id) => {
  const newState = state.filter(each => each.id !== id);
  return newState;
};

const restaurantReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_RESTAURANT_SUCCESS: return action.payload;
    case ADD_OWN_RESTAURANT: return addRestaurant(state, action.payload);
    case EDIT_OWN_RESTAURANT: return editRestaurant(state, action.payload);
    case DELETE_OWN_RESTAURANT: return deleteRestaurant(state, action.payload);
    default: return state;
  }
};

export default restaurantReducer;
