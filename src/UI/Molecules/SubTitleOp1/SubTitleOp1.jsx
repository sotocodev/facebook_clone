import  SubTitle from "../../atoms/SubTitle/SubTitle"
import ButtonColumnLef from "../../atoms/ButtonColumnLef/ButtonColumnLef"
import styles from "./SubTitleOp1.module.css"

const SubTitleOp1=()=>{

    return(
        <div className={styles.Contenedor}>
        <SubTitle Text={"Tus paginas y perfiles"} customClass={styles.Contenedor_SubTitle}/>
        <ButtonColumnLef customClass={styles.Contenedor_Button} customClass_img={styles.Contenedor_Img} path={"https://www.svgrepo.com/show/395488/options.svg"}/>
        </div>
    )
}
export default SubTitleOp1;
