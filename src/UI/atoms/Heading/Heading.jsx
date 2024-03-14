import styles from './Heading.module.css';

const Heading = ({text, customClass}) => {
  return <h1 className={`${styles.Heading} ${customClass}`}>{text}</h1>
}

export default Heading;