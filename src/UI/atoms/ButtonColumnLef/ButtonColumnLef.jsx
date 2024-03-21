import Img from "../Img/Img"
import styles from "./ButtonColumnLef.module.css"

const Button=({customClass,path,customClassImg})=>{
  return<button className={`${styles.Button} ${customClass}`}><Img customClass={customClassImg} path={path}/></button>
}
export default Button