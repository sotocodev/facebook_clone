import SubTitle from "../../atoms/SubTitle/SubTitle"
import ButtonColumnLef from "../../atoms/ButtonColumnLef/ButtonColumnLef"
import styles from "./SubTitleOp2.module.css"

const SubTitleOp2=()=>{
    return(
        <>
        <div className={styles.Contenedor}>
        <SubTitle Text={"Contactos"} customClass={styles.Contenedor_SubTitle}/>
        <div>
        <ButtonColumnLef customClass={styles.Contenedor_Button} path={"https://www.svgrepo.com/show/479496/magnifying-glass-11.svg"} customClass_img={styles.Contenedor_Img}/>
        <ButtonColumnLef customClass={styles.Contenedor_Button} path={"https://www.svgrepo.com/show/395488/options.svg"} customClass_img={styles.Contenedor_Img}/>
        </div>
        </div>
        </>
    )
}
export default SubTitleOp2;