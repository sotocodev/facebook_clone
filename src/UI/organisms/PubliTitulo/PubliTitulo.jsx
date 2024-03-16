import SubTitle from '../../atoms/SubTitle/SubTitle'
import Publi from '../../Molecules/publi/publi';
import Line from "../../atoms/Line/Line"
import styles from "../PubliTitulo/PubliTitulo.module.css"
const PubliTitulo=()=>{
    return(
        <>
        <SubTitle Text="Publicidad" customClass={styles.SubTitle}/>
        <Publi Text='Domestika' text_p="Domestika.org" path="Public/Domestika.png"/>
        <Publi Text="Unete a Intch 🔥" text_p='get.intch.org' path="public/Intch.png " />
        <Line/>
        </>
    )
}

export default PubliTitulo;