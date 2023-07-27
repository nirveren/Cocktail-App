import React from 'react';
import styles from './Favorites.module.css'
import { useSelector } from 'react-redux';
import Cocktail from '../../components/Cocktail/Cocktail';

const Favorites = () => {
  const favorites = useSelector(state => state.favoriteReducer.favorites);

  return (
    <>
      <h1 className="title">Favorites</h1>
      <div className="cocktails__list">
      {favorites.length === 0 ? (
        <p className={styles.sub__title}>No favorite cocktails found.</p>
      ) : (
        favorites.map(cocktail => {
          return <Cocktail key={cocktail.idDrink} cocktail={cocktail} />;
        })
        
      )}
      </div>
    </>
  );
};

export default Favorites;