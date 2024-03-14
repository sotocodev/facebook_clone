import styles from "./ButtonTo.module.css"

function ButtonTo({Value, path, customClass }) {
  return (
    <button className={`${styles.ButtonTo} ${customClass}`}>
        <div className={styles.ButtonTo__Div}>
        <span className={styles.ButtonTo__Div_span}>
        <img  className={styles.ButtonTo__Div_Img} src={path}/>
            {Value}
        </span>
        </div>
    </button>
  )
}

export default ButtonTo
