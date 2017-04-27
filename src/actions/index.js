import axios from 'axios';
import secret from '../config';
import {
  FETCH_RESTAURANT_SUCCESS,
  ADD_OWN_RESTAURANT,
  EDIT_OWN_RESTAURANT,
  DELETE_OWN_RESTAURANT,
} from '../constants';

export const fetchRestaurantsSuccess = data => ({
  type: FETCH_RESTAURANT_SUCCESS,
  payload: data,
});

export const addRestaurant = data => ({
  type: ADD_OWN_RESTAURANT,
  payload: data,
});

export const deleteRestaurant = id => ({
  type: DELETE_OWN_RESTAURANT,
  payload: id,
});

export const editRestaurant = data => ({
  type: EDIT_OWN_RESTAURANT,
  payload: data,
});

export const fetchRestaurants = keyword => (
  (dispatch) => {
    axios.get(`https://developers.zomato.com/api/v2.1/search?entity_id=74&entity_type=city&q=${keyword}`, {
      headers: { 'user-key': secret.ZOMATO_API },
    }).then(res => dispatch(fetchRestaurantsSuccess(res.data.restaurants)));
  }
);
