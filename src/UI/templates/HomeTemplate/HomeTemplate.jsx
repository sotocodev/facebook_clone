import SlidePrincipal from '../../organisms/SlidePrincipal/SlidePrincipal';
import PublicateZone from '../../organisms/Publicate/PublicateZone';
import styles from './HomeTemplate.module.css';

const HomeTemplate = () => {
  return (
    <div className={styles.HomeTemplate}>
      <SlidePrincipal />
      <PublicateZone/>
    </div>
  )
}

export default HomeTemplate;