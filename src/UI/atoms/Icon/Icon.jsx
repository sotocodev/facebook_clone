import styles from "./Icon.module.css";

const Icon = ({ customClass, path, IconContainerCustomClass }) => {

  return  IconContainerCustomClass ? (
    <div className={IconContainerCustomClass}>
      <img className={`${styles.Icon} ${customClass}`} src={path} />
    </div>
  ):(
  
  <img className={`${styles.Icon} ${customClass}`} src={path} />
  )
};

export default Icon;
