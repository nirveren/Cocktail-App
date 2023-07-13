import { ADD_TO_FAVORITES, REMOVE_FROM_FAVORITES } from '../constants/actionTypes';
import { loadFavoritesFromLocalStorage, saveFavoritesToLocalStorage } from '../../utils/localStorage';

const initialState = {
  favorites: loadFavoritesFromLocalStorage(),
};

const favoriteReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_FAVORITES:
      const newFavorites = [...state.favorites, action.payload];
      saveFavoritesToLocalStorage(newFavorites);
      return {
        ...state,
        favorites: newFavorites
      };
    case REMOVE_FROM_FAVORITES:
      const filteredFavorites = state.favorites.filter(cocktail => cocktail.id !== action.payload);
      saveFavoritesToLocalStorage(filteredFavorites);
      return {
        ...state,
        favorites: filteredFavorites
      };
    default:
      return state;
  }
};

export default favoriteReducer;