import Heading from '../../atoms/Heading/Heading';
import styles from './HomeTemplate.module.css';

const HomeTemplate = () => {
  return (
    <div className={styles.HomeTemplate}>
      <Heading text="HomeTemplate" customClass={styles.HomeTemplate__Red} />
      <Heading text="HomeTemplate" />

    </div>
  )
}

export default HomeTemplate;