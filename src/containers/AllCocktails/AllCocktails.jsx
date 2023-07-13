import React, { useState, useEffect } from "react";
import axios from "axios";
import Cocktail from "../../components/Cocktail/Cocktail";
import styles from './AllCocktails.module.css';

const CocktailList = () => {
  const [cocktails, setCocktails] = useState([]);
  const [currentPage, setCurrentPage] = useState("a");

  useEffect(() => {
    fetchCocktails();
  }, [currentPage]);

  const fetchCocktails = async () => {
    try {
      const response = await axios.get(
        `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${currentPage}`
      );
      const data = response.data.drinks || [];
      setCocktails(data);
    } catch (error) {
      console.error("Error fetching cocktails:", error);
    }
  };

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const alphabet = Array.from({ length: 26 }, (_, i) => String.fromCharCode(97 + i));

  return (
    <div className={styles.container}>
      <h1 className="title">Cocktail List (A to Z)</h1>
      <div>
        {alphabet.map((letter) => (
          <button className={styles.button} key={letter} onClick={() => handlePageChange(letter)} disabled={currentPage === letter}>
            {letter.toUpperCase()}
          </button>
        ))}
      </div>
      <div className="cocktails__list">
        {cocktails.map((cocktail) => (
          <Cocktail key={cocktail.idDrink} cocktail={cocktail} />
        ))}
      </div>
    </div>
  );
};

export default CocktailList;
