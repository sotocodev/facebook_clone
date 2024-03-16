import styles from "./Icon.module.css";

const Icon = ({ customClass, path }) => {
  return <img className={`${styles.Icon} ${customClass}`} src={path} />;
};

export default Icon;
