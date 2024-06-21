import SlidePrincipal from '../../organisms/SlidePrincipal/SlidePrincipal';
import PublicateZone from '../../organisms/Publicate/PublicateZone';
import ZonaJuegos from '../../organisms/ZonaJuegos/ZonaJuegos';
import LeftGameMain from '../../molecules/LeftGameMain/LeftGameMain';
import styles from './HomeTemplate.module.css';

const HomeTemplate = () => {
  return (
    <div className={styles.HomeTemplate}>
      <ZonaJuegos/>
     
    </div>
  );
};

export default HomeTemplate;
