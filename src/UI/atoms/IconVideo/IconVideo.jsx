import styles from './IconVideo.module.css';

const IconVideo = ({customClass, path}) => {
  return (
    <div className={styles.Icon__Container}>
      <img className={`${styles.Icon} ${customClass}`} src={path}  />
      </div>
  )
}

export default IconVideo