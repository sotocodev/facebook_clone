import PubliTitulo from "../../organisms/PubliTitulo/PubliTitulo";
import PerfilesPaginas from "../../organisms/PerfilesPaginas/PerfilesPaginas";
import Cumple from "../../organisms/Cumple/Cumple";
import Contactos from "../../organisms/Contactos/Contactos"
import styles from "./HomeColumLef.module.css"

const HomeColumLef =()=>{
return(
<div className={styles.HomeColumLef}>
    <aside className={styles.HomeColumLefAside}>
    <PubliTitulo />
    <PerfilesPaginas/>
    <Cumple/>
    <Contactos/>
    </aside>
</div>
)
}
export default HomeColumLef;
