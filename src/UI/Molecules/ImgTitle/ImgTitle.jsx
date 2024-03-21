import SubTitle from "../../atoms/SubTitle/SubTitle"
import Img from "../../atoms/Img/Img"
import styles from "./ImgTitle.module.css"

const ImgTitle=({path,Text,customClass})=>{
    return(
    <div className={`${styles.ImgTitle} `}> 
    <Img  customClass={customClass} path={path}/>
    <SubTitle customClass={`${styles.ContenedorSubTitle}`} Text={Text} />
    </div>
    )
}
export default ImgTitle;