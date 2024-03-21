import SubTitle from '../../atoms/SubTitle/SubTitle'
import Publi from '../../molecules/Publi/Publi';
import Line from "../../atoms/Line/Line"
import styles from "../PubliTitulo/PubliTitulo.module.css"
const PubliTitulo=()=>{
    return(
        <>
        <SubTitle Text="Publicidad" customClass={styles.SubTitle}/>
        <Publi Text='Domestika' textP="Domestika.org" path="public/Domestika.png"/>
        <Publi Text="Unete a Intch 🔥" textP='get.intch.org' path="public/Intch.png " />
        <Line/>
        </>
    )
}

export default PubliTitulo;