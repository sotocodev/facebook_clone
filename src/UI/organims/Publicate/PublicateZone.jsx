import PublicationBar from '../../molecules/PublicationBar/PublicationBar'
import PublicateNicknameBar from '../../molecules/PublicateNicknameBar/PublicateNicknameBar'
import ImgPublicate from '../../molecules/ImgPublicate/ImgPublicate'
import PublicateOptionsBar from '../../molecules/PublicateOptionsBar/PublicateOptionsBar'
import styles from "./PublicateZone.module.css"


function PublicateZone({customClass}) {
  return (
    <section className={`${styles.PublicateZone} ${customClass}`} >
        <div className={styles.PublicateZone__Div_PublicBar}>
            <PublicationBar/>
        </div>
        <div className={styles.PublicateZone__Div_PublicZone}>
            <PublicateNicknameBar/>
            <ImgPublicate path="/ImgTribute.jpg"/>
            <PublicateOptionsBar/>
        </div>
    </section>
  )
}

export default PublicateZone
