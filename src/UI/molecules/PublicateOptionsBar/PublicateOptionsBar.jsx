import ButtonTo from '../../atoms/ButtonTo/ButtonTo'
import styles from "./PublicateOptionsBar.module.css"

function PublicateOptionsBar({customClass}) {
  return (
    <div className={`${styles.PublicateOptionsBar} ${customClass}`}>
        <ButtonTo path="/Like.svg" text="Me Gusta" />
        <ButtonTo path="/Comment.svg" text="Comentar" />
        <ButtonTo  path="/Share.svg" text="Compartir" />
    </div>
  )
}

export default PublicateOptionsBar
