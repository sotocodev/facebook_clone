import React from 'react'
import styles from "./ImgBanner.module.css"
import Img from '../../atoms/Img/Img'
import Nickname from '../../atoms/Nickname/Nickname'
import PublicateButton from '../../atoms/PublicateButton/PublicateButton'

function ImgBanner({ customClass }) {
  return (
    //${customClass}
    <>
        <Img customClass={`${styles.ImgBanner__imgElement}`} pathImg={"https://i.pinimg.com/originals/bd/86/5d/bd865dc2ee1a23541cf27b5ec67dc769.png"} />

    <div  className={`${styles.ImgBanner_element}`} >

  

      <div className={`${styles.ImgBanner__buttonContainer}`}>

        <div className={`${styles.ImgBanner__button}`}>

          {/* <img width="30px" src="https://www.svgrepo.com/show/904/photo-camera.svg" alt="" />  */}
          <Img customClass={`${styles.ImgBanner__button_camera}`}  pathImg={"https://www.svgrepo.com/show/904/photo-camera.svg"} />  <p>Edit foto Cover</p>
        </div>
      </div>
      </div>
  


    </>
  )
}

export default ImgBanner
