import PubliTitulo from "../../organisms/PubliTitulo/PubliTitulo";
import PerfilesPaginas from "../../organisms/PerfilesPaginas/PerfilesPaginas";
import Cumple from "../../organisms/Cumple/Cumple";
import Contacto from "../../organisms/Contactos/Contactos"
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
