import Paragraph from '../../atoms/Paragraph/Paragraph';
import Img from '../../atoms/Img/Img';
import LinkTo from '../../atoms/LinkTo/LinkTo'
import MarketplaceApi from '../../../MarketplaceApi.json';
import styles from './SideMainBarMarketplace.module.css';

const SideMainBarMarketplace = () => {
  return (
    <>
      {MarketplaceApi &&
        MarketplaceApi.filter(sidelogo => sidelogo.id).slice(0, 5).map(({ id, logo, prompt }) => {
          return (
            <div className={styles.Box} key={id}>
              <Img customClass={styles.Box__Logo} path={logo} />
              <Paragraph customClass={styles.Box__Text} text={prompt} />
            </div>
          );
        })}
      <div className={styles.Publication}>
        <LinkTo
          customClass={styles.Publication__Link}
          text="+ Crear publicación"
        />
      </div>
    </>
  );
};

export default SideMainBarMarketplace;
