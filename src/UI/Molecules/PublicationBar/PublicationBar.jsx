import ButtonTo from '../../atoms/ButtonTo/ButtonTo'
import Img from '../../atoms/IconProfile/IconProfile'
import Input from '../../atoms/Input/Input'
import styles from "./PublicationBar.module.css"


function PublicationBar({customClass}) {
  return (
    <div className={`${styles.PublicationBar} ${customClass}`}>
        <div className={styles.PublicationBar__Publicate}>
            <Img customClass={styles.PublicationBar__Publicate_ImgIcon} path="../../src/assets/Icons/Gokupelon.jpeg"/>
            <Input customClass={styles.Publicationbar__Publicate_InputDisable} placeholder="¿Que estas Pensando, Nickname?" disabled={true}/>
        </div>

        <div className={styles.PublicationBar__DivButtons}>
        <ButtonTo Value="Video en Vivo" path="../../../src/assets/Icons/Camare.png"/>
        <ButtonTo Value="Foto" path="../../../src/assets/Icons/photo.png"/>
        <ButtonTo Value="Sentimientos/actividad" path="../../../src/assets/Icons/Smile.png"/>
        </div>
      
    </div>
  )
}

export default PublicationBar
