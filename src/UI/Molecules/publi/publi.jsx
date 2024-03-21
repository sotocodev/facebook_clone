import Img from "../../atoms/Img/Img"
import SubTitle from "../../atoms/SubTitle/SubTitle"
import Paragraph from "../../atoms/Paragraph/Paragraph"
import styles from "./Publi.module.css"

const Publi =({path,Text,textP})=>{
return(
    <div className={styles.Publi}>
    <Img customClass={styles.PubliImg} path={path} />
    <div className={styles.Publi2}>
    <SubTitle Text={Text} customClass={styles.Publi2SubTitle}/>
    <Paragraph text={textP} customClass={styles.Publi2Paragraph} />
    </div>
    </div>
)
}
export default Publi;