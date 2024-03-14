import styles from "./IconProfile.module.css"

const Img = ({text, customClass, path}) => {
  return <img className={`${styles.IconProfile} ${customClass}`} src={path} />
}

export default Img;