import ButtonColumnRight from "../../atoms/ButtonColumnRight/ButtonColumnRight";
import styles from "./HeaderOpUsuario.module.css";

const HeaderOpUsuario = () => {
  return (
    <div className={styles.HeaderOpUsuario}>
      <ButtonColumnRight
        customClass={styles.HeaderOpUsuario__ButtonColumnRight}
        customClassImg={styles.HeaderOpUsuario__Img}
        path="/public/MenuHeaderOp.svg"
      />
      <ButtonColumnRight
        customClass={styles.HeaderOpUsuario__ButtonColumnRight}
        customClassImg={styles.HeaderOpUsuario__Img}
        path="/public/Messenger.svg"
      />
      <ButtonColumnRight
        customClass={styles.HeaderOpUsuario__ButtonColumnRight}
        customClassImg={styles.HeaderOpUsuario__Img}
        path="/public/bullhorn.svg"
      />
      <ButtonColumnRight
        customClass={styles.HeaderOpUsuario__ButtonColumnRight}
        customClassImg={styles.HeaderOpUsuario__Img}
        path="/public/User.svg"
      />
    </div>
  );
};
export default HeaderOpUsuario;
