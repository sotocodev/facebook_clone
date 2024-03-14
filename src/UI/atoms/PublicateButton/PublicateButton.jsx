import styles from './PublicateButton.module.css';

const PublicateButton = ({Path, customClass}) => {
  return (
    <div className={`${styles.PublicateButton} ${customClass}`}>
        <div className={styles.PublicateButtonPoint}>
            <img className={styles.PublicateButtonImg} src= {`../../src/assets/Icons/${Path}`} />
        </div>
    </div>
  )
}

export default PublicateButton;