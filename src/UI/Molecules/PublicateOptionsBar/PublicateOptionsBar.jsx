import ActiveButtons from '../../atoms/ButtonTo/ButtonTo'
import styles from "./PublicateOptionsBar.module.css"

function PublicateOptionsBar({customClass}) {
  return (
    <div className={`${styles.PublicateOptionsBar} ${customClass}`}>
        <ActiveButtons path="../../src/assets/Icons/Like.svg" Value="Me Gusta" />
        <ActiveButtons path="../../src/assets/Icons/Comment.svg" Value="Comentar" />
        <ActiveButtons  path="../../src/assets/Icons/share.svg" Value="Compartir" />
    </div>
  )
}

export default PublicateOptionsBar
