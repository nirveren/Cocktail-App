import { useNavigate } from 'react-router-dom';
import iconBack from './img/goBack.svg';

import styles from './LinkBack.module.css';

const PersonLinkBack = () => {
    const navigate = useNavigate();

    const handleGoBack = e => {
        e.preventDefault();
        navigate(-1);
    }

    return (
        <a
            href="#"
            onClick={handleGoBack}
            className={styles.link}
        >
            <img className={styles.link__img} src={iconBack} alt="Go back" />
            <span>Go back</span>
        </a>
    )
}

export default PersonLinkBack;