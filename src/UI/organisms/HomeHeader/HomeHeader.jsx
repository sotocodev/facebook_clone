import HeaderLogoBuscador from "../../molecules/HeaderLogoBuscador/HeaderLogoBuscador";
import HeaderParteCentral from "../../molecules/HeaderParteCentral/HeaderParteCentral";
import HeaderOpUsuario from "../../molecules/HeaderOpUsuario/HeaderOpUsuario";
import styles from "./HomeHeader.module.css";
const HomeHeader = () => {
  return (
    <div className={styles.HomeHeader}>
      <HeaderLogoBuscador />
      <HeaderParteCentral />
      <HeaderOpUsuario />
    </div>
  );
};
export default HomeHeader;
