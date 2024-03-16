import PubliTitulo from "../../organisms/PubliTitulo/PubliTitulo";
import PerfilesPaginas from "../../organisms/PerfilesPaginas/PerfilesPaginas";
import Cumple from "../../organisms/Cumple/Cumple";
import Contactos from "../../organisms/Contactos/Contactos"
import styles from "./HomeColumLef.module.css"

const Left =()=>{

    return(
        <>
        <div className={styles.Contenedor}>
            <aside className={styles.Contenedor_Aside}>
        <PubliTitulo />
        <PerfilesPaginas/>
        <Cumple/>
        <Contactos/>
            </aside>
        </div>
        </>
    )
}
export default Left;
