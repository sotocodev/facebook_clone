import React from 'react'
import styles from "./PublicateOptionsBar.module.css"
import ActiveButtons from '../../atoms/ActiveButtons/ActiveButtons'

function PublicateOptionsBar({customClass}) {
  return (
    <div className={`${styles.PublicateOptionsBar} ${customClass}`}>
        <ActiveButtons Path="../../src/assets/Icons/Like.svg" Value="Me Gusta" customClass={styles.LCCButtons}/>
        <ActiveButtons Path="../../src/assets/Icons/Comment.svg" Value="Comentar" customClass={styles.LCCButtons}/>
        <ActiveButtons  Path="../../src/assets/Icons/share.svg" Value="Compartir" customClass={styles.LCCButtons}/>
    </div>
  )
}

export default PublicateOptionsBar
