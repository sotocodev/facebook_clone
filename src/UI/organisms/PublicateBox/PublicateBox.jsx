import ImgPublicate from '../../molecules/ImgPublicate/ImgPublicate';
import PublicateNicknameBar from '../../molecules/PublicateNicknameBar/PublicateNicknameBar';
import PublicateOptionsBar from '../../molecules/PublicateOptionsBar/PublicateOptionsBar';
import styles from './PublicateBox.module.css';

function PublicateBox({
  customClassBox,
  pathImg,
  pathVideo,
  seguir,
  time,
  nickname,
}) {
  return (
    <div className={`${styles.PublicateBox} ${customClassBox}`}>
      <PublicateNicknameBar
        customClass={styles.PublicateBox__Nickname}
        time={time}
        nickname={nickname}
        seguir={seguir}
      />
      <ImgPublicate pathImg={pathImg} pathVideo={pathVideo} />
      <PublicateOptionsBar customClass={styles.PublicateBox__Options} />
    </div>
  );
}

export default PublicateBox;
