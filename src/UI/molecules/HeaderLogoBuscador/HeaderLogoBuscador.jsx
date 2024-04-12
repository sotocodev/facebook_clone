import Img from "../../atoms/Img/Img";
import Input from "../../atoms/Input/Input";
import styles from "./HeaderLogoBuscador.module.css";

const LogoBuscador = () => {
  return (
    <div className={styles.LogoBuscador}>
      <Img
        path="FacebookLogo.svg"
        customClass={styles.LogoBuscador__Img}
      />
      <Input
        placeholder="Buscar en facebook"
        customClass={styles.LogoBuscador__Input}
        iconPath="lupa.svg"
        iconPathCustomClass={styles.LogoBuscador__IconPath}
        InputContainerCustomClass={
          styles.LogoBuscador__InputContainerCustomClass
        }
      />
    </div>
  );
};
export default LogoBuscador;
