import React from 'react'
import styles from "./ButtonTo.module.css"

function ButtonTo({Value, customClass}) {
  return (
    <button className={`${styles.ButtonTo} ${customClass}`}>
        <span className={styles.Span}>{Value}</span>
    </button>
  )
}

export default ButtonTo
