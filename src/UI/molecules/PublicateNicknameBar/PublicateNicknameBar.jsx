import Icon from '../../atoms/Icon/Icon'
import Nickname from '../../atoms/Nickname/Nickname'
import PublicateButton from '../../atoms/PublicateButton/PublicateButton'
import styles from "./PublicateNicknameBar.module.css"

function PublicateNicknameBar({customClass}) {
  return (
    <div className={`${styles.PublicateNicknameBar} ${customClass}`} >
        <Icon customClass={styles.PublicateNicknameBar__Img} path="/Gokupelon.jpeg"/>
        <Nickname/>
        <PublicateButton path="/Points.svg"/>
        <PublicateButton path="/Close.svg"/>
    </div>
  )
}

export default PublicateNicknameBar
