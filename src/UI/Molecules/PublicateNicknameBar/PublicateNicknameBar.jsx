import React from 'react'
import styles from "./PublicateNicknameBar.module.css"
import Img from '../../atoms/IconProfile/IconProfile'
import Nickname from '../../atoms/Nickname/Nickname'
import PublicateButton from '../../atoms/PublicateButton/PublicateButton'

function PublicateNicknameBar({customClass}) {
  return (
    <div className={`${styles.PublicateNicknameBar} ${customClass}`} >
        <Img customClass={styles.PublicateNicknameBar__Img} href="../../src/assets/Icons/Gokupelon.Jpeg"/>
        <Nickname/>
        <PublicateButton Path="Points.svg"/>
        <PublicateButton Path="Close.svg"/>
    </div>
  )
}

export default PublicateNicknameBar
