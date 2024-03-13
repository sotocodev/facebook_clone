import Style from "../publi/publi.module.css"
import Img from "../../atoms/Img/Img"
import H4 from "../../atoms/tittle_4/tittle_4"
import Parrafo from "../../atoms/Paragraph/Paragraph"

const Publi =({href,Text,Text_p})=>{
    return(
        <>
        <div className={Style.Publi}>
        <Img customClass={Style.imagen} href={href} />
        <div className={Style.contenedor_Pu}>
        <H4 Text={Text} customClass={Style.Titulo_p}/>
        <Parrafo Text={Text_p} customClass={Style.titulos_s} />
        </div>
        </div>
        </>
    )
}

export default Publi;