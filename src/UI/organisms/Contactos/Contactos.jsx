import Style from "../Contactos/Contactos.module.css"
import Tittle_2 from "../../molecules/tittle_op_2/Tittle_op_2"
import Im_TI from "../../molecules/Img_Tittle/im_tittle"
const Contacto=()=>{

    return(
        <>
        <Tittle_2/>
        <Im_TI customClass={Style.img} Text={"Luis Silva"} href={"https://www.svgrepo.com/show/374762/people.svg"} />
        <Im_TI customClass={Style.img} Text={"Yusibeth Soto"} href={"https://www.svgrepo.com/show/374762/people.svg"}/>
        <Im_TI customClass={Style.img} Text={"Robert Sanchez"} href={"https://www.svgrepo.com/show/374762/people.svg"}/>
        <Im_TI customClass={Style.img} Text={"Jesus Soto"} href={"https://www.svgrepo.com/show/374762/people.svg"}/>
        <Im_TI customClass={Style.img} Text={"Leonardo Peña"}  href={"https://www.svgrepo.com/show/374762/people.svg"}/>
        <Im_TI customClass={Style.img} Text={"Alejandron Hernandez"} href={"https://www.svgrepo.com/show/374762/people.svg"}/>
        </>
    )
}
export default Contacto;