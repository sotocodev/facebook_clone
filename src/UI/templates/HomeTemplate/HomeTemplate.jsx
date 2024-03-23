import SlidePrincipal from '../../organisms/SlidePrincipal/SlidePrincipal';
import PublicateZone from '../../organisms/Publicate/PublicateZone';
import HomeColunmLef from "../HomeColumLef/HomeColumLef"
import styles from './HomeTemplate.module.css';

const HomeTemplate = () => {
  return (
    <div className={styles.HomeTemplate}>
    <div className={styles.HomeTemplate__ParteCentral}>
      <SlidePrincipal />
      <PublicateZone/>
      
    </div>
    <div className={styles.HomeColunmLef}>
    <HomeColunmLef/>
    </div>
    </div>

  )
}

export default HomeTemplate;