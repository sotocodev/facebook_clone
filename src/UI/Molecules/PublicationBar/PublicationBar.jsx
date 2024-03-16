import ButtonTo from '../../atoms/ButtonTo/ButtonTo'
import Img from '../../atoms/Img/Img'
import Input from '../../atoms/Input/Input'
import styles from "./PublicationBar.module.css"


function PublicationBar({customClass}) {
  return (
    <div className={`${styles.PublicationBar} ${customClass}`}>
        <div className={styles.PublicationBar__Publicate}>
            <Img customClass={styles.PublicationBar__PublicateImgIcon} path="/Gokupelon.jpeg"/>
            <Input customClass={styles.Publicationbar__PublicateInputDisable} placeholder="¿Que estas Pensando, Nickname?" disabled={true}/>
        </div>

        <div className={styles.PublicationBar__DivButtons}>
        <ButtonTo text="Video en Vivo" path="/Camare.png"/>
        <ButtonTo text="Foto" path="/photo.png"/>
        <ButtonTo text="Sentimientos/actividad" path="/Smile.png"/>
        </div>
      
    </div>
  )
}

export default PublicationBar
