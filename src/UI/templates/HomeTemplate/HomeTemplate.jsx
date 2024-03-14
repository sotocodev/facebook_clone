import styles from './HomeTemplate.module.css';
import PublicateZone from '../../Organims/Publicate/PublicateZone';

const HomeTemplate = () => {
  return (
    <div className={styles.HomeTemplate}>
     <PublicateZone/>
    </div>
  )
}

export default HomeTemplate;