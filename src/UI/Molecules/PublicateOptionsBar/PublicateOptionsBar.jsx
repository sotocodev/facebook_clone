import ButtonTo from '../../atoms/ButtonTo/ButtonTo'
import styles from "./PublicateOptionsBar.module.css"

function PublicateOptionsBar({customClass}) {
  return (
    <div className={`${styles.PublicateOptionsBar} ${customClass}`}>
        <ButtonTo path="../../Public/assets/Icons/Like.svg" text="Me Gusta" />
        <ButtonTo path="../../Public/assets/Icons/Comment.svg" text="Comentar" />
        <ButtonTo  path="../../Public/assets/Icons/share.svg" text="Compartir" />
    </div>
  )
}

export default PublicateOptionsBar
