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
      </div>
      <div className={styles.HeaderParteCentral__Section}>
        <ButtomColumnRight
          path="/video.svg"
          customClass={styles.HeaderParteCentral__ButtomColumnRight}
          customClassImg={styles.HeaderParteCentral__Img}
        />
        <Paragraph text="Video" customClass={styles.Section__Name} />
      </div>
      <div className={styles.HeaderParteCentral__Section}>
        <ButtomColumnRight
          path="/HomeHeaderMarketplace.svg"
          customClass={styles.HeaderParteCentral__ButtomColumnRight}
          customClassImg={styles.HeaderParteCentral__Img}
        />
        <Paragraph text="Marketplace" customClass={styles.Section__Name} />
      </div>
      <div className={styles.HeaderParteCentral__Section}>
        <ButtomColumnRight
          path="/Game.svg"
          customClass={styles.HeaderParteCentral__ButtomColumnRight}
          customClassImg={styles.HeaderParteCentral__Img}
        />
        <Paragraph text="Juegos" customClass={styles.Section__Name} />
      </div>
    </div>
  );
};

export default HeaderParteCentral;
