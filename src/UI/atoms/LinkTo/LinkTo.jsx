import { Link } from 'react-router-dom';
import styles from './LinkTo.module.css';


const LinkTo = ({path, callback, text, customClass}) => {
  return <Link className={`${styles.LinkTo} ${customClass}`} onClick={callback} to={path}>
    {text}
  </Link>
}

export default LinkTo;