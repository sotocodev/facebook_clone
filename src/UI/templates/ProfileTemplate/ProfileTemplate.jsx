import ImgBanner from '../../molecules/ImgBanner/ImgBanner';
import ProfileBanner from '../../organisms/ProfileBanner/ProfileBanner';
import styles from './ProfileTemplate.module.css';

const ProfileTemplate = () => {
  return (
    <div className={styles.ProfileTemplate}>
      <ProfileBanner/>
    </div>
  )
}

export default ProfileTemplate;