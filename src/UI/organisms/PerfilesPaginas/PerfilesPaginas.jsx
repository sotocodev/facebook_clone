import ImgTitle from "../../Molecules/ImgTitle/ImgTitle";
import SubTitleOp1 from "../../Molecules/SubTitleOp1/SubTitleOp1";
import Line from "../../atoms/Line/Line"
import styles from "./PerfilesPaginas.module.css"

const PerfilesPaginas=()=>{
    return(
        <>
        <SubTitleOp1/>
        <ImgTitle  customClass={styles.ImgTitle}  Text="Hello" path="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRw1zChbzGcnQyOv1HUF--EnwDmbT0rbjfuzw&usqp=CAU"/>
        <div className={styles.Contenedor}>
        <ImgTitle   customClass={styles.Contenedor_ImgTitle} Text="Mensajes" path="https://www.svgrepo.com/show/533270/message-square-lines-alt.svg"/>
        <ImgTitle   customClass={styles.Contenedor_ImgTitle} Text="Cambiar a pagina" path="https://www.svgrepo.com/show/456456/pages.svg"/>
        <ImgTitle   customClass={styles.Contenedor_ImgTitle} Text="Crear promocion" path="https://www.svgrepo.com/show/501104/audio.svg"/>
        </div>
        <Line/>
        </>
    )
}
export default PerfilesPaginas;