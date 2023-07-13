
import React from "react";
import { Link } from "react-router-dom";
import styles from './HomePage.module.css';
import gin from './img/gin.jpeg';
import teq from './img/teq.jpeg';
import vodka from './img/vodka.jpeg';
import rum from './img/rum.jpeg';

function HomePage() {
  return (
    <div>
      <h1 className="title">Alcohol Types</h1>
      <div className={styles.alcohol__container}>
        <Link to="/cocktails/vodka" className={styles.alcohol__button}>
          <img className={styles.alko} src={vodka} alt="" />
          <p className={styles.alco__title}>Vodka</p> 
        </Link>
        <Link to="/cocktails/rum" className={styles.alcohol__button}>
          <img className={styles.alko} src={rum} alt="" />
          <p className={styles.alco__title}>Rum</p>
        </Link>
        <Link to="/cocktails/tequila" className={styles.alcohol__button}>
          <img className={styles.alko} src={teq} alt="" />
          <p className={styles.alco__title}>Tequila</p>
        </Link>
        <Link to="/cocktails/gin" className={styles.alcohol__button}>
          <img className={styles.alko} src={gin} alt="" />
          <p className={styles.alco__title}>Gin</p>
        </Link>
      </div>
    </div>
  );
}

export default HomePage;

