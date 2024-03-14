import styles from "./ButtonTo.module.css"

function ActiveButtons({Value, path, customClass }) {
  return (
    <button className={`${styles.ActiveButtons} ${customClass}`}>
        <div className={styles.ActiveButtonsDiv}>
        <span className={styles.ActiveButtonsSpan}>
        <img  className={styles.ActiveButtonsImg} src={path}/>
            {Value}
        </span>
        </div>
    </button>
  )
}

export default ActiveButtons
