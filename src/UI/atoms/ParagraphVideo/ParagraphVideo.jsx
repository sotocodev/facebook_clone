import styles from './ParagraphVideo.module.css';

const ParagraphVideo = ({text, customClass, path}) => {
  return (
    <div className={styles.Paragraph__Div}>
      <div className={styles.Paragraph__Div_Img}>
       <img className={styles.Paragraph__Img} src={path}></img>
      </div>
      <p className={`${styles.Paragraph__Text} ${customClass}`}>{text}</p>
    </div>
  )
}

export default ParagraphVideo