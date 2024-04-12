import ButtonColumnRight from "../../atoms/ButtonColumnRight/ButtonColumnRight";
import styles from "./HeaderOpUsuario.module.css";

const HeaderOpUsuario = () => {
  return (
    <div className={styles.HeaderOpUsuario}>
      <ButtonColumnRight
        customClass={styles.HeaderOpUsuario__ButtonColumnRight}
        customClassImg={styles.HeaderOpUsuario__Img}
        path="/MenuHeaderOp.svg"
      />
      <ButtonColumnRight
        customClass={styles.HeaderOpUsuario__ButtonColumnRight}
        customClassImg={styles.HeaderOpUsuario__Img}
        path="/Messenger.svg"
      />
      <ButtonColumnRight
        customClass={styles.HeaderOpUsuario__ButtonColumnRight}
        customClassImg={styles.HeaderOpUsuario__Img}
        path="/bullhorn.svg"
      />
      <ButtonColumnRight
        customClass={styles.HeaderOpUsuario__ButtonColumnRight}
        customClassImg={styles.HeaderOpUsuario__Img}
        path="/User.svg"
      />
    </div>
  );
};
export default HeaderOpUsuario;
