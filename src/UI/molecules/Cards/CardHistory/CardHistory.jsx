import Img from '../../../atoms/Img/Img';
import styles from './CardHistory.module.css';

const CardHistory = ({ pathHistory, name, pathProfile, customClass }) => {
    return (
        <div className={`${styles.CardHistory} ${customClass ? customClass : ''}`}>
            <img src={pathHistory} className={`${styles.ImageHistory}`} />
            <div className={`${styles.Content}`}>
                <Img path={pathProfile} customClass={`${styles.ImgProfile}`} />
                <p>{name}</p>
            </div>
        </div>
    )
}

export default CardHistory;
