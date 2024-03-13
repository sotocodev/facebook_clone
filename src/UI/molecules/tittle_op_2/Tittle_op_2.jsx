import Style from "../tittle_op_2/Tittle_op_2.module.css"
import Titlle_3 from "../../atoms/titlle_3/tittle3"
import Boton from "../../atoms/button/button"
const Tittle_op_2=()=>{
    return(
        <>
        <div className={Style.contenedor}>
        <Titlle_3 Text={"Contactos"}/>
        <div>
        <Boton customClass={Style.boton} href={""} customClass_img={Style.img}/>
        <Boton customClass={Style.boton} href={""} customClass_img={Style.img}/>
        </div>
        </div>
        </>
    )
}
export default Tittle_op_2