import ActiveButtons from '../../atoms/ButtonTo/ButtonTo'
import ButtonTo from '../../atoms/ButtonTo/ButtonTo'
import Img from '../../atoms/IconProfile/IconProfile'
import Input from '../../atoms/Input/Input'
import styles from "./PublicationBar.module.css"


function PublicationBar({customClass}) {
  return (
    <div className={`${styles.PublicationBar} ${customClass}`}>
        <div className={styles.PublicationBarPublicate}>
            <Img customClass={styles.ImgIcon} path="../../src/assets/Icons/Gokupelon.jpeg"/>
            <Input customClass={styles.PublicationbarInputDisable} placeholder="¿Que estas Pensando, Nickname?" mode={true}/>
        </div>

        <div className={styles.PublicationBarDivButtons}>
        <ActiveButtons Value="Video en Vivo" path="../../../src/assets/Icons/Camare.png"/>
        <ActiveButtons Value="Foto" path="../../../src/assets/Icons/photo.png"/>
        <ActiveButtons Value="Sentimientos/actividad" path="../../../src/assets/Icons/Smile.png"/>
        </div>
      
    </div>
  )
}

export default PublicationBar
