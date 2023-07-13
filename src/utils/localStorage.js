export const loadFavoritesFromLocalStorage = () => {
    try {
      const favorites = localStorage.getItem('favorites');
      if (favorites) {
        return JSON.parse(favorites);
      }
    } catch (error) {
      console.error('Error loading favorites from local storage:', error);
    }
    return [];
  };
  
  export const saveFavoritesToLocalStorage = (favorites) => {
    try {
      localStorage.setItem('favorites', JSON.stringify(favorites));
    } catch (error) {
      console.error('Error saving favorites to local storage:', error);
    }
  };