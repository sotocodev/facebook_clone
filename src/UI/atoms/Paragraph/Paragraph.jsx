import styles from './Paragraph.module.css';

const Paragraph = ({text, customClass, path}) => {
  return path ? (
    <div className={styles.Paragraph__Div}>
    <div className={styles.Paragraph__Div_Img}>
     <img className={styles.Paragraph__Img} src={path}></img>
    </div>
    <p className={`${styles.Paragraph__Text} ${customClass}`}>{text}</p>
  </div>
  ) : (
    <p className={`${styles.Paragraph} ${customClass}`}>{text}</p>
)
}

export default Paragraph;