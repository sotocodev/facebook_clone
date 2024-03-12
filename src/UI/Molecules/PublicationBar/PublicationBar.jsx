import React from 'react'
import styles from "./PublicationBar.module.css"
import ActiveButtons from '../../atoms/ActiveButtons/ActiveButtons'
import ButtonTo from '../../atoms/ButtonTo/ButtonTo'
import Img from '../../atoms/IconProfile/IconProfile'

function PublicationBar({customClass}) {
  return (
    <div className={`${styles.PublicationBar} ${customClass}`}>
        <div className={styles.PublicationBarPublicate}>
            <Img customClass={styles.ImgIcon} href="../../src/assets/Icons/Gokupelon.jpeg"/>
            <ButtonTo Value="¿Que estas pensando, NickName?"/>
        </div>

        <div className={styles.PublicationBarDivButtons}>
        <ActiveButtons Value="Video en Vivo" Path="../../../src/assets/Icons/Camare.png"/>
        <ActiveButtons Value="Foto" Path="../../../src/assets/Icons/photo.png"/>
        <ActiveButtons Value="Sentimientos/actividad" Path="../../../src/assets/Icons/Smile.png"/>
        </div>
      
    </div>
  )
}

export default PublicationBar
