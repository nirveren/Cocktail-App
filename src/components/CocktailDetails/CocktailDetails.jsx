import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import CocktailDetailsItem from "../CocktailDetailsItem/CocktailDetailsItem";
import styles from "./CocktailDetails.module.css";
import LinkBack from "../LinkBack/LinkBack";

const CocktailDetails = () => {
  const { id } = useParams();
  const [cocktail, setCocktail] = useState(null);

  useEffect(() => {
    fetchCocktail();
  }, [id]);

  const fetchCocktail = async () => {
    try {
      const response = await axios.get(
        `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
      );
      const data = response.data.drinks[0];

      setCocktail(data);
    } catch (error) {
      console.error("Error fetching cocktail details:", error);
    }
  };

  if (!cocktail) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <h1 className={styles.cocktail__title}>{cocktail.strDrink}</h1>
      <LinkBack/>
      <div className={styles.cocktail__container}>
        <img
          className={styles.cocktail__image}
          src={cocktail.strDrinkThumb}
          alt={cocktail.strDrink}
        />
        <CocktailDetailsItem cocktail={cocktail} />
      </div>
    </>
  );
};

export default CocktailDetails;
