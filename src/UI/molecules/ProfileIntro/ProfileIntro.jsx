
import styles from "./ProfileIntro.module.css"
import Button from "../../atoms/Button/Button";
import Paragraph from "../../atoms/Paragraph/Paragraph";
import Img from "../../atoms/Img/Img";
function ProfileIntro() {
  return (
    <>
      <div className={`${styles.intro}`}>
        <h2 className={`${styles.intro__title}`}>Intro</h2>
        <Button text='Add bio' customClass={styles.intro__button} />

        <div className={styles.intro__contact}>

          <div className={`${styles.infoContainer}`}>
            <Img customClass={styles.info_icon} pathImg={'https://cdn0.iconfinder.com/data/icons/leading-international-corporate-website-app-collec/16/Info-512.png'} />
            <Paragraph text="Profile Digital Creator" />
          </div>


          <div className={`${styles.infoContainer}`}>
            <Img customClass={styles.info_icon} pathImg={'https://cdn4.iconfinder.com/data/icons/picons-social/57/38-instagram-2-512.png'} />
            <Paragraph text="Profile Digital Creator" />
          </div>
          <div className={`${styles.infoContainer}`}>
            <Img customClass={styles.info_icon} pathImg={'https://iconape.com/wp-content/files/yd/367773/svg/logo-linkedin-logo-icon-png-svg.png'} />
            <Paragraph text="Profile Digital Creator" />
          </div>

        </div>


        <Button text='Edit details' customClass={styles.intro__button} />
        <Button text='Add featured' customClass={styles.intro__button} />

      </div>
    </>
  )
}

export default ProfileIntro
