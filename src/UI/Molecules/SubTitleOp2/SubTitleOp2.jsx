import SubTitle from "../../atoms/SubTitle/SubTitle"
import ButtonColumnLef from "../../atoms/ButtonColumnLef/ButtonColumnLef"
import styles from "./SubTitleOp2.module.css"

const SubTitleOp2=()=>{
return(
    <div className={styles.SubTitleOp2}>
    <SubTitle Text={"Contactos"} customClass={styles.SubTitleOp2SubTitle}/>
    <div>
    <ButtonColumnLef customClass={styles.SubTitleOp2Button} path={"https://www.svgrepo.com/show/479496/magnifying-glass-11.svg"} customClassImg={styles.SubTitleOp2Img}/>
    <ButtonColumnLef customClass={styles.SubTitleOp2Button} path={"https://www.svgrepo.com/show/395488/options.svg"} customClassImg={styles.SubTitleOp2Img}/>
    </div>
    </div>
)
}
export default SubTitleOp2;