import styles from "./ButtonText.module.css"

const ButtonText=({customClass,Text})=>{
  return(
    <button className={`${styles.Button} ${customClass}`}>{Text}</button>
  )
}

export default ButtonText;