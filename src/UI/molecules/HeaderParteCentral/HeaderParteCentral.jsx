import { NavLink } from 'react-router-dom';
import Paragraph from '../../atoms/Paragraph/Paragraph';
import ButtomColumnRight from '../../atoms/ButtonColumnRight/ButtonColumnRight';
import styles from './HeaderParteCentral.module.css';

const HeaderParteCentral = () => {
  return (
    <div className={styles.HeaderParteCentral}>
      <div className={styles.HeaderParteCentral__Section}>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? styles.active : styles.inactive
          }
        >
          <ButtomColumnRight
            path="/Home.svg"
            customClass={styles.HeaderParteCentral__ButtomColumnRight}
            customClassImg={styles.HeaderParteCentral__Img}
          />
        </NavLink>
        <Paragraph text="Inicio" customClass={styles.Section__Name} />
      </div>
      <div className={styles.HeaderParteCentral__Section}>
        <NavLink
          to="/videopage"
          className={({ isActive }) =>
            isActive ? styles.active : styles.inactive
          }
        >
          <ButtomColumnRight
            path="/video.svg"
            customClass={styles.HeaderParteCentral__ButtomColumnRight}
            customClassImg={styles.HeaderParteCentral__Img}
          />
        </NavLink>
        <Paragraph text="Video" customClass={styles.Section__Name} />
      </div>
      <div className={styles.HeaderParteCentral__Section}>
        <NavLink
          to="/marketplace"
          className={({ isActive }) =>
            isActive ? styles.active : styles.inactive
          }
        >
          <ButtomColumnRight
            path="/HomeHeaderMarketplace.svg"
            customClass={styles.HeaderParteCentral__ButtomColumnRight}
            customClassImg={styles.HeaderParteCentral__Img}
          />
        </NavLink>
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
