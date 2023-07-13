
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Cocktail from '../Cocktail/Cocktail';
import styles from './CocktailList.module.css';

const CocktailList = () => {
  const { alcohol } = useParams();
  const [cocktails, setCocktails] = useState([]);

  useEffect(() => {
    fetchCocktails();
  }, [alcohol]);

  const fetchCocktails = async () => {
    try {
      const response = await axios.get(
        `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${alcohol}`
      );
      const data = response.data.drinks;
      setCocktails(data);
    } catch (error) {
      console.error(`Error fetching ${alcohol} cocktails:`, error);
    }
  };

  return (
    <>
      <h1 className={styles.list__title}>{alcohol.charAt(0).toUpperCase() + alcohol.slice(1)} Cocktails</h1>
        <div className="cocktails__list">
        {cocktails.map((cocktail) => (
          
            <Cocktail cocktail={cocktail} alcohol={alcohol}/>
      
          ))}
        </div>
      
    </>
  );
};

export default CocktailList;

