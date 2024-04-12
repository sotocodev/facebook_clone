import Img from "../Img/Img";
import styles from "./ButtonColumnRight.module.css";

const ButtonColumnRight = ({ customClass, path, customClassImg }) => {
  return (
    <button className={`${styles.ButtonColumnRight} ${customClass}`}>
      <Img customClass={customClassImg} path={path} />
    </button>
  );
};
export default ButtonColumnRight;
