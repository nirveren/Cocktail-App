import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToFavorites, removeFromFavorites } from "../../store/actions/actions";
import styles from "./CocktailDetailsItem.module.css";
import imgYellow from "./img/favorite.svg";
import imgFill from "./img/favorite-fill.svg"

const CocktailDetailsItem = ({ cocktail }) => {
  const favorites = useSelector((state) => state.favoriteReducer.favorites);
  const dispatch = useDispatch();
  const isFavorite = favorites.some((item) => item && item.id === cocktail.idDrink);

  const handleToggleFavorite = () => {
    if (isFavorite) {
      dispatch(removeFromFavorites(cocktail.idDrink));
    } else {
      const newCocktail = { ...cocktail, id: cocktail.idDrink }; // Добавьте идентификатор коктейля
      dispatch(addToFavorites(newCocktail));
    }
  };

  return (
    <div className={styles.ingredient}>
      <h2 className={styles.cocktail__subtitle}>Ingredients:</h2>
      <ul className={styles.cocktail__ingredients}>
        {cocktail.strIngredient1 && (
          <li>
            {cocktail.strIngredient1} - {cocktail.strMeasure1}
          </li>
        )}
        {cocktail.strIngredient2 && (
          <li>
            {cocktail.strIngredient2} - {cocktail.strMeasure2}
          </li>
        )}
        {cocktail.strIngredient3 && (
          <li>
            {cocktail.strIngredient3} - {cocktail.strMeasure3}
          </li>
        )}
        {cocktail.strIngredient4 && (
          <li>
            {cocktail.strIngredient4} - {cocktail.strMeasure4}
          </li>
        )}
        {cocktail.strIngredient5 && (
          <li>
            {cocktail.strIngredient5} - {cocktail.strMeasure5}
          </li>
        )}
      </ul>
      <h2 className={styles.cocktail__subtitle}>Instructions:</h2>
      <p className={styles.cocktail__instructions}>{cocktail.strInstructions}</p>
      <img
        className={styles.favorite}
        src={isFavorite ? imgFill : imgYellow}
        onClick={handleToggleFavorite}
        alt="Add"
      />
    </div>
  );
};

export default CocktailDetailsItem;
