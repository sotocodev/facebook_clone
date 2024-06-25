import Heading from '../../atoms/Heading/Heading';
import LinkTo from '../../atoms/LinkTo/LinkTo';
import styles from './SideFilterBarMarketplace.module.css';

const SideFilterBarMarketplace = () => {
  return (
    <div className={styles.Filters}>
      <Heading customClass={styles.Filters__Heading} text="Filtros" />
      <LinkTo
        customClass={styles.Filters__Link}
        text="San Juan de los Morros . En un radio de 10 kilómetros"
      />
    </div>
  );
};

export default SideFilterBarMarketplace;
