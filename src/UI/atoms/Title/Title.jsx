import styles from './Title.module.css';

const Title = ({text, customClass}) => {
  return (
    <h2 className={`${styles.Title} ${customClass}`}>{text}</h2>
  )
}

export default Title;