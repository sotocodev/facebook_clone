import SubTitle from "../../atoms/SubTitle/SubTitle"
import Button from "../../atoms/Button/Button"
import styles from "./SubTitleOp2.module.css"

const SubTitleOp2=()=>{
    return(
        <>
        <div className={styles.Contenedor}>
        <SubTitle Text={"Contactos"} customClass={styles.Contenedor_SubTitle}/>
        <div>
        <Button customClass={styles.Contenedor_Button} path={"https://www.svgrepo.com/show/479496/magnifying-glass-11.svg"} customClass_img={styles.Contenedor_Img}/>
        <Button customClass={styles.Contenedor_Button} path={"https://www.svgrepo.com/show/395488/options.svg"} customClass_img={styles.Contenedor_Img}/>
        </div>
        </div>
        </>
    )
}
export default SubTitleOp2;