import SubTitleOp2 from "../../molecules/SubTitleOp2/SubTitleOp2"
import ImgTitle from "../../molecules/ImgTitle/ImgTitle"
import styles from "../Contactos/Contactos.module.css"

const Contactos=()=>{
return(
<>
    <SubTitleOp2/>
    <ImgTitle customClass__Img={styles.ImgTitle} Text="Luis Silva" path="https://www.svgrepo.com/show/374762/people.svg" />
    <ImgTitle customClass__Img={styles.ImgTitle} Text="Yusibeth Soto" path="https://www.svgrepo.com/show/374762/people.svg"/>
    <ImgTitle customClass__Img={styles.ImgTitle} Text="Robert Sanchez" path="https://www.svgrepo.com/show/374762/people.svg"/>
    <ImgTitle customClass__Img={styles.ImgTitle} Text="Jesus Soto" path="https://www.svgrepo.com/show/374762/people.svg"/>
    <ImgTitle customClass__Img={styles.ImgTitle} Text="Leonardo Peña"  path="https://www.svgrepo.com/show/374762/people.svg"/>
    <ImgTitle customClass__Img={styles.ImgTitle} Text="Alejandron Hernandez" path="https://www.svgrepo.com/show/374762/people.svg"/>
  </>
)
}
export default Contactos;