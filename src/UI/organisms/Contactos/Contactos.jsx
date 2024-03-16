import SubTitleOp2 from "../../Molecules/SubTitleOp2/SubTitleOp2"
import ImgTitle from "../../Molecules/ImgTitle/ImgTitle"
import styles from "../Contactos/Contactos.module.css"

const Contactos=()=>{

    return(
  <>
    <SubTitleOp2/>
    <ImgTitle customClass={styles.ImgTitle} Text="Luis Silva" path="https://www.svgrepo.com/show/374762/people.svg" />
    <ImgTitle customClass={styles.ImgTitle} Text="Yusibeth Soto" path="https://www.svgrepo.com/show/374762/people.svg"/>
    <ImgTitle customClass={styles.ImgTitle} Text="Robert Sanchez" path="https://www.svgrepo.com/show/374762/people.svg"/>
    <ImgTitle customClass={styles.ImgTitle} Text="Jesus Soto" path="https://www.svgrepo.com/show/374762/people.svg"/>
    <ImgTitle customClass={styles.ImgTitle} Text="Leonardo Peña"  path="https://www.svgrepo.com/show/374762/people.svg"/>
    <ImgTitle customClass={styles.ImgTitle} Text="Alejandron Hernandez" path="https://www.svgrepo.com/show/374762/people.svg"/>
  </>
    )
}
export default Contactos;