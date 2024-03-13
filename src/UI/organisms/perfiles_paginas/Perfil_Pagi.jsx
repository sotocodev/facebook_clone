import Style from "../perfiles_paginas/Perfil_Pagi.module.css"
import Im_ti from "../../molecules/Img_Tittle/im_tittle";
import Tittle_op from "../../molecules/tittle_op_1/Tittle_op_1";
import Line from "../../atoms/horizontal_line/horizontal_line"
const Perfil_Pagi=()=>{
    return(
        <>
        <Tittle_op/>
        <Im_ti customClass={Style.Img}  Text={"Hello"} href={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRw1zChbzGcnQyOv1HUF--EnwDmbT0rbjfuzw&usqp=CAU"}/>
        <div className={Style.contenedor_pagi_file}>
        <Im_ti  customClass={Style.Img} Text={"Mensajes"} href={"https://www.svgrepo.com/show/533270/message-square-lines-alt.svg"}/>
        <Im_ti  customClass={Style.Img} Text={"Cambiar a pagina"} href={"https://www.svgrepo.com/show/456456/pages.svg"}/>
        <Im_ti  customClass={Style.Img} Text={"Crear promocion"} href={"https://www.svgrepo.com/show/501104/audio.svg"}/>
        </div>
        <Line/>
        </>
    )
}
export default Perfil_Pagi;