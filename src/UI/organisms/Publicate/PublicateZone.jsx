import ImgPublicate from "../../Molecules/ImgPublicate/ImgPublicate";
import PublicateNicknameBar from "../../Molecules/PublicateNicknameBar/PublicateNicknameBar";
import PublicateOptionsBar from "../../Molecules/PublicateOptionsBar/PublicateOptionsBar";
import PublicationBar from "../../Molecules/PublicationBar/PublicationBar";
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
