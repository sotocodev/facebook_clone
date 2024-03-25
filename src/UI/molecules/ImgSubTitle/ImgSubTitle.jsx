import SubTitle from "../../atoms/SubTitle/SubTitle"
import Img from "../../atoms/Img/Img"
import styles from "./ImgSubTitle.module.css"

const ImgSubTitle=({path,Text,customClass,customClassImg})=>{
    return(
    <div className={`${styles.ImgSubTitle} ${customClass} `}> 
    <Img  customClass={customClassImg} path={path}/>
    <SubTitle customClassSubTitle={`${styles.ImgSubTitle__SubTitle}`} Text={Text} />
    </div>
    )
}
export default ImgSubTitle;