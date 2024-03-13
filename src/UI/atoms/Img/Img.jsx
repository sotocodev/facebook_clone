import styles from './Img.module.css';

const Img = ({ customClass, href}) => {
  return <img className={` ${styles.Img} ${customClass}`} src={href} />
}

export default Img;