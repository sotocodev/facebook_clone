import Heading from '../../atoms/Heading/Heading';
import Input from '../../atoms/Input/Input';
import Img from '../../atoms/Img/Img';
import styles from './SideBarTitleMarketplace.module.css';

const SideBarTitleMarketplace = () => {
  return (
    <div className={styles.Container}>
      <Img customClass={styles.Container__Gear} pathImg="/ConfigGear.svg" />
      <Heading text="Marketplace" customClass={styles.Container__Title} />
      <Img customClass={styles.Container__Loupe} pathImg="/Loupe.svg" />
      <Input
        placeholder="Buscar en Marketplace"
        customClass={styles.Container__Input}
      />
    </div>
  );
};

export default SideBarTitleMarketplace;
