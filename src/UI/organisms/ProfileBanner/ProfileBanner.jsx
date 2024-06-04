import Img from "../../atoms/Img/Img"
import ImgBanner from "../../molecules/ImgBanner/ImgBanner"
import ProfileUserInfo from "../../molecules/ProfileUserInfo/ProfileUserInfo"
import PublicateOptionsBar from "../../molecules/PublicateOptionsBar/PublicateOptionsBar"
import styles from "./ProfileBanner.module.css"

function ProfileBanner({ customClass }) {
  return (
    <div className={`${styles.ProfileBanner} ${customClass}`}>
      {/* <Img customClass={styles.ProfileBanner__Img} path="/Gokupelon.jpeg" /> */}
      {/* <div className={styles.ProfileBanner__NickNameSection}> */}

      <div className={`${styles.ImgBanner}`}>
      <div className={`${styles.ImgBanner__imgContainer}`}>
        <ImgBanner/>
        <ProfileUserInfo/>
        </div>

      </div>
    </div>
  )
}

export default ProfileBanner
