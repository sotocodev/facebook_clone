import Img from "../../atoms/Img/Img"
import SubTitle from "../../atoms/SubTitle/SubTitle"
import Paragraph from "../../atoms/Paragraph/Paragraph"
import styles from "./Publicat.module.css"

const Publicat =({path,Text,textP})=>{
return(
    <div className={styles.Publicat}>
    <Img customClass={styles.Publicat__Img} path={path} />
    <div className={styles.Publicat2}>
    <SubTitle Text={Text} customClass__SubTitle={styles.Publicat2__SubTitle}/>
    <Paragraph text={textP} customClass={styles.Publicat2__Paragraph} />
    </div>
    </div>
)
}
export default Publicat;