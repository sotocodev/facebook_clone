import Img from '../../atoms/IconProfile/IconProfile'
import Nickname from '../../atoms/Nickname/Nickname'
import PublicateButton from '../../atoms/PublicateButton/PublicateButton'
import styles from "./PublicateNicknameBar.module.css"

function PublicateNicknameBar({customClass}) {
  return (
    <div className={`${styles.PublicateNicknameBar} ${customClass}`} >
        <Img customClass={styles.PublicateNicknameBar__Img} path="../../Public/assets/Icons/Gokupelon.Jpeg"/>
        <Nickname/>
        <PublicateButton path="../../Public/assets/Icons/Points.svg"/>
        <PublicateButton path="../../Public/assets/Icons/Close.svg"/>
    </div>
  )
}

export default PublicateNicknameBar
