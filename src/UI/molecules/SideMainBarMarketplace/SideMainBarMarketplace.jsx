import styles from './SideMainBarMarketplace.module.css';
import Paragraph from '../../atoms/Paragraph/Paragraph';
import Img from '../../atoms/Img/Img';
import LinkTo from '../../atoms/LinkTo/LinkTo'
import SideLogo from '../../../SideLogo.json';

const SideMainBarMarketplace = () => {
  return (
    <>
      {SideLogo &&
        SideLogo.map((sidelogo) => {
          const { id, img, prompt } = sidelogo; 
          return (
            <div className={styles.Box} key={id}>
              <Img customClass={styles.Box__Logo} path={img} />
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
