import React from "react";
import styles from './Cocktail.module.css';
import {Link} from 'react-router-dom'

const Cocktail = ({cocktail, alcohol}) => {
  const { strDrink, strDrinkThumb, idDrink} = cocktail;

  return (
    <Link to={`/cocktails/${alcohol}/${idDrink}`}>
      <div className={styles.cocktail__container}>
        <img className={styles.cocktail__img} src={strDrinkThumb} alt={strDrink} />
        <h3 className={styles.cocktail__title}>{strDrink}</h3>
      </div>
    </Link>

  );
}

export default Cocktail;