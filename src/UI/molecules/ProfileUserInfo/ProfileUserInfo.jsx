import Img from "../../atoms/Img/Img";
import styles from "./ProfileUserInfo.module.css"
import Button from "../../atoms/Button/Button";
import Paragraph from "../../atoms/Paragraph/Paragraph";

const ProfileUserInfo = ({ path, Text, textP }) => {


  return (
    <>


<div className={`${styles.userDistribution}`}>
  
      <div className={`${styles.ImgBanner__user}`}>

        <div className={`${styles.ImgBanner__userSection}`}>

          <div className={`${styles.ImgBanner__user_container}`}>
            <img className={`${styles.ImgBanner__user_img}`} src="https://avatarfiles.alphacoders.com/893/thumb-89303.gif" alt="" />
            <div className={`${styles.ImgBanner__user_icon}`}>
              <img src="https://www.svgrepo.com/show/904/photo-camera.svg" alt="" />
            </div>




          </div>








        </div>



      </div>





      <div className={`${styles.basicUserData}`}>



        <div>
          <h1>Usuario de Facebook</h1>

        </div>

        <div className={`${styles.basicUserData_followers}`}>
          <p>583 Followers</p> <p>390 following</p>

        </div>



        <div className={`${styles.followersCollection}`}>
          <Img customClass={`${styles.followersCollection__pic}`} pathImg={"https://avatarfiles.alphacoders.com/893/thumb-89303.gif"} />
          <Img customClass={`${styles.followersCollection__pic}`} pathImg={"https://avatarfiles.alphacoders.com/893/thumb-89303.gif"} />
          <Img customClass={`${styles.followersCollection__pic}`} pathImg={"https://avatarfiles.alphacoders.com/893/thumb-89303.gif"} />
          <Img customClass={`${styles.followersCollection__pic}`} pathImg={"https://avatarfiles.alphacoders.com/893/thumb-89303.gif"} />
          <Img customClass={`${styles.followersCollection__pic}`} pathImg={"https://avatarfiles.alphacoders.com/893/thumb-89303.gif"} />
          <Img customClass={`${styles.followersCollection__pic}`} pathImg={"https://avatarfiles.alphacoders.com/893/thumb-89303.gif"} />
          <Img customClass={`${styles.followersCollection__pic}`} pathImg={"https://avatarfiles.alphacoders.com/893/thumb-89303.gif"} />
          <Img customClass={`${styles.followersCollection__pic}`} pathImg={"https://avatarfiles.alphacoders.com/893/thumb-89303.gif"} />

        </div>
        {/* <div className={`${styles.basicUserData}`}>








          </div> */}



      </div>



      <div className={`${styles.profileOptions}`} >
        <Button customClass={`${styles.profileOptions_button_blue}`} text='View tools' />
        <Button customClass={`${styles.profileOptions_button_edit}`} text='Edit' />
        <Button customClass={`${styles.profileOptions_button}`} text='Add to story' />
      </div>


      </div>

      <br/>
      <hr></hr>


      <div className={`${styles.ListSections}`}>

        <div className={`${styles.ListSections__main}`}>


          <Paragraph text="Post" customClass={styles.section__name} />
          <Paragraph text="About" customClass={styles.section__name} />
          <Paragraph text="Reels" customClass={styles.section__name} />
          <Paragraph text="Photos" customClass={styles.section__name} />
          <Paragraph text="Videos" customClass={styles.section__name} />
          <Paragraph text="Groups" customClass={styles.section__name} />
          <Paragraph text="More" customClass={styles.section__name} />
        </div>
        <div className={`${styles.ListSections__secondary}`}>
          <Paragraph text="..." customClass={`${styles.profileOptions_button_edit}`} />

        </div>
      </div>
    </>
  )
}

export default ProfileUserInfo;