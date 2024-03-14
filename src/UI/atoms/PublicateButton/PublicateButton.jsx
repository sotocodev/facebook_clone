import styles from './PublicateButton.module.css';
import Img from '../Img/Img';

const PublicateButton = ({path, customClass}) => {
  return (
    <div className={`${styles.PublicateButton} ${customClass}`}>
        <div className={styles.PublicateButton__Div}>
            <Img customClass={styles.PublicateButton__DivImg} path={path}/>
        </div>
    </div>
  )
}

export default PublicateButton;