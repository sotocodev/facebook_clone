import Paragraph from '../../atoms/Paragraph/Paragraph';
import ButtonColumnRight from '../../atoms/ButtonColumnRight/ButtonColumnRight';
import styles from './HeaderOpUsuario.module.css';
const HeaderOpUsuario = () => {
  return (
    <div className={styles.HeaderOpUsuario}>
      <div className={styles.HeaderOpUsuario__section}>
        <ButtonColumnRight
          customClass={styles.HeaderOpUsuario__ButtonColumnRight}
          customClassImg={styles.HeaderOpUsuario__Img}
          path="/MenuHeaderOp.svg"
        />
        <Paragraph text="Menu" customClass={styles.section__name} />
      </div>
      <div className={styles.HeaderOpUsuario__section}>
        <ButtonColumnRight
          customClass={styles.HeaderOpUsuario__ButtonColumnRight}
          customClassImg={styles.HeaderOpUsuario__Img}
          path="/Messenger.svg"
        />
        <Paragraph text="Messenger" customClass={styles.section__name} />
      </div>
      <div className={styles.HeaderOpUsuario__section}>
        <ButtonColumnRight
          customClass={styles.HeaderOpUsuario__ButtonColumnRight}
          customClassImg={styles.HeaderOpUsuario__Img}
          path="/bullhorn.svg"
        />
        <Paragraph text="Notificaciones" customClass={styles.section__name} />
      </div>
      <div className={styles.HeaderOpUsuario__section}>
        <ButtonColumnRight
          customClass={styles.HeaderOpUsuario__ButtonColumnRight}
          customClassImg={styles.HeaderOpUsuario__Img}
          path="/User.svg"
        />
        <Paragraph text="Cuenta" customClass={styles.section__name} />
      </div>
    </div>
  );
};
export default HeaderOpUsuario;
