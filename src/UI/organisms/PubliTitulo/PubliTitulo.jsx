import SubTitle from '../../atoms/SubTitle/SubTitle'
import Publicat from '../../molecules/Publicat/Publicat';
import Line from "../../atoms/Line/Line"
import styles from "../PubliTitulo/PubliTitulo.module.css"

const PubliTitulo=({customClass})=>{
return(
<div className={`${styles.PubliTitulo} ${customClass}`}>
    <SubTitle Text="Publicidad" customClass__SubTitle={styles.PubliTitulo__SubTitle}/>
    <Publicat Text='Domestika' textP="Domestika.org" path="public/Domestika.png"/>
    <Publicat Text="Unete a Intch 🔥" textP='get.intch.org' path="public/Intch.png " />
    <Line/>
</div>
)
}

export default PubliTitulo;