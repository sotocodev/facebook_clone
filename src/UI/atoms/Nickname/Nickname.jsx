import styles from './Nickname.module.css';

function Nickname({
  nickname,
  time,
  customClass,
  seguir,
  customClassP,
  customClassSp,
}) {
  return seguir ? (
    <div className={`${styles.Nickname} ${customClass}`}>
      <p className={`${styles.NickName__Paragraph} ${customClassP}`}>
        {nickname}
        <span className={`${styles.NickName__SeguirButton}`}>Seguir</span>
      </p>
      <span className={`${styles.NickName__Span} ${customClassSp}`}>
        {time}
      </span>
    </div>
  ) : (
    <div className={`${styles.NickName} ${customClass}`}>
      <p className={`${styles.NickName__Paragraph} ${customClassP}`}>
        {nickname}
      </p>
      <span className={`${styles.NickName__Span} ${customClassSp}`}>
        {time}
      </span>
    </div>
  );
}

export default Nickname;
