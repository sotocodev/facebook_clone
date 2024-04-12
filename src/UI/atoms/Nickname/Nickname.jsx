import styles from "./Nickname.module.css"

function Nickname({nickname,time, customClass, seguir}) {
  return seguir ? (
    <div className={`${styles.Nickname} ${customClass}`}>
        <p className={styles.NickName__Paragraph}>
          {nickname}
          <span className={`${styles.NickName__SeguirButton}`}>Seguir</span> 
        </p>
        <span className={styles.NickName__Span}>{time}</span>
    </div>
  ):(
    <div className={`${styles.NickName} ${customClass}`}>
    <p className={styles.NickName__Paragraph}>
    {nickname}
    </p>
    <span className={styles.NickName__Span}>{time}</span>
   </div>
  )
}

export default Nickname
