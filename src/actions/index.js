import secret from '../config'
import {
  FETCH_RESTAURANT_SUCCESS,
  ADD_OWN_RESTAURANT,
  EDIT_OWN_RESTAURANT,
  DELETE_OWN_RESTAURANT
} from '../constants'

export const fetchRecipeSuccess = data => ({
  type: FETCH_RESTAURANT_SUCCESS,
  payload: data
})

export const addRestaurant = () => ({
  type: ADD_OWN_RECIPES
})

export const fetchRecipes = keyword => {
  return dispatch => {
    let zomatoHead = new Headers({
      'user-key': secret.ZOMATO_API
    })
    fetch(`https://developers.zomato.com/api/v2.1/search?entity_id=74&entity_type=city&q=${keyword}`, {
      headers: zomatoHead
    })
      .then(res=> return res.json())
      .then(data=> dispatch(fetchRecipeSuccess(data.restaurants)))
  }
}