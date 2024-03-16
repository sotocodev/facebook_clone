import ImgPublicate from "../../molecules/ImgPublicate/ImgPublicate";
import PublicateNicknameBar from "../../molecules/PublicateNicknameBar/PublicateNicknameBar";
import PublicateOptionsBar from "../../molecules/PublicateOptionsBar/PublicateOptionsBar";
import PublicationBar from "../../molecules/PublicationBar/PublicationBar";
import styles from "./PublicateZone.module.css";

function PublicateZone({ customClass }) {
  return (
    <section className={`${styles.PublicateZone} ${customClass}`}>
      <div className={styles.PublicateZone__Div_PublicBar}>
        <PublicationBar />
      </div>
      <div className={styles.PublicateZone__Div_PublicZone}>
        <PublicateNicknameBar />
        <ImgPublicate />
        <PublicateOptionsBar />
      </div>
    </section>
  );
}

export default PublicateZone;
