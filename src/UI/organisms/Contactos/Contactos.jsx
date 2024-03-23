import SubTitleOpcion2 from "../../molecules/SubTitleOpcion2/SubTitleOpcion2"
import ImgSubTitle from "../../molecules/ImgSubTitle/ImgSubTitle"
import styles from "../Contactos/Contactos.module.css"

const Contactos=()=>{
return(
<>
    <SubTitleOpcion2/>
    <ImgSubTitle customClass__Img={styles.ImgTitle} Text="Luis Silva" path="https://www.svgrepo.com/show/374762/people.svg" />
    <ImgSubTitle customClass__Img={styles.ImgTitle} Text="Yusibeth Soto" path="https://www.svgrepo.com/show/374762/people.svg"/>
    <ImgSubTitle customClass__Img={styles.ImgTitle} Text="Robert Sanchez" path="https://www.svgrepo.com/show/374762/people.svg"/>
    <ImgSubTitle customClass__Img={styles.ImgTitle} Text="Jesus Soto" path="https://www.svgrepo.com/show/374762/people.svg"/>
    <ImgSubTitle customClass__Img={styles.ImgTitle} Text="Leonardo Peña"  path="https://www.svgrepo.com/show/374762/people.svg"/>
    <ImgSubTitle customClass__Img={styles.ImgTitle} Text="Alejandron Hernandez" path="https://www.svgrepo.com/show/374762/people.svg"/>
</>
)
}
export default Contactos;