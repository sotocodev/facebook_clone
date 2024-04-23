import React from 'react'
import styles from "./ImgBanner.module.css"
import Img from '../../atoms/Img/Img'
import Nickname from '../../atoms/Nickname/Nickname'
import PublicateButton from '../../atoms/PublicateButton/PublicateButton'

function ImgBanner({customClass}) {
  return (
    <div className={`${styles.ImgBanner} ${customClass}`}>
      <div className={styles.ImgBanner__SecctionProfile}>
      <Img pathImg="/Gokupelon.jpeg" customClass={styles.ImgBanner__Icon}/>
      <PublicateButton customClassDiv={styles.ImgBanner__ChangeDiv} customClass={styles.ImgBanner__ChangeImg} path="/photo.png"/>
      <div className={styles.ImgBanner__SecctionName}>
        <Nickname  customClassSpan={styles.ImgBanner__Span} customClassParagraph={styles.ImgBanner__Nickname} textSecondari="17 amigos" textName="Goku Pelon"/>        
      </div>
    
      </div>
    </div>
  )
}

export default ImgBanner
