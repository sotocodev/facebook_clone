import Style from "../Img_Tittle/im_tittle.module.css"
import Titlle_3 from "../../atoms/titlle_3/tittle3"
import Img from "../../atoms/Img/Img"
const Im_Bu=({href,Text,customClass})=>{
    return(
        <>
        <div className={`${Style.contenedor} `}> 
        <Img  customClass={customClass}href={href}/>
        <Titlle_3 customClass={`${Style.Titulo}`} Text={Text} />
        </div>
        </>
    )
}
export default Im_Bu