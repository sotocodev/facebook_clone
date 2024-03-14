import styles from "./IconProfile.module.css"

const IconProfile = ({customClass, path}) => {
  return <img className={`${styles.IconProfile} ${customClass}`} src={path} />
}

export default IconProfile;