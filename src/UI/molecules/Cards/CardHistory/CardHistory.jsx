import Img from '../../../atoms/Img/Img';
import Paragraph from '../../../atoms/Paragraph/Paragraph';
import styles from './CardHistory.module.css';

const CardHistory = ({ pathHistory, name, pathProfile, customClass }) => {
    return (
        <div className={`${styles.CardHistory} ${customClass}`}>
            <img src={pathHistory} className={`${styles.CardHistory__Image}`} />
            <div className={`${styles.CardHistory__Content}`}>
                <Img path={pathProfile} customClass={`${styles.CardHistory__Content_Profile}`} />
                <Paragraph customClass={`${styles.CardHistory__Content_Name}`} text={name} />
            </div>
        </div>
    )
}

export default CardHistory;
