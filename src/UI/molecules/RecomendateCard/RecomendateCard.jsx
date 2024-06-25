import Heading from '../../atoms/Heading/Heading';
import Img from '../../atoms/Img/Img';
import Nickname from '../../atoms/Nickname/Nickname';
import styles from './RecomendateCard.module.css';

function RecomendateCard({
  customClassBox,
  customClassRecTwo,
  customClassRecOne,
  customClassSugBox,
}) {
  return (
    <div className={`${styles.RecomendateCard} ${customClassBox}`}>
      <Heading
        customClass={styles.RecomendateCard__Heading}
        text="Nuevos videos para ti"
      />
      <div
        className={`${styles.RecomendateCard__SugerenteBox} ${customClassSugBox}`}
      >
        <div
          className={`${styles.RecomendateCard__RecomendateOne} ${customClassRecOne}`}
        >
          <Img
            customClass={styles.RecomendateCard__Img}
            pathImg="/profile.jpg"
          />
          <Nickname
            customClassSp={styles.RecomendateCard__Span}
            customClass={styles.RecomendateCard__Information}
            nickname="Nuevos videos de Jesus soto disponibles"
            time="Hace 1 hora"
          />
        </div>
        <div
          className={`${styles.RecomendateCard__RecomendateOne} ${customClassRecTwo}`}
        >
          <Img
            customClass={styles.RecomendateCard__Img}
            pathImg="/Gokupelon.jpeg"
          />
          <Nickname
            customClassSp={styles.RecomendateCard__Span}
            customClass={styles.RecomendateCard__Information}
            nickname="Nuevos videos de Juan Laya disponibles"
            time="Hace 1 hora"
          />
        </div>
      </div>
    </div>
  );
}

export default RecomendateCard;
