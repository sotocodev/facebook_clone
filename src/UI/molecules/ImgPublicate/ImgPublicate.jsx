import Paragraph from '../../atoms/Paragraph/Paragraph'
import Img from '../../atoms/Img/Img'
import styles from "./ImgPublicate.module.css"

function ImgPublicate({customClass,text, pathImg,pathVideo}) {
  return (
    <div className={`${styles.ImgPublicate} ${customClass}`}>
     <Paragraph customClass={styles.ImgPublicate__Paragraph} text={text}/>
     <Img  pathImg={pathImg} pathVideo={pathVideo} customClass={styles.ImgPublicate__Img}/>
    </div>
  )
}

export default ImgPublicate
