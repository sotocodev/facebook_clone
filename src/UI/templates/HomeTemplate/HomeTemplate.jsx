import ButtonTo from '../../atoms/ButtonTo/ButtonTo';
import Heading from '../../atoms/Heading/Heading';
import styles from './HomeTemplate.module.css';
import IconProfile from "../../atoms/IconProfile/IconProfile"
import ActiveButtons from '../../atoms/ActiveButtons/ActiveButtons';
import PublicationBar from '../../Molecules/PublicationBar/PublicationBar';

const HomeTemplate = () => {
  return (
    <div className={styles.HomeTemplate}>
      <PublicationBar/>

    </div>
  )
}

export default HomeTemplate;