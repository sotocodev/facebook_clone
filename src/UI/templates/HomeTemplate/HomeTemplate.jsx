import Heading from '../../atoms/Heading/Heading';
import SlidePrincipal from '../../Organims/SlidePrincipal/SlidePrincipal';
import PublicateZone from '../../Organims/Publicate/PublicateZone';
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