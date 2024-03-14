import styles from './Img.module.css';

const Img = ({customClass, path}) => {
  return <img className={`${styles.Img} ${customClass}`} src={path} />
}

export default Img;