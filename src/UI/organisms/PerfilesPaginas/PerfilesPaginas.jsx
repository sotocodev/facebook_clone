import ImgSubTitle from "../../molecules/ImgSubTitle/ImgSubTitle";
import SubTitleOpcion1 from "../../molecules/SubTitleOpcion1/SubTitleOpcion1";
import Line from "../../atoms/Line/Line"
import styles from "./PerfilesPaginas.module.css"

const PerfilesPaginas=()=>{
return(
<div>
    <SubTitleOpcion1/>
    <ImgSubTitle  customClass__Img={styles.ImgSubTitle}  Text="Hello" path="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRw1zChbzGcnQyOv1HUF--EnwDmbT0rbjfuzw&usqp=CAU"/>
    <div className={styles.PerfilesPaginas}>
    <ImgSubTitle customClass__Img={styles.PerfilesPaginas__ImgSubTitle} Text="Mensajes" path="https://www.svgrepo.com/show/533270/message-square-lines-alt.svg"/>
    <ImgSubTitle customClass__Img={styles.PerfilesPaginas__ImgSubTitle} Text="Cambiar a pagina" path="https://www.svgrepo.com/show/456456/pages.svg"/>
    <ImgSubTitle customClass__Img={styles.PerfilesPaginas__ImgSubTitle} Text="Crear promocion" path="https://www.svgrepo.com/show/501104/audio.svg"/>
    </div>
    <Line/>
</div>
)
}
export default PerfilesPaginas;