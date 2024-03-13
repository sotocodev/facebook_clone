import Style from "./button.module.css"
import Img from "../Img/Img"
const Butoon_2=({customClass,href,customClass_img})=>{
    return(
        <>
        <button className={`${Style.button} ${customClass}`}><Img customClass={customClass_img} href={href}/></button>
        </>
    )
}
export default Butoon_2