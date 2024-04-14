import Input from "../../atoms/Input/Input"
import PublicateButton from "../../atoms/PublicateButton/PublicateButton"
import Title from "../../atoms/Title/Title"
import styles from "./LeafMenuBar.module.css"

function LeafMenuBar({customClassLeaf, customClassTitle}) {
  return (
    <div className={`${styles.LeafMenuBar} ${customClassLeaf}`}>
        <div className={`${styles.LeafMenuBar__Title} ${customClassTitle}`}>
            <Title text="Video"/>
            <PublicateButton path="/config.svg"/>
        </div>
        <Input InputContainerCustomClass={styles.LeafMenuBar__Content} iconPathCustomClass={styles.LeafMenuBar__InputIcon} customClass={styles.LeafMenuBar__Input} iconPath="/Glass.svg" placeholder="Buscar videos"/>
    </div>
  )
}

export default LeafMenuBar
