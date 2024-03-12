import Photo from '../../../atoms/Photo/Photo';
import styles from './CardHistory.module.css';

const CardHistory = ({ history, name, photo, customClass }) => {
    return (
        <div className={`${styles.CardHistory} ${customClass ? customClass : ''}`}>
            <img src={history} className={`${styles.ImageHistory}`} />
            <div className={`${styles.Content}`}>
                <Photo img={photo} w={'40'} />
                <p>{name}</p>
            </div>
        </div>
    )
}

export default CardHistory;
