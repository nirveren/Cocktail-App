import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer';
import { saveFavoritesToLocalStorage } from '../utils/localStorage';

const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(thunk)
  )
);

store.subscribe(() => {
  const favorites = store.getState().favoriteReducer.favorites;
  saveFavoritesToLocalStorage(favorites);
});

export default store;