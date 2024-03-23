import  SubTitle from "../../atoms/SubTitle/SubTitle"
import ButtonColumnLef from "../../atoms/ButtonColumnLef/ButtonColumnLef"
import styles from "./SubTitleOpcion1.module.css"

const SubTitleOpcion1=()=>{
    return(
    <div className={styles.SubTitleOpcion1}>
    <SubTitle Text={"Tus paginas y perfiles"} customClass__SubTitle={styles.SubTitleOpcion1__SubTitle}/>
    <ButtonColumnLef customClass={styles.SubTitleOpcion1__Button} customClassImg={styles.SubTitleOpcion1__Img} path={"https://www.svgrepo.com/show/395488/options.svg"}/>
    </div>
    )
}
export default SubTitleOpcion1;
