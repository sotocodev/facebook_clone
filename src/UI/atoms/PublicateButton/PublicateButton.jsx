import styles from './PublicateButton.module.css';

const PublicateButton = ({path, customClass}) => {
  return (
    <div className={`${styles.PublicateButton} ${customClass}`}>
        <div className={styles.PublicateButtonPoint}>
            <img className={styles.PublicateButtonImg} src= {`../../src/assets/Icons/${path}`} />
        </div>
    </div>
  )
}

export default PublicateButton;