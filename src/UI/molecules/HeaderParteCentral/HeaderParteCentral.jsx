import Paragraph from "../../atoms/Paragraph/Paragraph";
import ButtomColumnRight from "../../atoms/ButtonColumnRight/ButtonColumnRight";
import styles from "./HeaderParteCentral.module.css";

const HeaderParteCentral = () => {
  return (
    <div className={styles.HeaderParteCentral}>
      <div className={styles.HeaderParteCentral__Section}>
        <ButtomColumnRight
          path="/Home.svg"
          customClass={styles.HeaderParteCentral__ButtomColumnRight}
          customClassImg={styles.HeaderParteCentral__Img}
        />
        <Paragraph text="Inicio" customClass={styles.Section__Name} />
      </div>
      <div className={styles.HeaderParteCentral__Section}>
        <ButtomColumnRight
          path="/contactos.svg"
          customClass={styles.HeaderParteCentral__ButtomColumnRight}
          customClassImg={styles.HeaderParteCentral__Img}
        />
        <Paragraph text="Amigos" customClass={styles.Section__Name} />
      </div>
      <div className={styles.HeaderParteCentral__Section}>
        <ButtomColumnRight
          path="/Video.svg"
          customClass={styles.HeaderParteCentral__ButtomColumnRight}
          customClassImg={styles.HeaderParteCentral__Img}
        />
        <Paragraph text="Video" customClass={styles.Section__Name} />
      </div>
      <div className={styles.HeaderParteCentral__Section}>
        <ButtomColumnRight
          path="/people.svg"
          customClass={styles.HeaderParteCentral__ButtomColumnRight}
          customClassImg={styles.HeaderParteCentral__Img}
        />
        <Paragraph text="Grupos" customClass={styles.Section__Name} />
      </div>
      <div className={styles.HeaderParteCentral__Section}>
        <ButtomColumnRight
          path="/Game.svg"
          customClass={styles.HeaderParteCentral__ButtomColumnRight}
          customClassImg={styles.HeaderParteCentral__Img}
        />
        <Paragraph text="Videojuego" customClass={styles.Section__Name} />
      </div>
    </div>
  );
};

export default HeaderParteCentral;
