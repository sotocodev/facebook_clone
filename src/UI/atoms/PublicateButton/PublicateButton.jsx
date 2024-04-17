import styles from './PublicateButton.module.css';

const PublicateButton = ({path, customClass,customClassIcon,refT}) => {
  return (
    <div ref={refT} className={`${styles.PublicateButton} ${customClass}`}>
        <div className={styles.PublicateButton__Div}>
            <img className={`${styles.PublicateButton__DivImg} ${customClassIcon}`} src={path}/>
        </div>
    </div>
  )
}

export default PublicateButton;