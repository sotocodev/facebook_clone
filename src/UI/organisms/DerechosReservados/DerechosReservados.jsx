import Paragraph from '../../atoms/Paragraph/Paragraph';
import styles from './DerechosReservados.module.css';
const DerechosReservados = () => {
  return (
    <div className={styles.DerechosReservados}>
      <Paragraph
        text="Privacidad"
        customClass={styles.DerechosReservados__ParagraphOn}
      />
      <Paragraph
        text="·"
        customClass={styles.DerechosReservados__ParagraphOff}
      />
      <Paragraph
        text="Condiciones"
        customClass={styles.DerechosReservados__ParagraphOn}
      />
      <Paragraph
        text="·"
        customClass={styles.DerechosReservados__ParagraphOff}
      />
      <Paragraph
        text="Publicidad"
        customClass={styles.DerechosReservados__ParagraphOn}
      />
      <Paragraph
        text="·"
        customClass={styles.DerechosReservados__ParagraphOff}
      />
      <Paragraph
        text="Opciones de anuncios"
        customClass={styles.DerechosReservados__ParagraphOn}
      />
      <Paragraph
        text="·"
        customClass={styles.DerechosReservados__ParagraphOff}
      />
      <Paragraph
        text="Cookies"
        customClass={styles.DerechosReservados__ParagraphOn}
      />
      <Paragraph
        text="·"
        customClass={styles.DerechosReservados__ParagraphOff}
      />
      <Paragraph
        text="Mas"
        customClass={styles.DerechosReservados__ParagraphOn}
      />
      <Paragraph
        text="·"
        customClass={styles.DerechosReservados__ParagraphOff}
      />
      <Paragraph
        text="Meta © 2024"
        customClass={styles.DerechosReservados__Paragraph}
      />
    </div>
  );
};

export default DerechosReservados;
