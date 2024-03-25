import PubliTitulo from "../PubliTitulo/PubliTitulo";
import PerfilesPaginas from "../PerfilesPaginas/PerfilesPaginas";
import Cumple from "../Cumple/Cumple";
import Contactos from "../Contactos/Contactos"
import styles from "./HomeColumLef.module.css"

const HomeColumLef =()=>{
return(
<div className={styles.HomeColumLef}>
    <aside className={styles.HomeColumLef__Aside}>
    <PubliTitulo />
    <PerfilesPaginas/>
    <Cumple/>
    <Contactos/>
    </aside>
</div>
)
}
export default HomeColumLef;
