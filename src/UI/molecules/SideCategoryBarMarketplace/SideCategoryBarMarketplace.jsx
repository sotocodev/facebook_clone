import Img from '../../atoms/Img/Img';
import MarketplaceApi from '../../../MarketplaceApi.json';
import Paragraph from '../../atoms/Paragraph/Paragraph';
import styles from './SideCategoryBarMarketplace.module.css';

const SideCategoryBarMarketplace = () => {
  return (
    <>
      {MarketplaceApi &&
        MarketplaceApi.filter((category) => category.id)
          .slice(5, 24)
          .map(({ id, categorylogo, categoryprompt }) => {
            return (
              <div className={styles.Category} key={id}>
                <Img
                  pathImg={categorylogo}
                  customClass={styles.Category__Icon}
                />
                <Paragraph
                  customClass={styles.Category__Text}
                  text={categoryprompt}
                />
              </div>
            );
          })}
    </>
  );
};

export default SideCategoryBarMarketplace;
