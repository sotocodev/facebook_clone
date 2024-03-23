import SubTitle from "../../atoms/SubTitle/SubTitle"
import Img from "../../atoms/Img/Img"
import styles from "./ImgSubTitle.module.css"

const ImgSubTitle=({path,Text,customClass,customClass__Img})=>{
    return(
    <div className={`${styles.ImgSubTitle} ${customClass} `}> 
    <Img  customClass={customClass__Img} path={path}/>
    <SubTitle customClass__SubTitle={`${styles.ImgSubTitle__SubTitle}`} Text={Text} />
    </div>
    )
}
export default ImgSubTitle;