import Paragraph from '../../atoms/Paragraph/Paragraph'
import Img from '../../atoms/Img/Img'
import styles from "./ImgPublicate.module.css"

function ImgPublicate({customClass, path}) {
  return (
    <div className={`${styles.ImgPublicate} ${customClass}`}>
     <Paragraph customClass={styles.ImgPublicate__Paragraph} text="Akira Toriyama..."/>
     <Img  path={path} customClass={styles.ImgPublicate__Img}/>
    </div>
  )
}

export default ImgPublicate
