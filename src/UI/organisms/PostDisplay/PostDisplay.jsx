import Img from "../../atoms/Img/Img"
import ImgBanner from "../../molecules/ImgBanner/ImgBanner"
import ProfileUserInfo from "../../molecules/ProfileUserInfo/ProfileUserInfo"
import PublicateOptionsBar from "../../molecules/PublicateOptionsBar/PublicateOptionsBar"
import styles from "./PostDisplay.module.css"
import Button from "../../atoms/Button/Button"
function PostDisplay({ customClass }) {
  return (
    <div className={`${styles.postContainer} ${customClass}`}>

      <div className={`${styles.optionsContainer}`}>
        <h2>Post</h2>

<div>
<Button customClass={`${styles.profileOptions_button}`} text='Filters' />
<Button customClass={`${styles.profileOptions_button}`} text='Manage posts' />
</div>



      </div>
      <hr />


      <div className={`${styles.optionsContainer}`}>

        <div  className={`${styles.listView}`}>
          <p>List view</p>
        </div>

        <div  className={`${styles.gridView}`}>
          <p>Grid view</p>
        </div>
        
      </div>
    </div>
  )
}

export default PostDisplay
