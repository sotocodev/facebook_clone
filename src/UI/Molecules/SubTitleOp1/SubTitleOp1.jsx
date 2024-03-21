import  SubTitle from "../../atoms/SubTitle/SubTitle"
import ButtonColumnLef from "../../atoms/ButtonColumnLef/ButtonColumnLef"
import styles from "./SubTitleOp1.module.css"

const SubTitleOp1=()=>{

    return(
        <div className={styles.SubTitleOp1}>
        <SubTitle Text={"Tus paginas y perfiles"} customClass={styles.SubTitleOp1SubTitle}/>
        <ButtonColumnLef customClass={styles.SubTitleOp1Button} customClassImg={styles.SubTitleOp1Img} path={"https://www.svgrepo.com/show/395488/options.svg"}/>
        </div>
    )
}
export default SubTitleOp1;
