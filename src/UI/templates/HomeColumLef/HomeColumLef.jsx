import PubliTitulo from "../../Organisms/PubliTitulo/PubliTitulo";
import PerfilesPaginas from "../../Organisms/PerfilesPaginas/PerfilesPaginas";
import Cumple from "../../Organisms/Cumple/Cumple";
import Contacto from "../../Organisms/Contactos/Contactos"
import Style from "./HomeColumLef.module.css"

const Left =()=>{

    return(
        <>
        <div className={Style.Contenedor}>
            <aside className={Style.Contenedor_Aside}>
        <PubliTitulo />
        <PerfilesPaginas/>
        <Cumple/>
        <Contacto/>
            </aside>
        </div>
        </>
    )
}
export default Left;
