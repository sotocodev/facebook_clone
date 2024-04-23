import  SubTitle from "../../atoms/SubTitle/SubTitle"
import ButtonColumnRight from "../../atoms/ButtonColumnRight/ButtonColumnRight"
import styles from "./SubTitleOpcion1.module.css"

const SubTitleOpcion1=({Text,path})=>{
    return(
    <div className={styles.SubTitleOpcion1}>
    <SubTitle Text={Text} customClassSubTitle={styles.SubTitleOpcion1__SubTitle}/>
    <ButtonColumnRight customClass={styles.SubTitleOpcion1__Button} customClassImg={styles.SubTitleOpcion1__Img} path={path}/>
    </div>
)
}

export default SubTitleOpcion1;
