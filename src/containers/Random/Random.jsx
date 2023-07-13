import React, { useState, useEffect } from "react";
import axios from "axios";
import Cocktail from "../../components/Cocktail/Cocktail";
import styles from './Random.module.css'

const Random = () => {
  const [cocktail, setCocktail] = useState(null);

  useEffect(() => {
    fetchRandomCocktail();
  }, []);

  const fetchRandomCocktail = async () => {
    try {
      const response = await axios.get(
        "https://www.thecocktaildb.com/api/json/v1/1/random.php"
      );
      const data = response.data.drinks[0];
      setCocktail(data);
    } catch (error) {
      console.error("Error fetching random cocktail:", error);
    }
  };

  return (
    <div className={styles.container}>
      <button className={styles.button} onClick={fetchRandomCocktail}>Get Random Cocktail</button>
      {cocktail && <Cocktail cocktail={cocktail} />}
    </div>
  );
};

export default Random;
