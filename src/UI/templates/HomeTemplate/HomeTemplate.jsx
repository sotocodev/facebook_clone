import SlidePrincipal from '../../organisms/SlidePrincipal/SlidePrincipal';
import PublicateZone from '../../organisms/Publicate/PublicateZone';
import LeftColumn from '../../molecules/LeftColumn/LeftColumn.jsx';
import styles from './HomeTemplate.module.css';


const HomeTemplate = () => {
  return (
    <div className={styles.HomeTemplate}>
      <LeftColumn />
      <SlidePrincipal />
      <PublicateZone/>
    </div>
  )
}

export default HomeTemplate;