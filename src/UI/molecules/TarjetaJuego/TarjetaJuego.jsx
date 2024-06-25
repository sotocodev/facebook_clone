import Title from '../../atoms/Title/Title';
import Paragraph from '../../atoms/Paragraph/Paragraph';
import styles from './TarjetaJuego.module.css';

const TarjetaJuego = ({ text, CardsCustomClass }) => {
  return (
    <>
      <div className={`${CardsCustomClass} ${styles.Cards__Div_Img}`}>
        <div className={styles.Cards__Body}>
          <Title customClass={styles.Body__Titulo} text={text} />
          <div className={styles.Cards__footer}>
            <Paragraph
              customClass={styles.footer__Text}
              text="1,5mill. jugadoes"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default TarjetaJuego;
