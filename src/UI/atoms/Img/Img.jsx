import styles from "./Img.module.css"
const Img = ({customClass, path}) => {
  return <img className={`${styles.Img} ${customClass}`} src={`../../src/assets/Icons/${path}`} />
}

export default Img;