import React from 'react'
import styles from "./ActiveButtons.module.css"

function ActiveButtons({Value, Path, customClass }) {
  return (
    <button className={`${styles.ActiveButtons} ${customClass}`}>
        <div className={styles.ActiveButtonsDiv}>
        <span className={styles.ActiveButtonsSpan}>
        <img  className={styles.ActiveButtonsImg} src={Path}/>
            {Value}
        </span>
        </div>
    </button>
  )
}

export default ActiveButtons
