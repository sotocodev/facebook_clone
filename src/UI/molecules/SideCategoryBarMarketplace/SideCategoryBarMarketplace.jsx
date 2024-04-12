import styles from './SideCategoryBarMarketplace.module.css';
import Img from '../../atoms/Img/Img';
import SideCategoryLogo from '../../../SideCategoryLogo.json';
import Paragraph from '../../atoms/Paragraph/Paragraph';

const SideCategoryBarMarketplace = () => {
  return (
    <>
      {SideCategoryLogo &&
        SideCategoryLogo.map(({ id, img, prompt }) => {
          return (
            <div className={styles.Category} key={id}>
              <Img path={img} customClass={styles.Category__Icon} />
              <Paragraph customClass={styles.Category__Text} text={prompt} />
            </div>
          );
        })}
    </>
  );
};

export default SideCategoryBarMarketplace;
