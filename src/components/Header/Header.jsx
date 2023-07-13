import img from './img/cocktail.svg';
import styles from './Header.module.css';
import {Link} from 'react-router-dom';

const Header = () => {
  return(
    
    <div className={styles.container}>
            <img className={styles.logo} src={img} alt="Cocktails"/>
            <ul className={styles.list__container}>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/allcocktails">All Cocktails</Link></li>
                <li><Link to="/random">Random</Link></li>
                <li><Link to="/favorites">Favorites</Link></li>
            </ul>
        </div>
     
  )
}


export default Header;