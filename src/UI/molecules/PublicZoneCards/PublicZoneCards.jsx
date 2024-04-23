import Img from "../../atoms/Img/Img";
import Paragraph from "../../atoms/Paragraph/Paragraph";
import Heading from "../../atoms/Heading/Heading";
import MarketplaceApi from "../../../MarketplaceApi.json";
import styles from "./PublicZoneCards.module.css";

const PublicZoneCards = () => {
  return (
    <div className={styles.Card}>
      {MarketplaceApi &&
        MarketplaceApi.filter((card) => card.id)
          .slice(24, 33)
          .map(({ id, title, subtitle, paragraph, img }) => {
            return (
              <div key={id}>
                <Img customClass={styles.Card__Img} path={img} />
                <Heading customClass={styles.Card__Title} text={subtitle} />
                <Heading
                  customClass={`${styles.Card__Title} ${styles.Subtitle}`}
                  text={title}
                />
                <Paragraph customClass={styles.Card__Text} text={paragraph} />
              </div>
            );
          })}
    </div>
  );
};

export default PublicZoneCards;
