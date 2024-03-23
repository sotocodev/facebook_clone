import SubTitle from "../../atoms/SubTitle/SubTitle";
import ImgTitle from "../../molecules/ImgTitle/ImgTitle"
import Line from "../../atoms/Line/Line";
import styles from "./Cumple.module.css"

const Cumple=()=>{
return(
    <div>
    <SubTitle Text="Cumpleaños" customClass__SubTitle={styles.SubTitle}/>
    <ImgTitle customClass__Img={styles.ImgTitle} Text="Hoy es el cumpleaños de Edward  Gonzalez" path="https://www.svgrepo.com/show/507313/gift.svg"/>
    <Line/>
    </div>
)
}
export default Cumple;