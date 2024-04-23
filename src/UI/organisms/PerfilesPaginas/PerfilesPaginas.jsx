import ImgSubTitle from "../../molecules/ImgSubTitle/ImgSubTitle";
import SubTitleOpcion1 from "../../molecules/SubTitleOpcion1/SubTitleOpcion1";
import Line from "../../atoms/Line/Line"
import styles from "./PerfilesPaginas.module.css"

const PerfilesPaginas=()=>{
return(
<div className={styles.PerfilesPaginas}>
    <SubTitleOpcion1 Text='Tus paginas y perfiles' path="https://www.svgrepo.com/show/395488/options.svg"/>
    <ImgSubTitle  customClassImg={styles.ImgSubTitle}  Text="Hello" path="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRw1zChbzGcnQyOv1HUF--EnwDmbT0rbjfuzw&usqp=CAU"/>
    <div className={styles.PerfilesPaginas}>
    <ImgSubTitle customClassImg={styles.PerfilesPaginas__ImgSubTitle} Text="Mensajes" path="https://www.svgrepo.com/show/533270/message-square-lines-alt.svg"/>
    <ImgSubTitle customClassImg={styles.PerfilesPaginas__ImgSubTitle} Text="Cambiar a pagina" path="https://www.svgrepo.com/show/456456/pages.svg"/>
    <ImgSubTitle customClassImg={styles.PerfilesPaginas__ImgSubTitle} Text="Crear promocion" path="https://www.svgrepo.com/show/501104/audio.svg"/>
    </div>
    <Line/>
</div>
)
}
export default PerfilesPaginas;