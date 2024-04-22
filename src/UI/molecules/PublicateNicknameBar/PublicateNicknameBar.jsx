import Img from '../../atoms/Img/Img'
import Nickname from '../../atoms/Nickname/Nickname'
import PublicateButton from '../../atoms/PublicateButton/PublicateButton'
import styles from "./PublicateNicknameBar.module.css"

function PublicateNicknameBar({customClass,nickname,time,seguir}) {
  return (
    <div className={`${styles.PublicateNicknameBar} ${customClass}`} >
        <Img customClass={styles.PublicateNicknameBar__Img} pathImg="/Gokupelon.jpeg"/>
        <Nickname time={time} nickname={nickname} seguir={seguir}/>
        <PublicateButton path="/Points.svg"/>
        <PublicateButton path="/Close.svg"/>
    </div>
  )
}

export default PublicateNicknameBar
