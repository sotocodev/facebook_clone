import SlidePrincipal from '../../organims/SlidePrincipal/SlidePrincipal';
import PublicateZone from '../../organims/Publicate/PublicateZone';
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