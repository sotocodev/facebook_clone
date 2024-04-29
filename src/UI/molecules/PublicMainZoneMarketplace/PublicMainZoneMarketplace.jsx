import Heading from "../../atoms/Heading/Heading";
import LinkTo from "../../atoms/LinkTo/LinkTo";
import Img from "../../atoms/Img/Img";
import styles from "./PublicMainZoneMarketplace.module.css";

const PublicMainZoneMarketplace = () => {
  return (
    <div className={styles.Main}>
      <Heading customClass={styles.Main__Title} text="Sugerencias de hoy" />
      <Img customClass={styles.Main__Location} pathImg="/Location.svg" />
      <LinkTo
        customClass={styles.Main__Link}
        text="Juan Germán Roscio . 10km"
      />
    </div>
  );
};

export default PublicMainZoneMarketplace;
