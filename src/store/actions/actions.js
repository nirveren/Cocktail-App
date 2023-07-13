import { ADD_TO_FAVORITES, REMOVE_FROM_FAVORITES } from '../constants/actionTypes';

export const addToFavorites = (cocktail) => ({
  type: ADD_TO_FAVORITES,
  payload: cocktail,
});

export const removeFromFavorites = (cocktailId) => ({
  type: REMOVE_FROM_FAVORITES,
  payload: cocktailId,
});
