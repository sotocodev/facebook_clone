import styles from './Title.module.css';

const Img = ({text, customClass, href}) => {
  return <img className={`${styles.Img} ${customClass}`} src={href} />
}

export default Img;