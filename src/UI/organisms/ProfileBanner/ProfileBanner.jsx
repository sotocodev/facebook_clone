import Img from "../../atoms/Img/Img"
import ImgBanner from "../../molecules/ImgBanner/ImgBanner"
import PublicateOptionsBar from "../../molecules/PublicateOptionsBar/PublicateOptionsBar"
import styles from "./ProfileBanner.module.css"

function ProfileBanner({customClass}) {
  return (
    <div className={`${styles.ProfileBanner} ${customClass}`}>
        <Img customClass={styles.ProfileBanner__Img} path="/Gokupelon.jpeg"/>
    <div className={styles.ProfileBanner__NickNameSection}>
      <ImgBanner/>
      <div className={styles.ProfileBanner__Section1}>
      <PublicateOptionsBar
       customClassButton2={styles.ProfileBanner__ButtonGlass}
        customClassButton3={styles.ProfileBanner__ButtonGlass2}
          customClassButton={styles.ProfileBanner__Button}
            customClass={styles.ProfileBanner__PublicateOptionsBar}
            path1="/Close.svg" text1="Agregar una Historia"
            customClassSpan={styles.ImgBanner__Span}
            />
      </div>
    </div>
    </div>
  )
}

export default ProfileBanner
