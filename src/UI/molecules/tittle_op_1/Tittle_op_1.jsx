import Style from "../tittle_op_1/tittle_op_1.module.css"
import  Tittle_3 from "../../atoms/titlle_3/tittle3"
import Boton from "../../atoms/button/button"
const Tittle_op=()=>{

    return(
        <>
        <div className={Style.contenedor}>
        <Tittle_3 Text={"Tus paginas y perfiles"}/>
        <Boton customClass={Style.boton} customClass_img={Style.img} href={"https://www.svgrepo.com/show/395488/options.svg"}/>
        </div>
        </>
    )
}
export default Tittle_op
