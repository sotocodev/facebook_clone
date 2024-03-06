import styles from './Paragraph.module.css';

const Paragraph = ({text, customClass}) => {
  return (
    <p className={`${styles.Paragraph} ${customClass}`}>{text}</p>
  )
}

export default Paragraph;