import Img from "../../atoms/Img/Img"
import SubTitle from "../../atoms/SubTitle/SubTitle"
import Paragraph from "../../atoms/Paragraph/Paragraph"
import styles from "./Publi.module.css"

const Publi =({path,Text,text_p})=>{
    return(
        <>
        <div className={styles.Contenedor}>
        <Img customClass={styles.Contenedor_Img} path={path} />
        <div className={styles.Contenedor2}>
        <SubTitle Text={Text} customClass={styles.Contenedor2_SubTitle}/>
        <Paragraph text={text_p} customClass={styles.Contenedor2_Paragraph} />
        </div>
        </div>
        </>
    )
}

export default Publi;