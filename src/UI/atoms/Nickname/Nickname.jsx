import React from 'react'
import styles from "./Nickname.module.css"

function Nickname({Nickname, Time, customClass }) {
  return (
    <div className={`${styles.Nickname} ${customClass}`}>
        <p className={styles.Paragraph}>Juan Laya</p>
        <span className={styles.Span}>hace 2 minutos</span>
    </div>
  )
}

export default Nickname
