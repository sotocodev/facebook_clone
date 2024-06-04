import ImgBanner from '../../molecules/ImgBanner/ImgBanner';
import ProfileBanner from '../../organisms/ProfileBanner/ProfileBanner';
import styles from './ProfileTemplate.module.css';
// import ProfileIntro from '../../organisms/ProfileIntro/ProfileIntro';
import CardOfElements from '../../molecules/CardOfElements/CardOfElements';
import PublicationBar from '../../molecules/PublicationBar/PublicationBar';
import PublicateBox from '../../organisms/PublicateBox/PublicateBox';
import ProfileColumnLeft from '../../organisms/ProfileColumnLeft/ProfileColumnLeft';
import ProfileColumnRight from '../../organisms/ProfileColumnRight/ProfileColumnRight';

const ProfileTemplate = () => {

  return (
    <>
      <div className={styles.ProfileTemplate}>
        <ProfileBanner />
      </div>
      <div   className={styles.ProfieSection}>
<div className={styles.ProfieContentainer}>
<ProfileColumnLeft/>
      <ProfileColumnRight/>
</div>
    

      </div>
    </>


  )
}

export default ProfileTemplate;