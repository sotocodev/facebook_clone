import styles from './PublicateButton.module.css';

const PublicateButton = ({path, customClass}) => {
  return (
    <div className={`${styles.PublicateButton} ${customClass}`}>
        <div className={styles.PublicateButton__Div}>
            <img className={styles.PublicateButton__Div_Img} src={`../../src/assets/Icons/${path}`} />
        </div>
    </div>
  )
}

export default PublicateButton;