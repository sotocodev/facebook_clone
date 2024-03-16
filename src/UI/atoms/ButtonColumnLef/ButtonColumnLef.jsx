import Img from "../Img/Img"
import styles from "./ButtonColumnLef.module.css"

const Button=({customClass,path,customClass_img})=>{

    return<button className={`${styles.Button} ${customClass}`}><Img customClass={customClass_img} path={path}/></button>

}
export default Button