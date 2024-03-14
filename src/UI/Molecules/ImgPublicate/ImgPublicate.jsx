import React from 'react'
import styles from "./ImgPublicate.module.css"
import Paragraph from '../../atoms/Paragraph/Paragraph'
import Img from '../../atoms/IconProfile/IconProfile'

function ImgPublicate({customClass, Path}) {
  return (
    <div className={`${styles.ImgPublicate} ${customClass}`}>
     <Paragraph customClass={styles.ImgPublicate__Paragraph} text="Akira Toriyama..."/>
     <Img  href={Path} customClass={styles.ImgPublicate__Img}/>
    </div>
  )
}

export default ImgPublicate
