import PubliTitulo from "../PubliTitulo/PubliTitulo";
import PerfilesPaginas from "../PerfilesPaginas/PerfilesPaginas";
import Cumple from "../Cumple/Cumple";
import Contactos from "../Contactos/Contactos";
import styles from "./HomeColumRight.module.css";

const HomeColumRight = () => {
  return (
    <div className={styles.HomeColumRight}>
      <aside className={styles.HomeColumRight__Aside}>
        <PubliTitulo />
        <PerfilesPaginas />
        <Cumple />
        <Contactos />
      </aside>
    </div>
  );
};
export default HomeColumRight;
