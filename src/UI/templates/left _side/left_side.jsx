import Style from "../left _side/left_side.module.css"
import Publi from "../../organisms/publi_titulo/publi_titulo";
import Perfil_Pagi from "../../organisms/perfiles_paginas/Perfil_Pagi";
import Cumple from "../../organisms/cumple/cumple";
import Contacto from "../../organisms/Contactos/Contactos"
const Left =()=>{

    return(
        <>
        <div className={Style.Contenedor}>
            <aside className={Style.Aside}>
        <Publi />
        <Perfil_Pagi/>
        <Cumple/>
        <Contacto/>
            </aside>

        </div>



        </>
    )
}
export default Left;
